import { register, deleteTK } from "../types/QuanLyDangKyTKTypes";

export const registerAction = (info) =>({
    type: register,
    info
})
export const deleteAction = (id) => ({
  type: deleteTK,
  id,
});