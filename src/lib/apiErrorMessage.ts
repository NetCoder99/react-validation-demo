export function getErrorMessage(inpError: any ) {
  let errMsg = inpError.message;
  try {
    if (inpError.response.data.message) {
      errMsg = inpError.response.data.message;
    }
  }
  catch(error){
    errMsg = error;
  }
  return errMsg
}