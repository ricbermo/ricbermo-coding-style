import React from 'react';
import SkeletonPlaceholder from './SkeletonPlaceholder';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {theme} from 'theme';

export const Skeleton = React.memo(function Skeleton() {
  return (
	<SkeletonPlaceholder>
	  {Array.from({length: 7}).map((_, index) => (
		<View key={index}>
		  <View
			style={[theme.rowCenterSpaced, styles.marginH, styles.marginTop]}>
			<View style={styles.text} />
			<View style={styles.chevron} />
		  </View>
		  <View style={styles.title} />
		  <View style={styles.note} />
		  <View style={styles.note2} />
		  <View style={styles.divider} />
		</View>
	  ))}
	</SkeletonPlaceholder>
  );
});

const styles = ScaledSheet.create({
  margin: {
	marginHorizontal: '16@s',
  },
  text: {
	width: '200@s',
	height: '7@s',
  },
  chevron: {
	width: 20,
	height: 20,
  },
  title: {
	width: '75%',
	height: '11@s',
	marginBottom: '12@s',
	marginLeft: '16@s',
  },
  note: {
	width: '90%',
	height: '10@s',
	marginLeft: '16@s',
  },
  note2: {
	marginTop: 5,
	width: '50%',
	height: '10@s',
	marginLeft: '16@s',
	marginBottom: '16@s',
  },
  marginH: {
	marginHorizontal: '16@s',
  },
  marginTop: {
	marginTop: '20@s',
  },
  divider: {
	width: '100%',
	height: 1,
  },
});