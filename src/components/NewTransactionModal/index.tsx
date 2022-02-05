import Modal from "react-modal";
import { Container, TransectionTypeContainer } from "./styled";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
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
          <button type="button">
            <img src={incomeImg} alt="Entradas" />
            <span>Entradas</span>
          </button>
     
          <button type="button">
            <img src={outcomeImg} alt="Saidas" />
            <span>Saidas</span>
          </button>
        </TransectionTypeContainer>

        <input placeholder="categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
     
    </Modal>
  );
}
