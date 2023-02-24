import { type SyntheticEvent, type ReactElement, useCallback, useMemo } from 'react'
import { sanitize } from 'isomorphic-dompurify'

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
      const cleanHtml = sanitize(val)
      if (cleanHtml !== content) {
        onEdit(cleanHtml)
      }
    },
    [content, onEdit],
  )

  const hasHtml = /[<>]/.test(content)
  const cleanHtml = useMemo(() => (hasHtml ? sanitize(content) : content), [hasHtml, content])

  if (!isEditable && !hasHtml) return <>{content}</>

  return (
    <span
      contentEditable={isEditable}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
      onBlur={onBlur}
      onClick={isEditable ? preventClick : undefined}
    />
  )
}

export default EditableItem
