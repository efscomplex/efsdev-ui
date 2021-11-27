/// <reference types="react" />
import { NavLink, RouteObject } from 'react-router-dom';
declare type RouterProps = {
    routes: RouteObject[];
    Layout?: React.FC;
};
export interface IRouter extends React.FC<RouterProps> {
    Link: typeof NavLink;
}
export declare const Router: IRouter;
export {};
