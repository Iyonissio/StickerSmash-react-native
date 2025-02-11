import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 3,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 12,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
