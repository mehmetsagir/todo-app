import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type Props = {
  active: boolean;
  children: React.ReactNode;
} & TouchableOpacityProps;

const MenuButton: React.FC<Props> = ({ active, children, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles.button, active && styles.active]}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    marginTop: 10,
    borderRadius: 3,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  active: {
    backgroundColor: '#0B5688',
  },
});

export default MenuButton;
