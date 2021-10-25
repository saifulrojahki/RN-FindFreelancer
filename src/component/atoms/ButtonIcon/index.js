import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IcAddSaldo,
  IcExpress,
  IcGetPoint,
  IcKarpet,
  IcKiloan,
  IcSatuan,
  IcSetrika,
  IcVip,
} from '../../../assets';
import {ColorGreen} from '../../../utils/constant';

const ButtonIcon = ({title, type}) => {
  const Icon = () => {
    if (title === 'Add') return <IcAddSaldo />;
    if (title === 'Get Point') return <IcGetPoint />;
    if (title === 'Kiloan') return <IcKiloan />;
    if (title === 'Satuan') return <IcSatuan />;
    if (title === 'VIP') return <IcVip />;
    if (title === 'Karpet') return <IcKarpet />;
    if (title === 'Setrika Saja') return <IcSetrika />;
    if (title === 'Express') return <IcExpress />;

    return <IcAddSaldo />;
  };
  return (
    <TouchableOpacity style={styles.container(type)}>
      <View style={styles.containerButton(type)}>
        <Icon />
      </View>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: type => ({
    marginBottom: 12,
    marginRight: type === 'layanan' ? 30 : 0,
  }),
  containerButton: type => ({
    backgroundColor: ColorGreen,
    borderRadius: 10,
    padding: type === 'layanan' ? 15 : 7,
  }),
  title: type => ({
    fontSize: type === 'layanan' ? 14 : 10,
    fontFamily:
      type === 'layanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
    textAlign: 'center',
  }),
});
