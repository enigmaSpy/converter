import styled from "styled-components";

export const FormContent = styled.form`
  display: flex;
  flex:4;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: aliceblue;

  @media (max-width: 767px) {
    gap: 10px;
  }
`;

export const FieldSet = styled.fieldset`
  display: flex;
  align-items: center;
  background-color: #333333;
  border: 1px solid #ccc;
  border-radius: 10px 0 0 10px;
  padding: 10px 15px;

  @media (max-width: 767px) {
    width: 100%;
    padding: 5px;
    border-radius: 10px;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content:center;
  align-items: center;
  `;

export const Input = styled.input`
  padding: 8px;
  height: 37px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px 0 0 8px;
  background-color: #f8f8f8;

  @media (max-width: 767px) {
    padding: 5px;
    height: 30px;
    width: 100%;
  }
`;
export const InputText = styled.span`
  display: inline-block;
  width: 100px;

  @media (max-width: 767px) {
    font-size: 0.9rem;
    width: 70px;
  }
`;

export const Select = styled.select`
  padding: 9px;
  border: none;
  border-radius: 0 10px 10px 0;

  @media (max-width: 767px) {
    padding: 5px;
    height: 30px;
  }
`;

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  padding: 12px;
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 1.6rem;
  background-color: #333333;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  &:before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(0);
    transition: transform 0.5s;
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover:before {
    transform: scale(1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 767px) {
    padding: 8px;
    font-size: 1.5rem;
  }
`;
