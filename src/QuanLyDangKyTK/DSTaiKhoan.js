import React, { Component } from "react";
import { Button } from "../Components/Button";
import { Heading3 } from "../Components/Heading";
import { Table, Thead, Th, Tbody, Tr, Td } from "../Components/Table";
import { connect } from "react-redux";
import { deleteAction } from "../redux/actions/QuanLyDangKyTKAction";
class DSTaiKhoan extends Component {
  renderTK = () => {
   return this.props.taikhoan.map((tk, index) => {
      return (
        // console.log(tk.id)
        <Tr key={index}>
          <Td>{index+1}</Td>
          <Td>{tk.account}</Td>
          <Td>{tk.fullName}</Td>
          <Td>{tk.password}</Td>
          <Td>{tk.email}</Td>
          <Td>{tk.phoneNumber}</Td>
          <Td>{tk.userType}</Td>
          <Td>
            <Button Update>Edit</Button>
            <Button
              onClick={() => {
                this.props.dispatch(deleteAction(tk.id));
              }}
              Delete
            >
              Delete
            </Button>
          </Td>
        </Tr>
      );
    });
  };


  render() {
    return (
      <div>
        <Heading3>User List</Heading3>
        <Table>
          <Thead>
            <Th>No.</Th>
            <Th>Account</Th>
            <Th>Full Name</Th>
            <Th>Password</Th>
            <Th>Email</Th>
            <Th>Phone Number</Th>
            <Th>User Type</Th>
            <Th></Th>
          </Thead>
          <Tbody>{this.renderTK()}</Tbody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    taikhoan: state.QuanLyDangKyTKReducer.taikhoan,
  };
};

export default connect(mapStateToProps)(DSTaiKhoan);
