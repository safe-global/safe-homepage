import { type SyntheticEvent, type ReactElement, useCallback } from 'react'

const preventClick = (e: SyntheticEvent) => {
  e.preventDefault()
  e.stopPropagation()
}

const EditableItem = ({
  content,
  onEdit,
  isEditable,
}: {
  content: string
  onEdit: (val: string) => void
  isEditable: boolean
}): ReactElement => {
  const onBlur = useCallback(
    (e: SyntheticEvent) => {
      const val = (e.target as HTMLElement).innerHTML || ''
      if (val !== content) {
        onEdit(val)
      }
    },
    [content, onEdit],
  )

  if (!isEditable && !/[<>]/.test(content)) return <>{content}</>

  return (
    <span
      contentEditable={isEditable}
      dangerouslySetInnerHTML={{ __html: content }}
      onBlur={onBlur}
      onClick={preventClick}
    />
  )
}

export default EditableItem
