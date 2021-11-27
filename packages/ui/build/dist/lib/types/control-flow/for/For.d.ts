/// <reference types="react" />
declare type ForProps = {
    each: any;
    as: any;
    render: <T>(props: T) => React.FC<T>;
};
export declare const For: React.FC<ForProps>;
export {};
