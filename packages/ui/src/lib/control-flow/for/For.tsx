type ForProps = {
  each: any
  as: any
  render: <T>(props: T) => React.FC<T>
}

export const For: React.FC<ForProps> = ({ each, render, as }) => {
  return each.map()
}
