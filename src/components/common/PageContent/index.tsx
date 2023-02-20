import {
  type ReactElement,
  type SyntheticEvent,
  useEffect,
  useState,
  useCallback,
  type Dispatch,
  type SetStateAction,
  type ComponentType,
} from 'react'
import _cloneDeepWith from 'lodash/cloneDeepWith'
import { Button } from '@mui/material'

const EDITABLE_URL_HASH = '#admin'

const EditableFields = {
  title: true,
  text: true,
  caption: true,
}

type ContentItem = {
  component: string
} & any

type ContentItems = Array<ContentItem>

const preventClick = (e: SyntheticEvent) => {
  e.preventDefault()
  e.stopPropagation()
}

const NotFoundComponent = () => <div>Component not found</div>

const EditableItem = ({
  content,
  onEdit,
  isEditable,
}: {
  content: string
  onEdit: (val: string) => void
  isEditable: boolean
}): ReactElement | string => {
  const [html, setHtml] = useState<string>(content)

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

  if (!isEditable && !/[<>]/.test(html)) return html

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
    if (typeof key !== 'string' || (key && !(key in EditableFields))) return

    const onEdit = (val: string) => {
      setNewContent((prev: ContentItems) => {
        return _cloneDeepWith(prev, (oldItem) => {
          if (oldItem === item) return val
        })
      })
    }

    return <EditableItem key={key} onEdit={onEdit} isEditable={isEditable} content={item} />
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
          Component = NotFoundComponent
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
