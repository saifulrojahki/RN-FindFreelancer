import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {IcMesinCuci} from '../../../assets';
import {ColorGreen, ColorPrimary} from '../../../utils/constant';
import {Gap} from '../../atoms';

const CardPesanan = ({title, status}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.pesananAktif}>
        <View style={styles.content}>
          <IcMesinCuci />
          <Gap width={10} />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.status(status)}>{status}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardPesanan;

// dimension responesive
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 7,
    flexDirection: 'row',
    padding: 17,
    marginVertical: windowHeight * 0.02,
    marginBottom: 10,
  },
  pesananAktif: {
    width: 324,
    height: 68,
  },
  content: {
    flexDirection: 'row',
    marginLeft: windowWidth * 0.02,
  },
  title: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  status: status => ({
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Light',
    color:
      status === 'Sudah Selesai'
        ? ColorPrimary
        : status === 'Masih dicuci'
        ? '#FF4D00'
        : '#C8C8C8',
  }),
});
