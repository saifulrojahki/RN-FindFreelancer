import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {ButtonIcon, Gap} from '../../atoms';

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoSaldo}>
        <View style={styles.textContainer}>
          <Text style={styles.labelSaldo}>Saldo</Text>
          <Text style={styles.labelNominal}>Rp 100.0000</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.labelPoint}>Antar Point </Text>
          <Text style={styles.labelNilai}>100 Point</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <ButtonIcon title="Add" />
        <Gap width={10} />
        <ButtonIcon title="Get Point" />
      </View>
    </View>
  );
};

export default Saldo;

// dimension responesive
// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginTop: -windowHeight * 0.1,
    marginHorizontal: 45,
    padding: 17,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4.64,
    },
    elevation: 7,
    flexDirection: 'row',
  },
  infoSaldo: {
    width: '60%',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
  },
  labelNominal: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
  },
  labelPoint: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Regular',
  },
  labelNilai: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Bold',
    color: '#55CB95',
  },
  iconContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
});
