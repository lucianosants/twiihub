import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

import Button from './Button';
import Logo from './Logo';
import {
	StyledHeader,
	StyledBrand,
	StyledSettings,
	StyledHeaderWrapper,
} from './styled';

export default function Header() {
	return (
		<StyledHeaderWrapper>
			<StyledHeader>
				<StyledBrand>
					<Logo />
					<form>
						<input type='text' placeholder='Find an user...' />
						<button type='submit'>
							<AiOutlineSearch size={22} />
						</button>
					</form>
				</StyledBrand>

				<StyledSettings>
					<Button onClick={() => console.log('teste')}>
						<FiEdit size={22} />
					</Button>
					<Button onClick={() => console.log('test2')}>
						<FaRegUserCircle size={22} />
					</Button>
				</StyledSettings>
			</StyledHeader>
		</StyledHeaderWrapper>
	);
}
