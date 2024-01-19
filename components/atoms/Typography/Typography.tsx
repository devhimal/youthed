import classNames from "classnames"
import { CSSProperties } from "react"
import styles from "./typography.module.scss"
import { HeadingOptions } from "@/types/types"

interface HeadingProps {
  as?: HeadingOptions
  style?: CSSProperties
  className?: string
  id?: string
  children?: JSX.Element | string
}

export const H1 = ({ style, children, className = "" }: HeadingProps) => (
  <h1 className={classNames(styles.h1, className)} style={style}>
    {children}
  </h1>
)

export const H2 = ({
  as = "H2",
  style,
  children,
  className = "",
  id,
}: HeadingProps) => {
  // There might be cases where we want h2 styling on an h1 compoennt
  // This is done purely to maintain semantic HTML and for SEO purposes
  switch (as) {
    case "H1":
      return (
        <h1 className={classNames(styles.h2, className)} style={style} id={id}>
          {children}
        </h1>
      )
    case "H2":
      return (
        <h2 className={classNames(styles.h2, className)} style={style} id={id}>
          {children}
        </h2>
      )
  }
}

export const H3 = ({ style, children, className, id }: HeadingProps) => (
  <h3 className={classNames(styles.h3, className)} style={style} id={id}>
    {children}
  </h3>
)

export const H4 = ({ style, children, className }: HeadingProps) => (
  <h4 className={classNames(styles.h4, className)} style={style}>
    {children}
  </h4>
)

type TypographyOptions = {
  [key in HeadingOptions]: any
}

export const Typography: TypographyOptions = { H1, H2, H3, H4 }
