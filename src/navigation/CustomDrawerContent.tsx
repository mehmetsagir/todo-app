import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MenuButton from './MenuButton';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props;
  const currentRoute = state.routeNames[state.index];

  const handleChangeMenu = useCallback(
    (route: string) => {
      navigation.navigate(route);
      navigation.closeDrawer();
    },
    [navigation]
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.avatar} source={require('../assets/profile.jpg')} />
      <Text style={styles.name}>Mehmet Sağır</Text>
      <View style={styles.menuGroup}>
        <MenuButton
          active={currentRoute === 'Home'}
          onPress={() => handleChangeMenu('Home')}
        >
          <Text style={styles.menuItem}>Home</Text>
        </MenuButton>
        <MenuButton
          active={currentRoute === 'Settings'}
          onPress={() => handleChangeMenu('Settings')}
        >
          <Text style={styles.menuItem}>Settings</Text>
        </MenuButton>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#111822',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    marginTop: 40,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  menuGroup: {
    marginTop: 30,
  },
  menuItem: {
    color: '#fff',
  },
});
