import React, {useCallback, ViewStyle} from 'react';
import {TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme, colors, hasNotch, isTablet} from 'theme';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {useOrientation} from 'state/useOrientation';
import {Card} from './Card';

type Props = {
  label?: string;
  style?: ViewStyle; // this comes from Rect
  value?: string;
  onChangeText?: (text: string) => void;
};

export const SearchBar = React.memo(function SearchBar({
  label,
  style,
  value,
  onChangeText,
  ...inputProps
}: Props) {
  const {isLandscape} = useOrientation();

  const clear = useCallback(() => onChangeText(''), [onChangeText]);

  return (
    <Card
      style={[
        theme.row,
        styles.container,
        isLandscape && hasNotch && styles.notch,
        style,
      ]}
      testID="search-bar">
      <TextInput
        placeholder={label}
        placeholderTextColor={colors.textDark2nd}
        style={[
          styles.inputContainer,
          theme.subheadingDark2,
          !isTablet && theme.lineHeight22,
        ]}
        underlineColorAndroid="transparent"
        value={value}
        onChangeText={onChangeText}
        {...inputProps}
      />
      <Icon
        name={value ? 'close' : 'magnify'}
        size={25}
        color={colors.textDark2nd}
        onPress={value ? clear : null}
      />
    </Card>
  );
});

const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: '16@vs',
    height: '48@vs',
  },
  notch: {
    marginHorizontal: '30@vs',
  },
  inputContainer: {
    paddingVertical: '13@vs',
    flex: 1,
  },
});