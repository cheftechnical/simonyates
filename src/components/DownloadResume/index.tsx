import * as React from 'react';
import {Link} from '@material-ui/core';

const download = {
	filename: encodeURIComponent('Simon Yates - 2018-06-06.pdf'),
	sizeInKB: 151
}

const resumeWord = 'Résumé';

export default function DownloadResume() {
	return (
		<Link
			download
			href={`/downloads/${download.filename}`}
			target="_blank"
			title={`Download My ${resumeWord}`}
		>
			Download {resumeWord} as PDF ({download.sizeInKB} KB)
		</Link>
	);
};
