import { ReactElement, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Link.module.scss";

export enum LinkVariant {
    Primary,
    Secondary,
    ButtonPrimary,
    ButtonSecondary,
}

const stylesMap = {
    [LinkVariant.Primary]: styles.primary,
    [LinkVariant.Secondary]: styles.secondary,
    [LinkVariant.ButtonPrimary]: styles.button,
    [LinkVariant.ButtonSecondary]: styles.buttonSecondary,
};

interface LinkProps {
    children?: ReactNode;
    to: string;
    className?: string;
    variant?: LinkVariant;
    [x: string]: unknown;
}

const Link = ({ children, to, className, variant = LinkVariant.Primary, ...attributes }: LinkProps): ReactElement => {
    if (!to.startsWith("http")) {
        return (
            <NavLink to={to} {...attributes} className={`${stylesMap[variant]} ${className}`}>
                {children}
            </NavLink>
        );
    }

    return (
        <a
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            className={`${stylesMap[variant]} ${className}`}
            {...attributes}
        >
            {children}
        </a>
    );
};

export default Link;
