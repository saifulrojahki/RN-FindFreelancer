import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Header, IcLogo} from '../../assets';
import {ButtonIcon, Gap} from '../../component/atoms';
import CardPesanan from '../../component/molecules/CardPesanan';
import Saldo from '../../component/molecules/Saldo';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={Header} style={styles.header}>
          <IcLogo style={styles.logo} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Selamat Datang</Text>
            <Text style={styles.subTitle}>Arsyad Sakhi</Text>
          </View>
        </ImageBackground>
        <Saldo />
        <View style={styles.titleContainer}>
          <Text style={styles.titleService}>Layanan Kami</Text>
          <Gap height={24} />
          <View style={styles.layanan}>
            <ButtonIcon title="Kiloan" type="layanan" />
            <ButtonIcon title="Satuan" type="layanan" />
            <ButtonIcon title="VIP" type="layanan" />
            <ButtonIcon title="Karpet" type="layanan" />
            <ButtonIcon title="Setrika Saja" type="layanan" />
            <ButtonIcon title="Express" type="layanan" />
          </View>
        </View>
        <View style={styles.pesananContainer}>
          <Text style={styles.titleService}>Pesanan Aktif</Text>
          <Gap height={24} />
          <CardPesanan title="Pesanan No. 0002142" status="Sudah selesai" />
          <CardPesanan title="Pesanan No. 0002143" status="Masih dicuci" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

//dimensions untuk membuat responsive layar
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
  },
  logo: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.06,
    paddingHorizontal: 70,
    paddingTop: 20,
  },
  titleContainer: {
    paddingLeft: 30,
    paddingTop: 15,
  },
  title: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular',
    color: '#000000',
  },
  subTitle: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Bold',
    color: '#000000',
  },
  titleService: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
    color: '#000000',
  },
  layanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  pesananContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 15,
    backgroundColor: '#F6F6F6',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
