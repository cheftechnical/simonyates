import * as React from 'react';
import EmployerTimeAndRole from './EmployerRoleAndWhen';
import ReadFullDetails from './ReadFullDetails';

interface Props {
	children: any[] | any;
	employer: string;
	href: string;
	role: string;
	when: string;
}

export default function WorkExperience(props: Props) {
	const {children, employer, href, role, when} = props;

	return (
		<div>
			<EmployerTimeAndRole employer={employer} href={href} role={role} when={when}/>
			<div>{children}</div>
			<ReadFullDetails ariaLabel={`Read more about my experience at ${employer}`} href={href}/>
		</div>
	);
};
