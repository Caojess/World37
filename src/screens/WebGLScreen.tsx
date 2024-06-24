// WebGLScreen.tsx
import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const WebGLScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: 'http://localhost:8000/test/' }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default WebGLScreen;
