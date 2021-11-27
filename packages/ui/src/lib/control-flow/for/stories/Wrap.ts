import { styled } from 'goober'

export const PokemonWrap = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  border-radius: 7px;
  background-color: #333;
  padding: 2rem;
  & > div {
    background-color: #fff;
    padding: 1rem;
  }
`
