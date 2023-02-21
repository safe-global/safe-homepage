import type { ComponentType } from 'react'

const getComponentByName = (component: string, FallbackComponent: () => JSX.Element) => {
  let Component: ComponentType<any>
  try {
    Component = require(`@/components/${component}`).default
    if (Component == null) throw new Error(`Component ${component} is null`)
  } catch (e) {
    console.error(e)
    Component = FallbackComponent
  }

  return Component
}

export default getComponentByName
