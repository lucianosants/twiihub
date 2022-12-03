import { useState } from 'react';

export default function useModalFunctions() {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const toggleModal = () => setIsOpenModal(!isOpenModal);
	const closeModal = () => setIsOpenModal(false);

	return {
		isOpenModal,
		setIsOpenModal,
		toggleModal,
		closeModal,
	};
}
