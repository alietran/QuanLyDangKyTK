import styled from "styled-components";
//----------------button-------------------

export const Button = styled.button`
  background-color: ${(props) =>
    props.Register
      ? "#28a745"
      : props.Update
      ? "#007bff"
      : props.Edit
      ? "#007bff"
      : "#dc3545"};
  transition: all 0.5s;
  border-radius: 5px;
  padding: 0.35em 0.6em;
  margin: 0 0 10px 10px;
  color: #fff;
  border: 1px solid
    ${(props) =>
      props.Register
        ? "#28a745"
        : props.Update
        ? "#007bff"
        : props.Edit
        ? "#007bff"
        : "#dc3545"};
  &:hover {
    color: #343a40;
    background-color: #fff;
    border: 1px solid black;
  }
  &:disabled {
    cursor: no-drop;
  }
`;

