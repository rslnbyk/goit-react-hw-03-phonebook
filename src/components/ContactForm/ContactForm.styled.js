import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  border: 1px solid black;
  padding: 5px 10px;
`;

export const FormInput = styled.input`
  margin-bottom: 20px;
`;

export const FormSubmit = styled.button`
  padding: 0 5px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 4px;

  &:hover {
    background-color: #00a2ff;
  }
`;
