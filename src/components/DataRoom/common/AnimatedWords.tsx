import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedWords({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
  const elements = React.Children.toArray(children)
  const extraDelay = delay ? delay : 0
  return (
    <div style={{ width: 'max-content' }}>
      {elements.map((element, index) => {
        if (typeof element === 'string') {
          return element.split(' ').map((word, wordIndex) => (
            <motion.span
              key={`${index}-${wordIndex}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: extraDelay + (index + wordIndex) * 0.1 }}
              style={{ marginRight: '0.5rem', display: 'inline-block' }}
            >
              {word}
            </motion.span>
          ))
        } else if (React.isValidElement(element) && element.type === 'br') {
          return <br key={index} />
        } else {
          return (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: extraDelay + index * 0.1 }}
              style={{ display: 'inline-block' }}
            >
              {element}
            </motion.span>
          )
        }
      })}
    </div>
  )
}
