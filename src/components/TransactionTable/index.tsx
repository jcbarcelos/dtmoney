import React from "react";

import { Container } from "./styled";

export const TransactionTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sdds</td>
            <td className="deposit">R$ 12</td>
            <td>qa</td>
            <td>20-10-2021</td>
          </tr>
          <tr>
            <td>sdds</td>
            <td className="withdraw">-R$ 12</td>
            <td>qa</td>
            <td>20-10-2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
