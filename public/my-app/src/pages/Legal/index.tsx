import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';

export default function Legal() {
	return (
		<DefaultLayout>
			<PrivacyPolicy/>
			<TermsAndConditions/>
		</DefaultLayout>
	);
};
