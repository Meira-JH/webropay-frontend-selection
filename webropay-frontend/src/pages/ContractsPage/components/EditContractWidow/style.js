import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 3;
  top: 20%;
  right: 40%;
  width: 50%;
  max-width: 500px;
  min-width: 400px;
  height: 550px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: 0.3s ease-out;
  ${(props) =>
    !props.show &&
    css`
      right: -50%;
    `}
`;

export const Header = styled.div`
  flex: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContractForm = styled.div`
  width: 60%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;

  label {
    width: 100%;
  }
`;

export const StyledInput = styled.textarea`
  resize: none;
  text-align: flex-start;
  width: 100%;
  height: 80px;
  margin: 15px 0;
  border: 1px solid #e5e5e5;
`;

export const StyledSelect = styled.select`
  text-align: flex-start;
  width: 100%;
  height: 30px;
  margin: 15px 0;
  border: 1px solid #e5e5e5;
`;

export const Title = styled.p`
  box-sizing: border-box;
  margin: 25px 0;
  flex: none;
  color: #122659;
  font-family: Roboto;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0px;
  color: #122659;
  text-shadow: 0px 3px 6px #00000029;
  text-transform: uppercase;
  opacity: 1;
`;

export const SuccessMessage = styled.span`
  padding-bottom: 15px;
  color: #122659;
`;

export const ErrorMessage = styled.span`
  padding-bottom: 15px;
  color: red;
`;

export const ExitButton = styled(Title)`
  cursor: pointer;
  border: 2px solid #122659;
  color: #122659;
  padding: 0px 5px;
  margin: 10px;
  border-radius: 50%;
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 2;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.3s ease-out;
  ${(props) =>
    !props.show &&
    css`
      background-color: transparent;
      pointer-events: none;
    `}
`;
