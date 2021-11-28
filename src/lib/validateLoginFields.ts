import { formFieldDef, UPDATE_FIELD } from "../store/fieldReducer";

export const validateLoginFields = (fldName: string, value: string | boolean, fieldDispatch: React.Dispatch<any>) => {
  let hasError = false;
  let errorMsg = "";

  let tmpValue: string = "";
  if (typeof value === "boolean") {
    tmpValue = value ? "true" : "false";
  } else {
    tmpValue = value;
  }

  switch (fldName) {
    case "name":
      if (tmpValue.trim() === "") {
        hasError = true;
        errorMsg = "Name cannot be empty";
      } else if (!/^[a-zA-Z ]+$/.test(tmpValue)) {
        hasError = true;
        errorMsg = "Invalid Name, avoid Special characters";
      } else {
        hasError = false;
        errorMsg = "";
      }
      break;

    case "userId":
      if (tmpValue.trim() === "") {
        hasError = true;
        errorMsg = "User id cannot be empty";
      }
      // else if (!/^[a-zA-Z ]+$/.test(tmpValue)) {
      //   hasError = true;
      //   error = "Invalid User id, avoid Special characters";
      // }
      else {
        hasError = false;
        errorMsg = "";
      }
      break;

    case "email":
      if (tmpValue.trim() === "") {
        hasError = true;
        errorMsg = "Email cannot be empty";
      } else if (
        !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
          tmpValue
        )
      ) {
        hasError = true;
        errorMsg = "Invalid Email";
      } else {
        hasError = false;
        errorMsg = "";
      }
      break;

    case "passWd":
      if (tmpValue.trim() === "") {
        hasError = true;
        errorMsg = "Password cannot be empty";
      }
      // else if (tmpValue.trim().length < 8) {
      //   hasError = true;
      //   error = "Password must have at least 8 characters";
      // }
      else {
        hasError = false;
        errorMsg = "";
      }
      break;

    case "mobile":
      if (tmpValue.trim() === "") {
        hasError = true;
        errorMsg = "Mobile cannot be empty";
      } else if (!/^[0-9]{10}$/.test(tmpValue)) {
        hasError = true;
        errorMsg = "Invalid Mobile Number. Use 10 digits only";
      } else {
        hasError = false;
        errorMsg = "";
      }
      break;

    case "terms":
      if (!value) {
        hasError = true;
        errorMsg = "You must accept terms and conditions";
      } else {
        hasError = false;
        errorMsg = "";
      }
      break;

    default:
      break;
  }

  const tmp: formFieldDef = {id: fldName, value: tmpValue, touched: true, hasError: hasError, errorMsg: errorMsg  };
  fieldDispatch({type: UPDATE_FIELD, data: tmp});

  //fieldDispatch();
  return { hasError, errorMsg };
};
