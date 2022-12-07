import { useRouter } from 'next/router';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';

import { ThemeAppContext } from '../../../context/ThemeAppContext';
import useModalFunctions from '../../../hooks/useModalFunctions';

import Modal from '../Modal';
import Button from './Button';
import Logo from './Logo';

import {
	StyledHeader,
	StyledBrand,
	StyledSettings,
	StyledHeaderWrapper,
} from './styled';

export default function Header() {
	const context = useContext(ThemeAppContext);
	const [darkIcon, setDarkIcon] = useState(true);
	const [inputValue, setInputValue] = useState('');
	const { isOpenModal, setIsOpenModal, toggleModal, closeModal } =
		useModalFunctions();

	const router = useRouter();
	const handleSearch = (e: FormEvent) => {
		e.preventDefault();

		if (
			router.pathname === '/' ||
			router.pathname === '/about' ||
			router.pathname.includes('/user')
		) {
			return router.push(`/user/${inputValue}`);
		}
	};

	useEffect(() => {
		context.theme === 'dark' ? setDarkIcon(true) : setDarkIcon(false);
	}, [context.theme]);

	return (
		<StyledHeaderWrapper>
			<StyledHeader>
				<StyledBrand>
					<Logo />
					<form onSubmit={handleSearch}>
						<input
							type='text'
							placeholder='Find an user...'
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
						/>
						<button type='submit'>
							<AiOutlineSearch size={22} />
						</button>
					</form>
				</StyledBrand>

				<StyledSettings>
					<Button
						id='btn__toggle'
						onClick={() => context.toggleTheme()}
					>
						{darkIcon ? '☀️ Light' : '🌙 Dark'}
					</Button>
					<Button onClick={() => toggleModal()}>
						<FaRegUserCircle size={22} />
					</Button>
				</StyledSettings>

				<Modal
					onClick={toggleModal}
					clickClose={closeModal}
					isOpen={isOpenModal}
					title='Edit Profile'
					icon={<AiOutlineClose />}
					description='Choose another user'
					placeholder='New github user...'
					submitClose={closeModal}
				/>
			</StyledHeader>
		</StyledHeaderWrapper>
	);
}
