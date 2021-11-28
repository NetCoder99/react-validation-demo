import React from "react";
import { formFieldDef, onFieldChange } from "../../store/fieldReducer";
//import classes from '../Login/LoginForm.module.css';

export interface inpProps {
  id: string;
  dispName: string;
  fieldDispatch: React.Dispatch<any>;
  fieldState: formFieldDef;
  type?: string;
  showMsg?: boolean;
  disabled?: boolean;
  inpWidth?: string;
  classes: {
    readonly [key: string]: string;
  };
}

const InputField = React.forwardRef<HTMLInputElement, inpProps>((props, ref) => {
    console.log("InputField.init:", props);

    let content = <div>&nbsp;</div>;
    if (props.fieldState.touched && props.fieldState.hasError) {
      content = (
        <div className={"input.error"}>{props.fieldState.hasError}</div>
      );
    }

    let tmpClass = "";
    if (props.fieldState.touched && props.fieldState.hasError) {
      tmpClass = "error";
    }

    return (
      <div className={`${props.classes.input_wrapper} ${props.classes.flexChild}`}>
        <label htmlFor={props.id}>{props.dispName}</label>
        <br />
        <input
          type={props.type || "text"}
          name={props.id}
          id={props.id}
          value={props.fieldState.value}
          className={tmpClass}
          disabled={props.disabled}
          ref={ref}
          onChange={(e) => {
            onFieldChange(props.id, e.target.value, props.fieldDispatch);
          }}
          // onBlur={(e) => {
          //   onFocusOut(props.id, e.target.value, props.fieldDispatch, props.fieldState);
          // }}
        />
        <div className={props.classes.break} />
        {props.showMsg && content}
      </div>
    );
  }
);

export default InputField;
