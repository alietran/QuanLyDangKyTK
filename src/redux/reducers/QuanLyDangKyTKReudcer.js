import { deleteTK, editTK, register, updateTK } from "../types/QuanLyDangKyTKTypes";

const stateDefault = {
  taikhoan: [
    {
      id: "1",
      account: "thanhdat03",
      fullName: "Thành Đạt",
      password: "123",
      email: "thanhledatomon@gmail.com",
      phoneNumber: "0916671369",
      userType: "Customer",
    },
    {
      id: "2",
      account: "ngocdiep02",
      fullName: "Ngọc Diệp",
      password: "123",
      email: "ngocdiep710@gmail.com",
      phoneNumber: "0946379177",
      userType: "Client",
    },
  ],
  userEdit: {
    id: "",
    account: "",
    fullName: "",
    password: "",
    email: "",
    phoneNumber: "",
    userType: "",
  },
};

export const QuanLyDangKyTKReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case register: {
      //console.log(action);
      let taikhoanNew = [...state.taikhoan];

      let index = taikhoanNew.findIndex(
        (taikhoan) => taikhoan.account === action.info.account
      );
      if (index !== -1) {
        alert("Lỗi");
      } else {
        taikhoanNew.push(action.info);
      }
      state.taikhoan = taikhoanNew;
      return { ...state };
    }

    case deleteTK: {
     // console.log(action);
      let taikhoanNew = [...state.taikhoan];
      let index = taikhoanNew.findIndex(
        (taikhoan) => taikhoan.id === action.id
      );
    //  console.log(action.id);
      if (index !== -1) {
        taikhoanNew.splice(index, 1);
      }
      return { ...state, taikhoan: taikhoanNew };
    }
    case editTK: {
     // console.log(action)
      return { ...state ,userEdit : action.taikhoan};
    }
    case updateTK: {    
      //state.userEdit = {...state.userEdit,email: action.taikhoan.email,phoneNumber: action.taikhoan.phoneNumber ...};
      state.userEdit = action.taikhoan;
      let taikhoanNew = [...state.taikhoan];
      let index  = taikhoanNew.findIndex((taikhoan)=>taikhoan.id === state.userEdit.id);
      if(index !== -1) {
        taikhoanNew[index] = state.userEdit
      }
      console.log(index)
      state.taikhoan = taikhoanNew;
      return {...state};
    }
    default:
      return { ...state };
  }
};
export default QuanLyDangKyTKReducer;
