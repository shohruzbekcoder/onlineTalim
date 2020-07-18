import React from "react";
import TextField from "@material-ui/core/TextField";
import "./loginCardCss.css";

export function LoginCard() {
  return (
    <div className="lodinCardWrapper">
      <h1>Ruyhatan utilganini tasdiqlash</h1>
      <div className="formGroup">
        <div className="loginUser">
          <span>Login: </span>
          <TextField
            id="outlined-basic"
            width="100%"
            label="Foydalanuvchi nomi"
            variant="outlined"
          />
        </div>
        <div className="loginUser">
          <span>Parol: </span>
          <TextField
            id="outlined-basic"
            width="100%"
            label="Parolni kiriting"
            variant="outlined"
          />
        </div>
      </div>
      {/* <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
