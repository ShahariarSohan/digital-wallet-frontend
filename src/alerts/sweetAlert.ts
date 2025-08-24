import Swal from "sweetalert2";

export const successAlert = (
  message: string,
  amount: number,
  transactionFee: number
) => {
  Swal.fire({
    title: message,
    text: `Amount:  ${amount}TK 
     Transaction Fee : ${transactionFee}TK`,
    icon: "success",
  });
};
export const successAlert2 = (
  message: string,
  amount: number,
  commission: number
) => {
  Swal.fire({
    title: message,
    text: `Amount:  ${amount}TK 
     Commission: ${commission}TK`,
    icon: "success",
  });
};
export const failAlert = (
  message: string,
) => {
  Swal.fire({
    title: message,
    icon: "error",
  });
};

