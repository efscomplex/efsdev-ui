import type { ButtonHTMLAttributes } from 'react';
declare type BtnSize = 'small' | 'medium' | 'large';
declare type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';
export declare type BtnProps = {
    size: BtnSize;
    variant: ColorVariant;
    label?: string;
    ghost?: boolean;
    weight?: 'light' | 'bold' | 'normal';
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare const Btn: import("goober").StyledVNode<Omit<import("react").ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement> & import("goober").DefaultTheme & {
    size: BtnSize;
    variant: ColorVariant;
    label?: string | undefined;
    ghost?: boolean | undefined;
    weight?: "light" | "bold" | "normal" | undefined;
}, never>>;
export {};
