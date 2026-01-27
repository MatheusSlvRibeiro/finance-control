import { toast } from 'react-toastify'
import { ModalButton } from '../_components/modalButton/modalButton'
import styles from './DeleteModal.module.scss'

type DeleteModalProps = {
	title: string
	message: React.ReactNode
	deleteMessage: string
	closeModal: () => void
}

export function DeleteModal({ title, message, deleteMessage, closeModal }: DeleteModalProps) {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.message}>{message}</p>
			<div className={styles.buttons}>
				<ModalButton
					text="Cancelar"
					variant="cancel-delete"
					onClick={() => closeModal()}
				></ModalButton>
				<ModalButton
					text="Excluir"
					variant="delete"
					onClick={() =>
						toast(`${deleteMessage}`, {
							toastId: 'success-delete',
						}) && closeModal()
					}
				></ModalButton>
			</div>
		</div>
	)
}
