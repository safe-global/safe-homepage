import type { DetailedHTMLProps, ImgHTMLAttributes, ReactElement } from 'react'

type ImageProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

export const Image = ({
  // Destructuring required by linter
  // @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md#good
  alt = '',
  ...props
}: ImageProps): ReactElement => {
  return <img alt={alt} {...props} />
}
