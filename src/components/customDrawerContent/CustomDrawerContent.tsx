import { useMemo, useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import ButtonWithIcon from '@components/buttonWithIcon';
import { ThemeContext } from '@config/contexts/ThemeContext';
import { UserContext } from '@config/contexts/UserContext';

import { fontSize, fontWeight } from '@constants';

import getThemedStyles from './styles';

function CustomDrawerItem({ label, isFocused, onPress }: CustomDrawerItemProps) {
  const { colors } = useContext(ThemeContext);

  const styles = useMemo(() => getThemedStyles(colors), [colors]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={StyleSheet.compose(
        styles.drawerItemContainer,
        isFocused ? styles.drawerItemContainerFocused : null,
      )}
      onPress={onPress}>
      <Text style={styles.drawerItemLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

function CustomDrawerContent({ navigation, state }: DrawerContentComponentProps) {
  const { clearTokens } = useContext(UserContext);
  const { colors } = useContext(ThemeContext);

  const styles = useMemo(() => getThemedStyles(colors), [colors]);

  return (
    <DrawerContentScrollView style={styles.drawerContentContainer}>
      <Text
        style={{
          color: colors.foreground,
          fontSize: fontSize.twentyFour,
          fontWeight: fontWeight.medium,
          paddingLeft: 20,
          marginBottom: 20,
        }}>
        Calendar
      </Text>
      {state.routes.map((route, routeIndex) => {
        return (
          <CustomDrawerItem
            label={route.name}
            isFocused={routeIndex === state.index}
            onPress={() => navigation.navigate(route.name)}
          />
        );
      })}

      <ButtonWithIcon
        text="Logout"
        textStyle={StyleSheet.compose(styles.drawerItemLabel, styles.btnText)}
        style={StyleSheet.compose(styles.drawerItemContainer, styles.logoutBtn)}
        onPress={clearTokens}
      />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
