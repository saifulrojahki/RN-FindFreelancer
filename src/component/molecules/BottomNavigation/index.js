import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IcAccountOff,
  IcAccountOn,
  IcHomeOff,
  IcHomeOn,
  IcOrderOff,
  IcOrderOn,
} from '../../../assets';
import {ColorPrimary, ColorSecondary} from '../../../utils/constant';

// set icon bottom navigation
const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <IcHomeOn /> : <IcHomeOff />;
    case 'Pesanan':
      return focus ? <IcOrderOn /> : <IcOrderOff />;
    case 'Profile':
      return focus ? <IcAccountOn /> : <IcAccountOff />;
    default:
      return <IcHomeOn />;
  }
};

const BottomNavigation = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({type: 'tabLongPress', target: route.key});
        };
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
            <Text style={styles.title(isFocused)}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    paddingHorizontal: 55,
    paddingVertical: 14,
  },
  title: isFocused => ({
    fontSize: 13,
    color: isFocused ? ColorPrimary : ColorSecondary,
    marginTop: 8,
  }),
});
