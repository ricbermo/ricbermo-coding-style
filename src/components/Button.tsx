import React from 'react';
import { TextButton, OutlinedButton } from 'react-native-material-basic';
import { ScaledSheet } from 'react-native-size-matters/extend';
import { colors, theme } from '../config/theme';

type Props = {
	primary?: boolean;
	filled?: boolean;
};

export const Button = React.memo(function Button({ primary, filled, ...rest }: Props) {
	const color = primary ? colors.accent : colors.primary;

	if (filled) {
		return (
			<TextButton
				color={color}
				titleColor={colors.white}
				rippleContainerBorderRadius={20}
				style={styles.container}
				titleStyle={theme.fontFamily}
				disabledColor={'rgba(0, 0, 0, 0.12)'}
				{...rest}
			/>
		);
	}

	return (
		<OutlinedButton
			rippleContainerBorderRadius={20}
			titleColor={color}
			style={styles.container}
			{...rest}
		/>
	);
});

const styles = ScaledSheet.create({
	container: {
		borderRadius: 100,
		height: '42@vs',
		flex: 1,
	},
});