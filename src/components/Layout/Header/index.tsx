import { useRouter } from 'next/router';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';

import { ThemeAppContext } from '../../../context/ThemeAppContext';
import { UserContext } from '../../../context/UserContext';
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
	const { theme, toggleTheme } = useContext(ThemeAppContext);
	const { user } = useContext(UserContext);
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
		theme === 'dark' ? setDarkIcon(true) : setDarkIcon(false);
	}, [theme]);

	return (
		<StyledHeaderWrapper>
			<StyledHeader>
				<StyledBrand>
					<Logo />
					{/* eslint-disable-next-line */}
					<img
						src={`https://github.com/${user}.png`}
						alt='Main profile pic'
					/>
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
					<Button id='btn__toggle' onClick={() => toggleTheme()}>
						{darkIcon ? (
							<>
								<i>☀️ </i>
								<span>Light</span>
							</>
						) : (
							<>
								<i>🌙 </i>
								<span>Dark</span>
							</>
						)}
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
