import { VscLinkExternal } from 'react-icons/vsc';
import {
	StyledContent,
	StyledDescription,
	StyledLanguage,
	StyledLink,
	StyledName,
	StyledRepository,
	StyledWatchers,
} from './styled';

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
		<StyledRepository>
			<StyledContent>
				<StyledName>{name}</StyledName>
				<StyledDescription>{description}</StyledDescription>

				<StyledLanguage>{language}</StyledLanguage>

				<StyledWatchers>Watchers: {watchers}</StyledWatchers>
			</StyledContent>

			<StyledLink>
				<a href={html_url} target='_blank' rel='noreferrer'>
					<VscLinkExternal />
				</a>
			</StyledLink>
		</StyledRepository>
	);
}
