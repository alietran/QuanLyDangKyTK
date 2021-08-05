const stateDefault = {
  taikhoan: [
    {
      id: 1,
      account: "thanhdat03",
      fullName: "Thành Đạt",
      password: "123",
      email:'thanhledatomon@gmail.com',
      phoneNumber: "0916671369",
      userType: "Customer",
    },
    {
      id: 2,
      account: "ngocdiep02",
      fullName: "Ngọc Diệp",
      password: "123",
      email: 'ngocdiep710@gmail.com',
      phoneNumber: "0946379177",
      userType: "Client",
    },
  ],
};



export const QuanLyDangKyTKReducer =  (state = stateDefault,action) =>{
    switch(action.type){
        default: return {...state};
    }
}
export default QuanLyDangKyTKReducer;