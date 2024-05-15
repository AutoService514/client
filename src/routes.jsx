import {
  ADMIN_ROUTES,
  BASKET_ROUTES,
  SERVICE_ROUTES,
  REGISTRATION_ROUTES,
  LOGIN_ROUTES,
  DISCOUNT_ROUTES,
  MARKET_ROUTES
} from "./utils/consts";
import Admin from "./pages/Admin";
import discount from "./pages/discount";
import auth from "./pages/auth";
import basket from "./pages/basket";
import service from "./pages/service";
import ServicePage from "./pages/ServicePage";
import Main from "./pages/Main"

export const authRoutes = [
  {
    path: ADMIN_ROUTES,
    Component: Admin,
  },
  {
    path: BASKET_ROUTES,
    Component: basket,
  },
];
export const publicRoutes = [
  {
    path: SERVICE_ROUTES + "/:serviceId",
    Component: ServicePage,
  },
  {
    path: SERVICE_ROUTES,
    Component: service,
  },
  {
    path: LOGIN_ROUTES,
    Component: auth,
  },
  {
    path: REGISTRATION_ROUTES,
    Component: auth,
  },
  {
    path: DISCOUNT_ROUTES,
    Component: discount,
  },
  {
    path: MARKET_ROUTES,
    Component: Main
  }
  // {
  //   path: ADMIN_ROUTES,
  //   Component: Admin,
  // },
];
