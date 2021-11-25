import React from 'react'
import { Btn, BtnProps } from './styles'

export const Button: React.FC<BtnProps> = ({
  primary,
  size = 'medium',
  label,
  children,
  ...props
}) => {
  return (
    <Btn role="button" type="button" primary={primary} size={size} {...props}>
      {label || children}
    </Btn>
  )
}
