import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Notification = ({ message }) => {
  const slideAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(slideAnim, {
          toValue: -100,
          duration: 500,
          useNativeDriver: true, 
        }).start();
      }, 3000);
    });
  }, []);

  return (
    <Animated.View style={[styles.notification, { bottom: slideAnim }]}>
      <Text style={styles.notificationText}>{message}</Text>
    </Animated.View>
  );
};

export default Notification;