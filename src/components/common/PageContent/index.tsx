import {
  type ComponentType,
  type ReactElement,
  type SyntheticEvent,
  useEffect,
  useState,
  useCallback,
  type Dispatch,
  type SetStateAction,
} from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import _cloneDeepWith from 'lodash/cloneDeepWith'
import { Button } from '@mui/material'

const EDITABLE_URL_HASH = '#admin'

type ContentItem<T> = {
  component: ComponentType<T>
} & T

type ContentItems = Array<ContentItem<any>>

const preventClick = (e: SyntheticEvent) => {
  e.preventDefault()
  e.stopPropagation()
}

const EditableItem = ({
  children,
  onEdit,
}: {
  children: ReactElement | string
  onEdit: (val: string) => void
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

  return (
    <span
      contentEditable
      dangerouslySetInnerHTML={{ __html: html }}
      onBlur={onBlur}
      onInput={onInput}
      onClick={preventClick}
    />
  )
}

const getEditableProps = (
  props: Partial<ContentItem<any>>,
  setNewContent: Dispatch<SetStateAction<ContentItems>>,
): ReactElement => {
  return _cloneDeepWith(props, (item, key) => {
    // Continue the recursion if the item is an object/array
    if (Array.isArray(item) || (item != null && typeof item === 'object' && !item.props)) {
      return
    }
    // Skip attributes
    if (key === 'href') return item

    const onEdit = (val: string) => {
      setNewContent((prev: ContentItems) => {
        return _cloneDeepWith(prev, (oldItem) => {
          if (oldItem === item) return val
        })
      })
    }

    return (
      <EditableItem key={key} onEdit={onEdit}>
        {item}
      </EditableItem>
    )
  })
}

const PageContent = ({ content }: { content: ContentItems }): ReactElement => {
  const [isEditable, setIsEditable] = useState<boolean>(false)
  const [newContent, setNewContent] = useState<ContentItems>(content)

  useEffect(() => {
    if (location.hash === EDITABLE_URL_HASH) {
      setIsEditable(true)
    }
  }, [isEditable])

  const onSave = () => {
    console.log(newContent)
  }

  return (
    <>
      {/* Render components from the content */}
      {newContent.map(({ component: Component, ...rest }, index) => {
        const contentProps = isEditable ? getEditableProps(rest, setNewContent) : rest

        return <Component key={index} {...contentProps} />
      })}

      {/* Save edits button */}
      {newContent !== content && (
        <Button
          variant="contained"
          size="large"
          onClick={onSave}
          sx={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 1000 }}
        >
          Save edits
        </Button>
      )}
    </>
  )
}

export default PageContent
