import { styled } from 'goober'

type RowProps = {
  gap?: string
  as?: string
}
export const Row = styled('div')<RowProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.gap};
`
