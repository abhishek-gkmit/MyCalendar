import { useMemo, useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import uuid from 'react-native-uuid';

import ButtonWithIcon from '@components/buttonWithIcon';
import { ThemeContext } from '@config/contexts/ThemeContext';
import { UserContext } from '@config/contexts/UserContext';
import { moderateScale } from '@utility/scalingHelpers';

import getThemedStyles from './styles';

function getRouteLabelAndIcon(routeName: string) {
  const labelAndIcon = { iconName: '', label: '' };

  switch (routeName) {
    case 'Schedule':
      labelAndIcon.iconName = 'table-clock';
      labelAndIcon.label = routeName;
      break;
    default:
      break;
  }

  return labelAndIcon;
}

function CustomDrawerItem({
  routeName,
  isFocused,
  onPress,
}: CustomDrawerItemProps) {
  const { colors } = useContext(ThemeContext);

  const styles = useMemo(() => getThemedStyles(colors), [colors]);

  const { label, iconName } = useMemo(() => {
    return getRouteLabelAndIcon(routeName);
  }, [routeName]);

  return (
    <ButtonWithIcon
      activeOpacity={0.8}
      style={StyleSheet.compose(
        styles.drawerItemContainer,
        isFocused ? styles.drawerItemContainerFocused : null,
      )}
      textStyle={styles.drawerItemLabel}
      text={label}
      icon={{
        name: iconName,
        size: moderateScale(18),
        color: colors.foreground,
      }}
      iconPosition="start"
      onPress={onPress}
    />
  );
}

function CustomDrawerContent({ navigation, state }: DrawerContentComponentProps) {
  const { clearTokens } = useContext(UserContext);
  const { colors } = useContext(ThemeContext);

  const styles = useMemo(() => getThemedStyles(colors), [colors]);

  const routeBtns = useMemo(() => {
    return state.routes.map((route, routeIndex) => {
      return (
        <CustomDrawerItem
          key={uuid.v1() + ''}
          routeName={route.name}
          isFocused={routeIndex === state.index}
          onPress={() => navigation.navigate(route.name)}
        />
      );
    });
  }, [state, navigation]);

  return (
    <DrawerContentScrollView style={styles.drawerContentContainer}>
      <Text style={styles.appName}>Calendar</Text>

      {routeBtns}

      <ButtonWithIcon
        text="Logout"
        textStyle={StyleSheet.compose(styles.drawerItemLabel, styles.btnText)}
        style={StyleSheet.compose(styles.drawerItemContainer, styles.logoutBtn)}
        icon={{
          name: 'logout',
          size: moderateScale(18),
          color: colors.foreground,
        }}
        iconPosition="start"
        onPress={clearTokens}
      />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
