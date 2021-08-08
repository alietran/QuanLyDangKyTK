import React, { Component } from "react";
import { Label, TextField } from "../Components/TextField";
import { Table, Tr, Td } from "../Components/Table";
import { Select, Option } from "../Components/TextField";

import { Heading3 } from "../Components/Heading";
import { Button } from "../Components/Button";
import Swal from "sweetalert2";
import {
  registerAction,
  updateAction,
} from "../redux/actions/QuanLyDangKyTKAction";
import { connect } from "react-redux";
class FormDangKy extends Component {
  state = {
    values: {
      account: "",
      fullName: "",
      password: "",
      phoneNumber: "",
      email: "",
      userType: "Customer",
    },
    errors: {
      account: "",
      fullName: "",
      password: "",
      phoneNumber: "",
      email: "",
      userType: "",
    },
  };

  handleChangeValue = (event) => {
    let { name, value, type } = event.target;

    let newValues = { ...this.state.values, [name]: value };
    // let userType = this.menu.value;

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
      return;
    }

    // this.setState({
    //   values: {
    //     account: "",
    //     fullName: "",
    //     password: "",
    //     phoneNumber: "",
    //     email: "",
    //     userType: "Customer",
    //   },
    // });

    //this.props.dispatch(registerAction(values));
    this.props.dispatch(updateAction(values));
    Swal.fire({
      title: "Success!",
      text: "Register success",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  render() {
    return (
      <form>
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
              <Select
                //ref={(input) => (this.menu = input)}
                name="userType"
                value={this.state.values.userType}
                onChange={this.handleChangeValue}
              >
                <Option value="Customer">Customer</Option>
                <Option value="Client">Client</Option>
              </Select>
            </Td>
          </Tr>
          <Tr>
            <Td>
              {/* ONCLICK */}
              <Button
                onClick={this.handleSubmit}
                //let res = this.menu.value;
                //console.log(res)1

                Register
              >
                Register
              </Button>
              <Button onClick={this.handleSubmit} Update>
                Update
              </Button>
            </Td>
            <Td></Td>
          </Tr>
        </Table>
      </form>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userEdit.id !== this.props.userEdit.id) {
      this.setState({
        values: this.props.userEdit,
      });
    }
  }
}
const mapStateToProps = (state) => {
  return {
    userEdit: state.QuanLyDangKyTKReducer.userEdit,
  };
};
export default connect(mapStateToProps)(FormDangKy);
