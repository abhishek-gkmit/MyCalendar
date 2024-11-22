import { useEffect } from 'react';
import { Animated, useAnimatedValue } from 'react-native';

function FadeInSlideUp({ delay, style, children }: FadeInSlideUpProps) {
  const position = useAnimatedValue(0);

  useEffect(() => {
    Animated.timing(position, {
      toValue: 1,
      duration: 500,
      delay: delay || 0,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        style,
        {
          transform: [
            {
              translateY: position.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 0],
              }),
            },
          ],
          opacity: position,
        },
      ]}>
      {children}
    </Animated.View>
  );
}

export default FadeInSlideUp;
