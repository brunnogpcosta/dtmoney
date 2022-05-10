import Modal from 'react-modal'


interface ModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal(props:ModalProps){

return(

    <Modal
    isOpen={props.isOpen} 
    onRequestClose={props.onRequestClose}
   >
       <h2>Cadastrar Transação</h2>
   </Modal>
)

}