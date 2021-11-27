import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { styled } from 'goober'
import React from 'react'
import { GlobalStyles } from '../../../styles/GlobalStyles'
import { Button, ButtonProps } from '../..'

export default {
  component: Button,
  title: 'Components / Inputs / Button',
  decorators: [(story: Function) => <Container>{story()}</Container>],
  argTypes: {
    variant: {
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof Button>

export const Variants: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <GlobalStyles />
      <Button {...args} variant="primary" />
      <Button {...args} variant="secondary" />
      <Button {...args} variant="success" />
      <Button {...args} variant="warning" />
      <Button {...args} variant="error" />
    </>
  )
}
const Container = styled('div')`
  margin-top: 7rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`
const args: Partial<ButtonProps> = {
  size: 'medium',
  ghost: true,
  label: 'Button',
}
Variants.bind({})
Variants.args = args
