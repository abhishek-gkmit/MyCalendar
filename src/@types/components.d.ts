import { TouchableOpacityProps } from 'react-native-gesture-handler';
import { StyleProp, TextStyle, ViewProps, ViewStyle } from 'react-native/types';

declare global {
  interface CustomDrawerItemProps {
    label: string;
    isFocused: boolean;
    onPress: () => void;
  }

  interface Icon {
    name: string;
    color?: string;
    size?: number;
  }

  interface ButtonWithIconProps extends TouchableOpacityProps {
    text: string;
    icon?: Icon;
    iconPosition?: 'start' | 'end';
    textStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
  }
}
