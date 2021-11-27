import { styled } from 'goober'
import type { ButtonHTMLAttributes } from 'react'

type BtnSize = 'small' | 'medium' | 'large'
type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error'

export type BtnProps = {
  size: BtnSize
  variant: ColorVariant
  label?: string
  ghost?: boolean
  weight?: 'light' | 'bold' | 'normal'
} & ButtonHTMLAttributes<HTMLButtonElement>

const getBtnFontSize = (size: BtnSize) => {
  const sizeMap: Record<BtnSize, string> = {
    small: 'var(--text-s,.8rem)',
    medium: 'var(--text-m,1.2rem)',
    large: 'var(--text-l,1.5rem)',
  }
  return sizeMap[size]
}

const colorVariant: Record<ColorVariant, string> = {
  primary: 'var(--primary, blue)',
  secondary: 'var(--secondary, purple)',
  warning: 'var(--warning, yellow)',
  error: 'var(--error, red)',
  success: 'var(--success, green)',
}

export const Btn = styled('button')`
  font-size: ${(props: BtnProps) => props.size && getBtnFontSize(props.size)};
  font-weight: ${(props: BtnProps) => props.weight || 'normal'};

  border-radius: 5px;
  cursor: pointer;

  ${(props: BtnProps) => {
    const color = colorVariant[props.variant]
    return `
        color: ${!props.ghost ? color : '#fff'};
        border: 1px solid ${!props.ghost ? color : '#fff'};
        background-color: ${props.ghost ? color : 'transparent'};
    `
  }};
`
