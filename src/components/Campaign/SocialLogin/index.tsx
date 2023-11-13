import React from 'react'
import { capitalizeFirstLetter } from '@/lib/capitalizeFirstLetter'
import getComponentByName from '@/lib/getComponentByName'
import css from './styles.module.css'
import type { TypePageFields } from '@/contentful/types'
import type { Entry } from 'contentful'

const SocialLogin = (props: TypePageFields) => {
  const content = props.content as unknown as Entry[]

  return (
    <div className={css.pageContainer}>
      {content.map((item, index: number) => {
        const contentType = item.sys.contentType.sys.id
        const componentName = capitalizeFirstLetter(contentType)

        const Component = getComponentByName(`Campaign/${componentName}`, () => <></>)

        return <Component {...item} key={index} />
      })}
    </div>
  )
}

export default SocialLogin
