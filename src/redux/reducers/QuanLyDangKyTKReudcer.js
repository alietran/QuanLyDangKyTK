import { deleteTK, register } from "../types/QuanLyDangKyTKTypes";

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
};

export const QuanLyDangKyTKReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case register: {
       console.log(action);
      let taikhoanNew = [...state.taikhoan];

      let index = taikhoanNew.findIndex(taikhoan => taikhoan.account === action.info.account);
      if(index !== -1){
        alert('Lỗi');
        
      }
      else{
        taikhoanNew.push(action.info)
      }
      state.taikhoan = taikhoanNew;
      return {...state}
    }

    case deleteTK: {
     console.log(action)
      let taikhoanNew = [...state.taikhoan];
      let index = taikhoanNew.findIndex(
        (taikhoan) => taikhoan.id === action.id
      );
      console.log(action.id);
      if (index !== -1) {
        taikhoanNew.splice(index, 1);
      }
      return { ...state, taikhoan: taikhoanNew };
    }

    default:
      return { ...state };
  }
};
export default QuanLyDangKyTKReducer;
