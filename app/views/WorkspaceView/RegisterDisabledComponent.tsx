import React from 'react';
import { Text } from 'react-native';

import { useAppSelector } from '../../lib/hooks';
import { useTheme } from '../../theme';
import styles from './styles';

const RegisterDisabledComponent = () => {
	const { colors } = useTheme();

	const { registrationText } = useAppSelector(state => ({
		registrationText: state.settings.Accounts_RegistrationForm_LinkReplacementText as string
	}));
	
	const Accounts_iframe_enabled = false;

	if (Accounts_iframe_enabled) {
		return null;
	}

	return <Text style={[styles.registrationText, { color: colors.fontSecondaryInfo }]}>{registrationText}</Text>;
};

export default RegisterDisabledComponent;
