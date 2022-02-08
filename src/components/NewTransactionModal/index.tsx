import Modal from "react-modal";
import { Button, Container, RadioBox, TransectionTypeContainer } from "./styled";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {

  const [type, setType] = useState('deposit')  
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder="titulo" />
        <input placeholder="valor" type="number" />
       
        <TransectionTypeContainer>
        <RadioBox type="button"
          isActive={type === 'deposit'}
          isActiveColor="green"
          onClick={() => {setType('deposit')}}
          >
           <img src={incomeImg} alt="Entradas" />
           <span>Entradas</span>
         </RadioBox>
     
          <RadioBox type="button"
            isActive={type === 'withdraw'}
            isActiveColor="red"
           onClick={() => {setType('withdraw')}}>

            <img src={outcomeImg} alt="Saidas" />
            <span>Saidas</span>
          </RadioBox>
        </TransectionTypeContainer>

        <input placeholder="categoria" />
        <Button  isActiveColor="green" type="submit">Cadastrar</Button>
      </Container>
     
    </Modal>
  );
}
