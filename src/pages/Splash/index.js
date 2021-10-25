import React, {useEffect} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {Backgroud, Logo} from '../../assets';

const Splash = ({navigation}) => {
  // pindah halaman otomasi
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);
  return (
    <ImageBackground source={Backgroud} style={styles.backgroud}>
      <Logo style={styles.logo} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  backgroud: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 222,
    height: 105,
  },
});
