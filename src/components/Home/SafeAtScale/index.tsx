import { type BaseBlock } from '@/components/Home/types'
import { Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import { Fragment, useRef, type CSSProperties } from 'react'
import { useSafeStats } from '@/hooks/useSafeStats'
import useScrollReveal from '@/hooks/useScrollReveal'
import TickerElement from './TickerElement'

const jsxOrStringToString = (s: string | JSX.Element): string =>
  s instanceof String ? s : (s as JSX.Element).props.content

const SafeAtScale = ({ caption, title, items }: BaseBlock) => {
  const safeStats = useSafeStats()

  const containerRef = useRef<HTMLDivElement>(null)
  const visibleInViewport = useScrollReveal(containerRef, 50, true)

  return (
    <div className={css.gradient}>
      <div className={css.bg}>
        <Container ref={containerRef}>
          <Grid container className={layoutCss.containerMedium}>
            <Grid item xs={12} className={layoutCss.centeredContent}>
              <Typography variant="caption" className={css.caption}>
                {caption}
              </Typography>
              <Typography variant="h2" className={css.title}>
                {title}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <div
                className={`${css.metricsWrapper} ${layoutCss.centeredContent} ${
                  visibleInViewport ? css.open : css.closed
                }`}
              >
                <div className={css.brackets}>
                  <div className={css.left}>
                    <video autoPlay muted playsInline loop className={css.video}>
                      <source src="/videos/Home/brackets-left-hevc.mov" type="video/quicktime; codecs=hvc1" />
                      <source src="/videos/Home/brackets-left-vp9.webm" type="video/webm" />
                    </video>
                  </div>
                  <div className={css.metricsSpacer}></div>
                  <div className={css.right}>
                    <video autoPlay muted playsInline loop className={css.video}>
                      <source src="/videos/Home/brackets-right-hevc.mov" type="video/quicktime; codecs=hvc1" />
                      <source src="/videos/Home/brackets-right-vp9.webm" type="video/webm" />
                    </video>
                  </div>
                </div>
                <div className={css.bracketSpacer}></div>
                <div className={css.metricsInner}>
                  {items?.map((item, index) => {
                    const fallback = jsxOrStringToString(item.title ?? '0')
                    const value = safeStats[index] ?? fallback
                    const key = jsxOrStringToString(item.text ?? index.toString())

                    return (
                      <Fragment key={`${item.text}_${index}`}>
                        <a
                          href={item.link?.href}
                          target="_blank"
                          rel="noreferrer"
                          className={css.metric}
                          style={{ '--i': index } as CSSProperties}
                          key={'metric-' + index}
                        >
                          <TickerElement
                            run={visibleInViewport}
                            className={css.value}
                            toValue={value}
                            rollDurationSecs={1.5}
                            delayTimeMs={350 + 150 * index}
                            key={index}
                          />
                          <Typography variant="caption" className={css.caption}>
                            {item.text}
                          </Typography>
                        </a>
                      </Fragment>
                    )
                  })}
                </div>
                <div className={css.bracketSpacer}></div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default SafeAtScale
