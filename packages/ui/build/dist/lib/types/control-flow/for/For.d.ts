import React from 'react';
declare type Props = Parameters<typeof React.createElement>[1];
export declare type ForProps<T = any> = {
    each: readonly T[] | Promise<T>[] | Promise<T>;
    as?: (props: any) => JSX.Element;
    props?: Props;
    fallback?: JSX.Element;
    render?: (item: T) => JSX.Element;
    children?: (item: T) => JSX.Element;
};
export declare const For: React.FC<ForProps>;
export {};
