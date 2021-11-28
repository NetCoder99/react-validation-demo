import classes from "./LoginForm.module.css";
import Card from "../UI/Card";
import InputField from "../Common/InputField";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { fieldReducer } from "../../store/fieldReducer";
import FormStatus from "../Common/FormStatus";
import { validateLoginForm } from "../../lib/validateLoginForm";
import { formFields, formState, setErrorFocus } from "./LoginHelpers";
import HttpService from "../../http/http-service";
import { getErrorMessage } from "../../lib/apiErrorMessage";
import { AuthContext, AuthPayload, LOGIN, LOGOUT } from "../../store/authReducer";

const LoginForm = () => {
  console.log("LoginForm.init:");

  const [formStatus, setFormStatus]  = useState(formState);
  const [fieldState, fieldsDispatch] = useReducer(fieldReducer, formFields);
  const authCtx = useContext(AuthContext);

  const fieldRefs = useRef<any>([]);
  const addFieldRef = (element: any) => {
    if (element && fieldRefs && !fieldRefs.current.includes(element)) {
      fieldRefs.current.push(element);
    }
  };

  useEffect(() => {
    setErrorFocus(fieldState, fieldRefs);
  }, [formStatus]);

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    const { hasError, errorMsg } = validateLoginForm(fieldState,fieldsDispatch);
    if (hasError) {
      setFormStatus({ pending: false, errFlag: hasError, message: errorMsg });
    } else {
      setFormStatus({ pending: true, errFlag: false, message: 'Processing login request...' });
      authCtx.dispatch({type: LOGOUT})
      HttpService.login(fieldState["userId"].value, fieldState["passWd"].value)
        .then(response => {
          const payload: AuthPayload = {isLoggedIn: true,apiToken: response.data,userRoles: []};
          authCtx.dispatch({type: LOGIN, payload: payload})
          setFormStatus({pending: false, errFlag: false, message: "Login complete."})
        })
        .catch(error => {
          setFormStatus({pending: false, errFlag: true, message: "Login failed: " + getErrorMessage(error)})
        });
    }
  };

  return (
    <Card>
      <div className={classes.Login}>
        <h1 className={classes.title}>Login</h1>
        <form
          className={classes.flex_parent}
          onSubmit={(e) => formSubmitHandler(e)}
        >
          <InputField
            id={formFields.userId.id}
            dispName="User Id:"
            fieldDispatch={fieldsDispatch}
            fieldState={fieldState.userId}
            classes={classes}
            //ref={userIdRef}
            ref={(ref) => addFieldRef(ref)}
          />
          <InputField
            id={formFields.passWd.id}
            dispName="Password:"
            fieldDispatch={fieldsDispatch}
            fieldState={fieldState.passWd}
            type="password"
            classes={classes}
            ref={(ref) => addFieldRef(ref)}
          />
          <div>
            <input
              className={classes.submit_btn}
              type="submit"
              value="Submit"
              disabled={formStatus.pending}
            />
            <div className={` ${"inline_block"}  ${"margin_left_1rem"}`}>
              <FormStatus
                pending={formStatus.pending}
                errFlag={formStatus.errFlag}
                message={formStatus.message}
              />
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default LoginForm;
