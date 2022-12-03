import { useState } from 'react';

export default function useModalFunctions() {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [initialModal, setInitialModal] = useState(true);

	const toggleModal = () => setIsOpenModal(!isOpenModal);
	const closeModal = () => setIsOpenModal(false);
	const closeInitialModal = () => setInitialModal(false);

	return {
		isOpenModal,
		setIsOpenModal,
		toggleModal,
		closeModal,
		initialModal,
		setInitialModal,
		closeInitialModal,
	};
}
