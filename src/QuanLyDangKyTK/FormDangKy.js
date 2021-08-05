import React, { Component } from "react";
import { Label, TextField } from "../Components/TextField";
import { Table, Tr, Td } from "../Components/Table";
import { Select, Option } from "../Components/TextField";

import { Heading3 } from "../Components/Heading";
import { Button } from "../Components/Button";
export default class FormDangKy extends Component {
  render() {
    return (
      <div  >
        <Heading3>Registration</Heading3>
        <Table>
          <Tr>
            <Td>
              <TextField label="Account"></TextField>
            </Td>
            <Td>
              <TextField label="Full Name"></TextField>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <TextField label="Password"></TextField>
            </Td>
            <Td>
              <TextField label="Phone Number"></TextField>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <TextField label="Email"></TextField>
            </Td>
            <Td>
              <Label>User Type</Label>
              <Select>
                <Option>Customer</Option>
                <Option>Client</Option>
              </Select>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Button Register>Register</Button>
              <Button Update>Update</Button>
            </Td>
            <Td></Td>
          </Tr>
        </Table>
      </div>
    );
  }
}
