import type { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const colorVariants = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
] as const
type ColorVariant = typeof colorVariants[number]

type VariantProps = {
  [key in ColorVariant]?: boolean
}
export type BtnSize = 'small' | 'medium' | 'large'

export type BtnProps = {
  size: BtnSize
  label?: string
  ghost?: boolean
  thin?: boolean
  bold?: boolean
} & VariantProps &
  ButtonHTMLAttributes<HTMLButtonElement>

const getBtnFontSize = (size: BtnSize) => {
  const sizeMap: Record<BtnSize, string> = {
    small: '.8rem',
    medium: '1.2rem',
    large: '1.5rem',
  }
  return sizeMap[size]
}

const colorVariant: Record<ColorVariant, string> = {
  primary: 'var(--primary, blue)',
  secondary: 'var(--secondary, purple)',
  warning: 'var(--warning, yellow)',
  danger: 'var(--danger, red)',
  success: 'var(--success, green)',
}

const getVariantFromProps = <P extends VariantProps>(props: P) =>
  Object.keys(props).find((prop) => colorVariants.includes(prop as any))

const getColorVariant = <P extends VariantProps>(props: P) =>
  colorVariant[getVariantFromProps(props) as ColorVariant]

export const Btn = styled('button')<BtnProps>`
  font-size: ${(props) => props.size && getBtnFontSize(props.size)};
  font-weight: ${(props) =>
    props.thin ? '100' : props.bold ? 'bold' : 'normal'};
  border-radius: 5px;
  cursor: pointer;
  ${(props) => {
    const color = getColorVariant(props as VariantProps)
    return `
        color: ${!props.ghost ? color : '#fff'};
        border: 1px solid ${!props.ghost ? color : '#fff'};
        background-color: ${props.ghost ? color : 'transparent'};
    `
  }};
`
