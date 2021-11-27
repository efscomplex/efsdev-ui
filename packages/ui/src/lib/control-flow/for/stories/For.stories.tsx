import { Container } from '@/layout'
import { GlobalStyles } from '@/styles/GlobalStyles'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { For } from '../For'
import { PokemonWrap } from './Wrap'

export default {
  component: For,
  title: 'Components / Control Flow / For',
  decorators: [(story: Function) => <Container>{story()}</Container>],
} as ComponentMeta<typeof For>

type UserInfo = { name: string; age: number }
const userInfo = ({ name, age }: UserInfo) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  )
}
const items = [
  { name: 'edi', age: 32 },
  { name: 'bulbasur', age: 15 },
]

const ForInfo: ComponentStory<typeof For> = (args) => {
  return (
    <>
      <GlobalStyles />
      <For {...args} />
    </>
  )
}

export const ForBasic = ForInfo
ForBasic.bind({})
ForBasic.args = {
  each: items,
  render: userInfo,
  as: ({ name, age }) => (
    <h1>
      {name} · {age}
    </h1>
  ),
  fallback: <h1>loading data...</h1>,
}

const resource = Promise.resolve(
  fetch('http://localhost:5050/pokemons-api/pokemons').then((resp) =>
    resp.json(),
  ),
)

export const ForAsync = ForInfo
ForAsync.bind({})
ForAsync.args = {
  each: resource,
  render: ({ name, image }) => (
    <div>
      <h1>{name}</h1>
      <img alt="poki" src={image} width="140px" />
    </div>
  ),
  as: PokemonWrap,
  fallback: <h1>loading data...</h1>,
}
