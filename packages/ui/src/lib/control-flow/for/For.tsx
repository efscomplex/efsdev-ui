import React, { useEffect, useState } from 'react'

type Props = Parameters<typeof React.createElement>[1]

export type ForProps<T = any> = {
  each: readonly T[] | Promise<T>[] | Promise<T>
  props?: Props
  fallback?: JSX.Element
  as?: (props: any) => JSX.Element
  render?: (item: T) => JSX.Element
  children?: (item: T) => JSX.Element
}

async function promisify<T>(item: T): Promise<T> {
  return item
}
async function getAllResources<R>(resources: R[]) {
  return await Promise.all(resources)
}
export const For: React.FC<ForProps> = ({
  each,
  render,
  as,
  props,
  fallback,
  children,
}) => {
  const [items, setItems] = useState<any>(null)

  useEffect(() => {
    const flatenedItems = [each].flat()
    const asyncItems = flatenedItems.map((item) => promisify(item))
    getAllResources(asyncItems).then((resources) => {
      const dataToRender = Array.isArray(each)
        ? resources
        : (resources[0] as any)
      if (typeof children === 'function') {
        setItems(dataToRender.map(children))
      } else {
        const items = render
          ? dataToRender.map((item: any) => render(item))
          : resources
        setItems(items)
      }
    })
  }, [render, each, children])

  if (!items || items.length === 0) return fallback || null

  return as
    ? React.createElement(as, props, React.Children.toArray(items))
    : (React.Children.toArray(items) as any)
}
