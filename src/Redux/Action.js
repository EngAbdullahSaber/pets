export default function storeInfo(data) {
  return {
    type: "STORE_DATA",
    payload: data,
  };
}
export function storeInfo2(data) {
  return {
    type: "STORE_DATA2",
    payload: data,
  };
}
export function changLanguage(data) {
  return {
    type: "CHANGE_LANGUAGE",
    payload: data,
  };
}
export function setOtp(data) {
  return {
    type: "SET_OTP",
    payload: data,
  };
}
