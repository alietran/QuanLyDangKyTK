import React, { Component } from 'react'
import {  Button } from '../Components/Button'
import { Heading3 } from '../Components/Heading'
import { Table,Thead, Th, Tbody,Tr,Td } from '../Components/Table'

export default class DSTaiKhoan extends Component {
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
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>thanhdat03</Td>
                  <Td>Thành Đạt</Td>
                  <Td>123</Td>
                  <Td>thanhledatomon@gmail.com</Td>
                  <Td>0916671369</Td>
                  <Td>Customer</Td>
                  <Td>
                    <Button Update>Edit</Button>
                    <Button Delete>Edit</Button>
                  </Td>
                </Tr>
                
              </Tbody>
            </Table>
          </div>
        );
    }
}
