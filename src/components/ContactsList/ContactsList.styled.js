import styled from 'styled-components';

export const DeleteButton = styled.button`
  padding: 0 5px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 4px;
  margin-left: 10px;

  &:hover {
    background-color: #00a2ff;
  }
`;

export const ContactsListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
