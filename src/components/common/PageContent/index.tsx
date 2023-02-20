import {
  type ReactElement,
  type SyntheticEvent,
  useEffect,
  useState,
  useCallback,
  type Dispatch,
  type SetStateAction,
  ComponentType,
} from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import _cloneDeepWith from 'lodash/cloneDeepWith'
import { Button } from '@mui/material'

const EDITABLE_URL_HASH = '#admin'

type ContentItem = {
  component: string
} & any

type ContentItems = Array<ContentItem>

const preventClick = (e: SyntheticEvent) => {
  e.preventDefault()
  e.stopPropagation()
}

const EditableItem = ({
  children,
  onEdit,
  isEditable,
}: {
  children: ReactElement | string
  onEdit: (val: string) => void
  isEditable: boolean
}): ReactElement => {
  const [html, setHtml] = useState<string>(typeof children === 'string' ? children : renderToStaticMarkup(children))

  const onInput = useCallback(
    (e: SyntheticEvent) => {
      const val = (e.target as HTMLElement).innerHTML || ''
      onEdit(val)
    },
    [onEdit],
  )

  const onBlur = useCallback((e: SyntheticEvent) => {
    const val = (e.target as HTMLElement).innerHTML || ''
    setHtml(val)
  }, [])

  if (!isEditable && !/[<>]/.test(html)) return <>{html}</>

  return (
    <span
      contentEditable={isEditable}
      dangerouslySetInnerHTML={{ __html: html }}
      onBlur={onBlur}
      onInput={onInput}
      onClick={preventClick}
    />
  )
}

const getEditableProps = (
  props: Partial<ContentItem>,
  setNewContent: Dispatch<SetStateAction<ContentItems>>,
  isEditable: boolean,
): ReactElement => {
  return _cloneDeepWith(props, (item, key) => {
    // Continue the recursion if the item is an object/array
    if (Array.isArray(item) || (item != null && typeof item === 'object' && !item.props)) {
      return
    }
    // Skip attributes
    if (key === 'href' || key === 'alt' || key === 'src') return item

    const onEdit = (val: string) => {
      setNewContent((prev: ContentItems) => {
        return _cloneDeepWith(prev, (oldItem) => {
          if (oldItem === item) return val
          if (typeof item === 'object') return renderToStaticMarkup(item)
        })
      })
    }

    return (
      <EditableItem key={key} onEdit={onEdit} isEditable={isEditable}>
        {item}
      </EditableItem>
    )
  })
}

const PageContent = ({ content }: { content: ContentItems }): ReactElement => {
  const [isEditable, setIsEditable] = useState<boolean>(false)
  const [newContent, setNewContent] = useState<ContentItems>(content)
  const [saved, setSaved] = useState<boolean>(false)

  useEffect(() => {
    if (location.hash === EDITABLE_URL_HASH) {
      setIsEditable(true)
    }
  }, [isEditable])

  const onSave = useCallback(() => {
    const data = JSON.stringify(newContent, null, 2)
    navigator.clipboard.writeText(data)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }, [newContent])

  return (
    <>
      {/* Render components from the content */}
      {newContent.map(({ component, ...rest }, index) => {
        const contentProps = getEditableProps(rest, setNewContent, isEditable)
        let Component: ComponentType<any>
        try {
          Component = require(`@/components/${component}`).default
          if (Component == null) throw new Error('Component is null')
        } catch (e) {
          Component = () => <div>Component {component} not found</div>
        }
        return <Component {...contentProps} key={index} />
      })}

      {/* Save edits button */}
      {newContent !== content && (
        <Button
          variant="contained"
          size="large"
          onClick={onSave}
          sx={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 1000 }}
          disabled={saved}
        >
          {saved ? 'Copied JSON' : 'Save edits'}
        </Button>
      )}
    </>
  )
}

export default PageContent
