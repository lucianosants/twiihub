import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

import Button from './Button';
import Logo from './Logo';

export default function Header() {
	return (
		<header>
			<div>
				<Logo />
				<form>
					<input type='text' placeholder='Search for user...' />
					<button type='submit'>
						<AiOutlineSearch />
					</button>
				</form>
			</div>

			<div>
				<Button onClick={() => console.log('teste')}>
					<FiEdit />
				</Button>
				<Button onClick={() => console.log('test2')}>
					<FaRegUserCircle />
				</Button>
			</div>
		</header>
	);
}
