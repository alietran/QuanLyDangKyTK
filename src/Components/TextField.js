import React from "react";
import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.color};
  min-height: 35px;
  height: 35px;
  font-size: 17px;
  width: 520px;
  display: initial;
;`

export const Label = styled.span`
  color: #343a40;
  width: auto;
  margin: 5px 0;
  display: inline-block;
;`;

export const Select = styled.select`
  min-height: 35px;
  height: 35px;
  display: inline-block;
  width: 100%;
  color: #343a40;
  border: 1px solid #343a40;
  border-radius: 5px;
`;
export const Option = styled.option`
  min-height: 35px;
  height: 35px;
  display: inline-block;
  width: 100%;
  color: #343a40;
  border:1px solid #343a40;
  border-radius: 5px;
`;



export const TextField = ({ label, textDanger, cssInput, ...props }) => {
  return (
    <span>
      <Label>{label}</Label>
      <br />

      <Input className="form-control" {...props} />
      <span className="text text-danger">{textDanger}</span>
    </span>
  );
};