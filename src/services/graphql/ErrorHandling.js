export function errorHandling(error) {
  let erro = "";
  if (error.message.includes("Network error")) {
    erro = "Falha na conexão com o servidor.";
  }
  if (error.message.includes("E_PASSWORD_MISMATCH")) {
    erro = "Senha invalida.";
  }
  if (error.message.includes("E_USER_NOT_FOUND")) {
    erro = "Email invalido.";
  }
  return erro;
}
