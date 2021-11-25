import type { ButtonHTMLAttributes } from 'react';
declare const colorVariants: readonly ["primary", "secondary", "success", "warning", "danger"];
declare type ColorVariant = typeof colorVariants[number];
declare type VariantProps = {
    [key in ColorVariant]?: boolean;
};
export declare type BtnSize = 'small' | 'medium' | 'large';
export declare type BtnProps = {
    size: BtnSize;
    label?: string;
    ghost?: boolean;
    thin?: boolean;
    bold?: boolean;
} & VariantProps & ButtonHTMLAttributes<HTMLButtonElement>;
export declare const Btn: import("styled-components").StyledComponent<"button", any, {
    size: BtnSize;
    label?: string | undefined;
    ghost?: boolean | undefined;
    thin?: boolean | undefined;
    bold?: boolean | undefined;
} & VariantProps & ButtonHTMLAttributes<HTMLButtonElement>, never>;
export {};
