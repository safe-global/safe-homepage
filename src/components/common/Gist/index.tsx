import { useEffect, useRef } from 'react'
import type { ReactElement } from 'react'

const getGistHtml = (id: string, file?: string) => {
  const fileArg = file ? `?file=${file}` : ''
  const gistUrl = `https://gist.github.com/${id}.js${fileArg}`

  const gistScript = `<script type="text/javascript" src="${gistUrl}"></script>`
  const styles = '<style>*{font-size:12px;}</style>'

  const elementId = file ? `gist-${id}-${file}` : `gist-${id}`
  const resizeScript = `onload="parent.document.getElementById('${elementId}').style.height=document.body.scrollHeight + 'px'"`

  return `<html><head><base target="_parent">${styles}</head><body ${resizeScript}>${gistScript}</body></html>`
}

export const Gist = ({ id, file }: { id: string; file?: string }): ReactElement => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current

    if (!iframe) {
      return
    }

    // @ts-expect-error - Property 'document' does not exist on type 'HTMLIFrameElement'
    const document = iframe.contentDocument || iframe.contentWindow?.document || iframe.document

    document.open()

    const iframeHtml = getGistHtml(id, file)
    document.writeln(iframeHtml)
    document.close()
  }, [])

  return <iframe ref={iframeRef} frameBorder={0} width="100%" id={file ? `gist-${id}-${file}` : `gist-${id}`} />
}
