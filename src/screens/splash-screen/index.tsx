import React, {useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {HOME} from '../../constants/routes';
import {upstoxPrimaryColor} from '../../constants/colors';

const SplashScreen: React.FC<{navigation: any}> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(HOME);
    }, 3000);
  }, []);

  return (
    <>
      <StatusBar backgroundColor={upstoxPrimaryColor} barStyle={'default'} />
      <View style={styles.container}>
        <Image
          source={require('../../../assets/img/upstox-logo.webp')}
          style={styles.image}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: upstoxPrimaryColor,
  },
  image: {
    width: '50%',
    height: '50%',
    resizeMode: 'center',
  },
});

export default SplashScreen;
