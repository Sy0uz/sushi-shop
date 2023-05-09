import OrderPage from "../pages/OrderPage";
import HomePage from "../pages/HomePage";
import SushiPage from "../pages/SushiPage";

export interface IRoute {
    path: string;
    component: React.ComponentType;
}

export enum RoutePath {
    SUSHI = "/sushi",
    ORDER = "/order",
    ERROR = "/error"
}

export const publicRoutes: IRoute[] = [
    { path: RoutePath.SUSHI, component: HomePage },
    { path: RoutePath.ORDER, component: OrderPage },
    { path: '/sushi/:id', component: SushiPage }
]