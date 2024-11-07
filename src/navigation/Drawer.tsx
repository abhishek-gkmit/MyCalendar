import { createDrawerNavigator } from '@react-navigation/drawer';

import Schedule from '@screens/schedule';
import { ROUTES } from '@constants';
import CustomDrawerHeader from '@components/customDrawerHeader';
import CustomDrawerContent from '@components/customDrawerContent';

const Drawer = createDrawerNavigator<DrawerParamList>();

function MyDrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'front',
        header: props => <CustomDrawerHeader {...props} />,
        drawerStyle: { width: '80%' },
      }}>
      <Drawer.Screen name={ROUTES.Drawer.Schedule} component={Schedule} />
    </Drawer.Navigator>
  );
}

export default MyDrawerNavigator;
