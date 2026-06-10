'use client'
import { useState } from 'react'
import type { ComponentPropsWithoutRef, CSSProperties, ElementType } from 'react'

type HoverableProps<T extends ElementType> = {
  as?: T
  style?: CSSProperties
  hoverStyle?: CSSProperties
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'style'>

export default function Hoverable<T extends ElementType = 'div'>({
  as,
  style,
  hoverStyle,
  children,
  ...rest
}: HoverableProps<T>) {
  const Tag = (as ?? 'div') as ElementType
  const [hover, setHover] = useState(false)
  return (
    <Tag
      style={{ ...style, ...(hover ? hoverStyle : null) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
