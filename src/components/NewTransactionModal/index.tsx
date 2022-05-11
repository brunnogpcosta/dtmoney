import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './styles';

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react';


interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal(props: ModalProps) {
    const[type,setType]=useState('deposit')


    return (

        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >


            <button
                type='button'
                onClick={props.onRequestClose}
                className='react-modal-close'>
                <img src={closeImg} alt='Fechar modal' />

            </button>

            <Container>
                <h2>Cadastrar Transação</h2>

                <input placeholder='Título' />
                <input placeholder='Valor' type="number" />


                <TransactionTypeContainer>
                    <RadioBox 
                    type='button'
                    className=""
                    onClick={()=>{setType('deposit');}}
                    isActive={type ==='deposit'}
                    activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox type='button'
                     onClick={()=>{setType('withdraw')}}
                     isActive={type ==='withdraw'}
                     activeColor="red"
                     >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>


                <input placeholder='Categoria' />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )

}