import { useContext, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { ThemeContext } from '@config/contexts/ThemeContext';

import getStyles from './styles';

function ButtonWithIcon({
  text,
  icon,
  iconPosition,
  textStyle,
  style,
  ...props
}: ButtonWithIconProps) {
  const { colors } = useContext(ThemeContext);

  const styles = useMemo(() => getStyles(colors), [colors]);

  const iconToRender = useMemo(
    () => (icon ? <MaterialCommunityIcons {...icon} /> : null),
    [icon],
  );

  const btnText = useMemo(
    () => (
      <Text style={StyleSheet.compose(styles.buttonText, textStyle)}>
        {text}
      </Text>
    ),
    [text, textStyle, styles],
  );

  return (
    <TouchableOpacity
      style={StyleSheet.compose(styles.button, style)}
      activeOpacity={0.8}
      {...props}>
      {iconPosition === 'start' ? (
        <>
          {iconToRender}
          {btnText}
        </>
      ) : (
        <>
          {btnText}
          {iconToRender}
        </>
      )}
    </TouchableOpacity>
  );
}

export default ButtonWithIcon;
