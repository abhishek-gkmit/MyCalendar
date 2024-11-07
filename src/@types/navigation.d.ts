import { ROUTES } from '@constants';

import {
  DrawerNavigationProp,
  DrawerScreenProps,
} from '@react-navigation/drawer';

declare global {
  type DrawerScreenNames = keyof typeof ROUTES.Drawer;
  type DrawerParamList = Record<DrawerScreenNames, undefined>;
}
