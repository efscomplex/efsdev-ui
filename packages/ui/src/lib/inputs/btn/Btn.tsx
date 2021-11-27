import React from 'react'
import { Btn, BtnProps } from './styles'

export type ButtonProps = BtnProps
export const Button: React.FC<BtnProps> = ({
  variant = 'primary',
  size = 'medium',
  label,
  children,
  ...props
}) => {
  if (!(label || children)) return null

  return (
    <Btn role="button" variant={variant} size={size} {...props}>
      {label || children}
    </Btn>
  )
}
