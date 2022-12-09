import { toast } from 'react-toastify';
type Message = 'success' | 'error';

const success = (msg: string) =>
	toast.success(msg, {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'dark',
	});

const error = (msg: string) =>
	toast.error(msg, {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'dark',
	});

export function messageType(type: Message, msg: string) {
	if (type === 'success') {
		success(msg);
		return;
	}
	if (type === 'error') {
		error(msg);
		return;
	}
}
