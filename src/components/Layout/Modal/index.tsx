import { FormEvent, ReactNode, useContext, useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

import { UserContext } from '../../../context/UserContext';
import { messages } from '../../../data/app-messages';
import { messageType } from '../../../utils/message-type';

import {
	StyledBody,
	StyledContent,
	StyledHeader,
	StyledMask,
	StyledModal,
} from './styled';

interface Props {
	title: string;
	icon?: ReactNode;
	description: string;
	placeholder: string;
	isOpen: boolean;
	onClick?: () => void;
	clickClose?: () => void | null;
	submitClose: () => void;
}

export default function Modal({
	title,
	icon,
	description,
	placeholder,
	isOpen,
	onClick,
	clickClose,
	submitClose,
}: Props) {
	const [inputValue, setInputValue] = useState('');

	const { setUser } = useContext(UserContext);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (!inputValue) {
			messageType('error', messages.error[0]);
			return;
		}

		if (inputValue.length <= 3) {
			messageType('error', messages.error[1]);
			return;
		}

		submitClose();
		setInputValue('');
		setUser(inputValue);
	};

	return (
		<StyledModal isVisible={isOpen}>
			<StyledMask onClick={clickClose}></StyledMask>
			<StyledBody isVisible={isOpen}>
				<StyledHeader>
					<h4 className='modal__title'>{title}</h4>
					{icon && (
						<button
							className='modal__icon'
							onClick={onClick}
							aria-label='Button to close modal'
						>
							{icon}
						</button>
					)}
				</StyledHeader>

				<StyledContent>
					<p className='modal__description'>{description}</p>

					<form onSubmit={handleSubmit}>
						<input
							type='text'
							value={inputValue}
							onChange={(e) =>
								setInputValue(e.target.value.trim())
							}
							placeholder={placeholder}
							autoCapitalize='off'
						/>
						<button
							type='submit'
							aria-label='Button to submit your user'
						>
							<BiRightArrowAlt size={22} />
						</button>
					</form>
				</StyledContent>
			</StyledBody>
		</StyledModal>
	);
}
