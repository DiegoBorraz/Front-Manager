import CryptoJS from "crypto-js";

const secretKey = "teste";

export async function encrypt(value) {
  var encripted = await CryptoJS.AES.encrypt(value, secretKey).toString();
  return encripted;
}

export async function decrypt(value) {
  let decripted = await CryptoJS.AES.decrypt(value, secretKey);
  let originalText = await decripted.toString(CryptoJS.enc.Utf8);
  return originalText;
}

export async function encryptJSON(value) {
  var encripted = CryptoJS.AES.encrypt(JSON.stringify(value), secretKey).toString();
  return encripted;
}

export async function decryptJSON(value) {
  var bytes = CryptoJS.AES.decrypt(value, secretKey);
  var decripted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decripted;
}
//FALTA CONVERTER PARA JSON
