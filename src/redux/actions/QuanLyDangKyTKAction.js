import { register, deleteTK, editTK, updateTK } from "../types/QuanLyDangKyTKTypes";

export const registerAction = (info) =>({
    type: register,
    info
})
export const deleteAction = (id) => ({
  type: deleteTK,
  id,
});
export const editAction = (taikhoan) => ({
  type: editTK,
  taikhoan,
});

export const updateAction = (taikhoan) => ({
  type: updateTK,
  taikhoan,
});