import { ReactNode } from "react";
import styles from "./Button.module.scss";

export enum ButtonVariant {
  Primary,
  Secondary,
  Link,
}

const stylesMap = {
  [ButtonVariant.Primary]: styles.primary,
  [ButtonVariant.Secondary]: styles.secondary,
  [ButtonVariant.Link]: styles.link,
};

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  [x: string]: unknown;
}

const Button = ({
  children,
  className,
  variant = ButtonVariant.Primary,
  ...attributes
}: ButtonProps): JSX.Element => (
  <button className={`${className} ${stylesMap[variant]}`} {...attributes}>
    {children}
  </button>
);

export default Button;
