import { useRef } from 'react'
import clsx from 'clsx'
import css from './styles.module.css'

const FourSquareAnimation = () => {
  const rectTl = useRef<HTMLDivElement>(null)
  const rectTr = useRef<HTMLDivElement>(null)
  const rectBl = useRef<HTMLDivElement>(null)
  const rectBr = useRef<HTMLDivElement>(null)
  const rectCenter = useRef<HTMLDivElement>(null)

  return (
    <div className={css.box}>
      <div className={clsx(css.rect, css.rectTl)} ref={rectTl} />
      <div className={clsx(css.rect, css.rectTr)} ref={rectTr} />
      <div className={clsx(css.rect, css.rectBl)} ref={rectBl} />
      <div className={clsx(css.rect, css.rectBr)} ref={rectBr} />
      <div className={clsx(css.rect, css.rectCenter)} ref={rectCenter} />

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="square-gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default FourSquareAnimation
