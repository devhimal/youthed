import classNames from "classnames"
import Link from "next/link"
import { CSSProperties } from "react"
import styles from "./index.module.scss"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

interface Props {
  color?: string
  mode?: "link" | "button"
  type?: "submit" | "reset"
  href?: any
  borderWidth?: 1 | 2 | 3
  hideArrow?: boolean
  size?: "small" | "large" | "xs"
  fontSize?: number
  children?: any
  onClick?: (() => void) | ((e: any) => void)
  style?: CSSProperties
  className?: string
  disabled?: boolean
}

export const Button = ({
  color = "white",
  type,
  mode = "button",
  href,
  borderWidth = 1,
  hideArrow = false,
  size = "small",
  children,
  onClick,
  style,
  className = "",
  disabled,
}: Props) => {
  const btnStyles: CSSProperties = {
    borderWidth,
    ...style,
  }
  const getClassnames = () =>
    classNames(
      inter.className,
      styles.btn,
      styles[size],
      styles[color],
      className
    )

  switch (mode) {
    case "link":
      return (
        <Link href={href || "#"} className={getClassnames()} style={btnStyles}>
          <div className={styles.btnText}>{children}</div>
          {!hideArrow && "removed Button"}
        </Link>
      )

    case "button":
      return (
        <button
          type={type}
          className={getClassnames()}
          onClick={onClick}
          disabled={disabled}
          style={style}
        >
          <div className={styles.btnText}>{children}</div>
        </button>
      )
  }
}
