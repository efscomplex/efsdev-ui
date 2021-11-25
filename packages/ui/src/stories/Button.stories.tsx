import { Button } from '../lib/inputs'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

export default {
  title: 'Inputs/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const onClick = () => alert('clicked!!')
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} onClick={onClick} />
)

const args = {
  primary: true,
  label: 'Button',
  ghost: false,
  thin: false,
}
export const Primary = Template.bind({})
Primary.args = args

export const Ghost = Template.bind({})
Ghost.args = {
  ...args,
  ghost: true,
}
export const Bold = Template.bind({})
Bold.args = {
  ...args,
  bold: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...args,
  secondary: true,
}

export const Large = Template.bind({})
Large.args = {
  ...args,
  size: 'large',
}

export const Small = Template.bind({})
Small.args = {
  ...args,
  size: 'small',
}
