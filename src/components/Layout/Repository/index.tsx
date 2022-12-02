import { VscLinkExternal } from 'react-icons/vsc';

interface Props {
	name: string;
	description: string;
	language: string;
	watchers: number;
	html_url: string;
}

export default function Repository({
	name,
	description,
	language,
	watchers,
	html_url,
}: Props) {
	return (
		<article>
			<div>
				<h4>{name}</h4>
				<p>{description}</p>

				<p>{language}</p>

				<p>Watchers: {watchers}</p>
			</div>

			<div>
				<a href={html_url} target='_blank' rel='noreferrer'>
					<VscLinkExternal />
				</a>
			</div>
		</article>
	);
}
