import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet, View } from 'react-native';

const Toast = ({
  appName,
  senderName,
  message,
  visible,
  showSenderName = true,
}) => {
  const slideAnim = useRef(new Animated.Value(-100)).current;
  const isAnimating = useRef(false);

  useEffect(() => {
    if (visible && !isAnimating.current) {
      isAnimating.current = true;
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(slideAnim, {
            toValue: -100,
            duration: 300,
            useNativeDriver: true,
          }).start(() => (isAnimating.current = false));
        }, 3000);
      });
    }
  }, [visible]);

  return (
    <Animated.View style={[styles.toast]}>
      <View style={styles.header}>
        <Text style={styles.appName}>{appName}</Text>
        <Text style={styles.timestamp}>agora</Text>
      </View>
      {showSenderName && (
        <Text
          style={styles.senderName}
        >{`Nova mensagem de ${senderName}`}</Text>
      )}
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    left: 10,
    right: 10,
    padding: 10,
    backgroundColor: '#FAE29F',
    borderRadius: 7,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appName: {
    fontWeight: 'bold',
    color: '#5C4813',
    fontSize: 14,
  },
  timestamp: {
    color: '#5C4813',
    fontSize: 12,
  },
  senderName: {
    marginTop: 5,
    color: '#5C4813',
    fontSize: 14,
  },
  message: {
    marginTop: 5,
    color: '#5C4813',
    fontSize: 14,
  },
});

export default Toast;
