import styled from "styled-components";

const ButtonContainer = styled.div`
  width: 90px;
  height: 90px;
  background-color: #615f77;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: 7px;
`;

export const Button = (props: any) => {
  return <ButtonContainer>{props.innerText}</ButtonContainer>;
};
