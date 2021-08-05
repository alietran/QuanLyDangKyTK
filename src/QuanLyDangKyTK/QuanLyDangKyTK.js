import React, { Component } from "react";
import FormDangKy from "./FormDangKy";

import { Container } from "../Components/Container";
import DSTaiKhoan from "./DSTaiKhoan";

export default class QuanLyDangKyTK extends Component {
  render() {
    return (
      <Container>
        <FormDangKy />
        <DSTaiKhoan />
      </Container>
    );
  }
}
