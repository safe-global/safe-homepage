import { type ReactElement, useState, useCallback, type Dispatch, type SetStateAction, type ComponentType } from 'react'
import _cloneDeepWith from 'lodash/cloneDeepWith'
import { Button } from '@mui/material'
import EditableItem from './EditableItem'
import { useRouter } from 'next/router'

const ADMIN_URL_HASH = 'admin'

const EditableFields = {
  title: true,
  text: true,
  caption: true,
}

type ContentItem = {
  component: string
} & any

type ContentItems = Array<ContentItem>

const NotFoundComponent = () => <div>Component not found</div>

const getEditableProps = (
  props: Partial<ContentItem>,
  setNewContent: Dispatch<SetStateAction<ContentItems>>,
  isEditable: boolean,
): ReactElement => {
  return _cloneDeepWith(props, (item, key) => {
    if (typeof item !== 'string' || (key && !(key in EditableFields))) return

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
  const [newContent, setNewContent] = useState<ContentItems>(content)
  const [saved, setSaved] = useState<boolean>(false)
  const isEditable = useRouter().asPath.split('#')[1] === ADMIN_URL_HASH

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
          if (Component == null) throw new Error(`Component ${component} is null`)
        } catch (e) {
          console.error(e)
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
