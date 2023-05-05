import OrderPage from "../pages/OrderPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";

export interface IRoute {
    path: string;
    component: React.ComponentType;
}

export enum RoutePath {
    HOME = "/home",
    ORDER = "/order",
    ERROR = "/error"
}

export const publicRoutes: IRoute[] = [
    { path: RoutePath.HOME, component: HomePage },
    { path: RoutePath.ORDER, component: OrderPage }
]