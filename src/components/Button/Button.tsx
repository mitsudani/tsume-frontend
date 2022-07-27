import { ReactNode } from "react";
import styles from "./Button.module.scss";

export enum ButtonVariant {
  Primary,
  Secondary,
  LinkPrimary,
  LinkSecondary,
}

const stylesMap = {
  [ButtonVariant.Primary]: styles.primary,
  [ButtonVariant.Secondary]: styles.secondary,
  [ButtonVariant.LinkPrimary]: styles.linkPrimary,
  [ButtonVariant.LinkSecondary]: styles.linkSecondary,
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
  <button
    className={`${styles.button} ${stylesMap[variant]} ${className}`}
    {...attributes}
  >
    {children}
  </button>
);

export default Button;
