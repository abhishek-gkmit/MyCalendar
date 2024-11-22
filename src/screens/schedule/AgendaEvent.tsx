import { useCallback, memo } from 'react';
import { Text, TouchableOpacity, Linking } from 'react-native';

import useStyles from '@hooks/useStyles';

import scheduleStyles from './styles';

function AgendaEvent({ item }: AgendaComponentProps) {
  const styles = useStyles(scheduleStyles);

  const handleOnPress = useCallback(() => {
    item?.hangoutLink && Linking.openURL(item?.hangoutLink);
  }, [item?.hangoutLink]);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.agendaEventBtn}
      onPress={handleOnPress}>
      <Text style={styles.agendaEventSummary}>{item?.name}</Text>
    </TouchableOpacity>
  );
}
export default memo(AgendaEvent);
