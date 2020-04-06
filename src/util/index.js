export const textNumber = value => {
  return value
    .normalize("NFD")
    .replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, "");
};

export const checkMail = mail => {
  var er = new RegExp(
    /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/
  );
  if (typeof mail == "string") {
    if (er.test(mail)) {
      return true;
    }
  } else if (typeof mail == "object") {
    if (er.test(mail.value)) {
      return true;
    }
  } else {
    return false;
  }
};
