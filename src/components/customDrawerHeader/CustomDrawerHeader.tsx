import { useContext, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ThemeContext } from '@config/contexts/ThemeContext';

import getThemedStyles from './styles';

function CustomDrawerHeader({ navigation, route }: DrawerHeaderProps) {
  const { colors } = useContext(ThemeContext);

  const styles = useMemo(() => getThemedStyles(colors), [colors]);

  return (
    <View style={styles.drawerContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.openBtn}
        onPress={() => navigation.openDrawer()}>
        <MaterialCommunityIcon
          name="menu"
          size={24}
          color={colors.foreground}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{route.name}</Text>
    </View>
  );
}

export default CustomDrawerHeader;
