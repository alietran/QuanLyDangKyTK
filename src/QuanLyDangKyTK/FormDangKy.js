import React, { Component } from "react";
import { Label, TextField } from "../Components/TextField";
import { Table, Tr, Td } from "../Components/Table";
import { Select, Option } from "../Components/TextField";

import { Heading3 } from "../Components/Heading";
import { Button } from "../Components/Button";
import Swal from "sweetalert2";
export default class FormDangKy extends Component {
  state = {
    values: {
      account: "",
      fullName: "",
      password: "",
      phoneNumber: "",
      email: "",
    },
    errors: {
      account: "",
      fullName: "",
      password: "",
      phoneNumber: "",
      email: "",
    },
  };

  handleChangeValue = (event) => {
    let { name, value, type } = event.target;

    let newValues = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };

    if (value.trim() === "") {
      newErrors[name] = name + " is required!";
    } else {
      newErrors[name] = "";
    }

    if (type === "email") {
      const regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regexEmail.test(value)) {
        newErrors[name] = name + " is invalid";
      } else {
        newErrors[name] = "";
      }
    }

    this.setState({
      values: newValues,
      errors: newErrors,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let { values, errors } = this.state;

    let valid = true;

    for (let key in values) {
      if (values[key] === "") {
        valid = false;
      }
    }

    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
      }
    }
    if (!valid) {
      Swal.fire({
        title: "Error!",
        text: "Register fail",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Success!",
        text: "Register success",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Heading3>Registration</Heading3>
        <Table>
          <Tr>
            <Td>
              <TextField
                textDanger={this.state.errors.account}
                value={this.state.values.account}
                name="account"
                label="Account"
                onChange={this.handleChangeValue}
              ></TextField>
            </Td>
            <Td>
              <TextField
                value={this.state.values.fullName}
                textDanger={this.state.errors.fullName}
                name="fullName"
                label="Full Name"
                onChange={this.handleChangeValue}
              ></TextField>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <TextField
                value={this.state.values.password}
                textDanger={this.state.errors.password}
                name="password"
                label="Password"
                onChange={this.handleChangeValue}
              ></TextField>
            </Td>
            <Td>
              <TextField
                textDanger={this.state.errors.phoneNumber}
                value={this.state.values.phoneNumber}
                name="phoneNumber"
                label="Phone Number"
                onChange={this.handleChangeValue}
              ></TextField>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <TextField
                type="email"
                textDanger={this.state.errors.email}
                value={this.state.values.email}
                name="email"
                label="Email"
                onChange={this.handleChangeValue}
              ></TextField>
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
              <Button type="submit" Register>
                Register
              </Button>
              <Button Update>Update</Button>
            </Td>
            <Td></Td>
          </Tr>
        </Table>
      </form>
    );
  }
}
