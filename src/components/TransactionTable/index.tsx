import react, { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container } from "./styled";
import React from "react";

export const TransactionTable = () => {
  const [data, setDados] = useState([]);

  useEffect(() => {
    api.get("/transactions").then((response) => setDados(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((value) => (
            <tr key={value["id"]}>
              <td>{value["title"]}</td>
              <td className={value["type"]}>R$ {value["amount"]}</td>
              <td>{value["category"]}</td>
              <td>{value["createdAt"]}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
