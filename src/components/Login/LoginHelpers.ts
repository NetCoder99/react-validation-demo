import { formFieldDef } from "../../store/fieldReducer";

export const userIdFld: formFieldDef = {id: "userId", value: "", touched: false, hasError: false, errorMsg: "",};
export const passWdFld: formFieldDef = {id: "passWd", value: "", touched: false, hasError: false, errorMsg: "",};

export const formFields = {
  userId: userIdFld,
  passWd: passWdFld,
};

export const formState = {
  pending: false,
  errFlag: false,
  message: "",
};

export function setErrorFocus(fieldState: any, fieldRefs: React.MutableRefObject<any>) {
  if (fieldState["userId"].hasError) {
    if (fieldRefs.current[0]) {
      fieldRefs.current[0].focus();
    }
  } else if (fieldState["passWd"].hasError) {
    if (fieldRefs.current[1]) {
      fieldRefs.current[1].focus();
    }
  }

}