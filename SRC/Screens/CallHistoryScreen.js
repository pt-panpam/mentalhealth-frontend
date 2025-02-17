// CallHistoryScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CallHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Call History</Text>
      {/* Add list of past calls here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  heading: { fontSize: 24, fontWeight: 'bold' },
});

export default CallHistoryScreen;
