import { useState } from "react";
import styled from "styled-components";
import { Button } from "./components/Button";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalculatorBody = styled.div`
  width: 450px;
  height: 650px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  flex-direction: column;
`;

const Output = styled.div`
  width: 80%;
  height: 80px;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;
`;

const Buttons = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const ButtonLayout = [
    [7, 8, 9, "C"],
    [4, 5, 6, "X"],
    [1, 2, 3, "-"],
    [0, ".", "=", "+"],
  ];

  return (
    <Body>
      <CalculatorBody>
        <Output></Output>
        {ButtonLayout.map((arr, i) => {
          return (
            <Buttons>
              {arr.map((e) => {
                return <Button innerText={e} key={e} />;
              })}
            </Buttons>
          );
        })}
      </CalculatorBody>
    </Body>
  );
}

export default App;
