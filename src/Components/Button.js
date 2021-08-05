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
`;

// export const ButtonRegister = styled.button`
//   apperance: none;
//   background-color: #28a745;
//   color: #fff;
//   border: 1px solid #28a745;
//   border-radius: 5px;
//   padding: 0.35em 0.6em;
//   margin: 0 10px 10px 10px;
//   transition: all 0.5s;
//   font-size: 17px;
//   font-weight: bold;
//   &:hover {
//     font-weight: bold;
//     color: #343a40;
//     background-color: #fff;
//     border: 1px solid #343a40;
//   }
//   &:disabled {
//     cursor: no-drop;
//   }
// `;

// export const ButtonUpdate = styled.button`
//   apperance: none;
//   font-weight: bold;
//   background-color: #007bff;
//   color: #fff;
//   border: 1px solid #007bff;
//   border-radius: 5px;
//   margin: 0 10px 10px 10px;
//   padding: 0.35em 0.6em;
//   transition: all 0.5s;
//   font-size: 17px;
//   &:hover {
//     font-weight: bold;
//     color: #343a40;
//     background-color: #fff;
//     border: 1px solid #343a40;
//   }
//   &:disabled {
//     cursor: no-drop;
//   }
// `;
