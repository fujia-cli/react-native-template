import React, {FC, PropsWithChildren} from 'react';
import {ModalBaseProps, StyleSheet, Modal, View, Pressable, StyleProp, ViewProps} from 'react-native';

interface Props extends ModalBaseProps {
  onClose: VoidFunction;
  innerStyle?: StyleProp<ViewProps>;
}

export const MyModal: FC<PropsWithChildren<Props>> = props => {
  const {children, innerStyle, onClose, animationType = 'fade', ...modalProps} = props;

  const handlePressMask = () => {
    onClose();
  };

  return (
    <Modal animationType={animationType} transparent {...modalProps}>
      <View style={styles.container}>
        <Pressable style={styles.mask} onPress={handlePressMask} />

        <View style={[styles.wrapper, innerStyle]}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  mask: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0,0, 0.2)',
  },
  wrapper: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 32,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 2,
  },
});
