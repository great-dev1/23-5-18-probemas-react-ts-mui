import { RouteProps } from "react-router-dom";

import Home from '../pages/Home';
import About from '../pages/About';
import Users from '../pages/Users';
import NotFound from '../pages/NotFound';
import OSRSGoldPage from '../pages/osrs-gold';
import RS3GoldPage from '../pages/rs3-gold';
import SellRSGoldPage from '../pages/sell-rs-gold';
import OSRSAccountsPage from '../pages/osrs-accounts';
import RewardChestsPage from '../pages/reward-chests';
import OSRSItemsPage from '../pages/osrs-items';
import SignUpPage from '../pages/sign-up';
import LogInPage from '../pages/log-in';

export interface IRouteConfig {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
}

const routes: IRouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/osrs-gold',
    exact: true,
    component: OSRSGoldPage,
  },
  {
    path: '/rs3-gold',
    exact: true,
    component: RS3GoldPage,
  },
  {
    path: '/sell-rs-gold',
    exact: true,
    component: SellRSGoldPage,
  },
  {
    path: '/osrs-item',
    exact: true,
    component: OSRSItemsPage,
  },
  {
    path: '/osrs-accounts',
    exact: true,
    component: OSRSAccountsPage,
  },
  {
    path: '/reward-chests',
    exact: true,
    component: RewardChestsPage,
  },
  {
    path: '/sign-up',
    exact: true,
    component: SignUpPage,
  },
  {
    path: '/log-in',
    exact: true,
    component: LogInPage,
  },
  {
    path: '/about',
    exact: false,
    component: About,
  },
  {
    path: '/users',
    exact: false,
    component: Users,
  },
  {
    path: '*',
    exact: false,
    component: NotFound,
  },
];

export default routes;