import CartPage from "../pages/CartPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";

export interface IRoute {
    path: string;
    component: React.ComponentType;
}

export enum RoutePath {
    HOME = "/home",
    CART = "/cart",
    ERROR = "/error"
}

export const publicRoutes: IRoute[] = [
    { path: RoutePath.HOME, component: HomePage },
    { path: RoutePath.CART, component: CartPage }
]