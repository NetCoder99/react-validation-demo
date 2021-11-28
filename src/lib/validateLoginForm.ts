import { validateLoginFields } from "../lib/validateLoginFields";

export const validateLoginForm = (fieldState: any,fieldDispatch: React.Dispatch<any>) => {
  let hasError = false;
  let errorMsg = "Form is okay";  
  for (const fieldKey in fieldState) {
    console.log("fieldRec:", fieldKey);
    const fieldData = fieldState[fieldKey];
    const { hasError: fldError, errorMsg: fldMsg } = validateLoginFields(
      fieldData.id,
      fieldData.value,
      fieldDispatch
    );
    console.log("fieldData:", fieldData);
    console.log("hasError:", fldError, fldMsg);
    if (fldError && !hasError) {
      hasError = true;
      errorMsg = fldMsg;
    }
  }
  return { hasError, errorMsg };  
};
