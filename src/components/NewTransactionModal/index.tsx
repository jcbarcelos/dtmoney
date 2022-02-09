import Modal from "react-modal";
import {
  Button,
  Container,
  RadioBox,
  TransectionTypeContainer,
} from "./styled";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { useTransaction } from "../../hooks/useTransaction";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransaction();

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const handleCreateTrasaction = async (event: FormEvent) => {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setType("deposit");
    setAmount(0);
    setCategory("");
    onRequestClose();
  };

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

      <Container onSubmit={handleCreateTrasaction}>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          placeholder="valor"
          type="number"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransectionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            isActiveColor="green"
            onClick={() => {
              setType("deposit");
            }}
          >
            <img src={incomeImg} alt="Entradas" />
            <span>Entradas</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            isActiveColor="red"
            onClick={() => {
              setType("withdraw");
            }}
          >
            <img src={outcomeImg} alt="Saidas" />
            <span>Saidas</span>
          </RadioBox>
        </TransectionTypeContainer>

        <input
          placeholder="categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <Button isActiveColor="green" type="submit">
          Cadastrar
        </Button>
      </Container>
    </Modal>
  );
}
