import React from "react";
import ButtonAppBar from "./komponents/ButtonAppBar";
import { LoginCard } from "./komponents/LoginCard";
import "./styles.css";

export default function App() {
  return (
    <div>
      <ButtonAppBar />
      <LoginCard />
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h1>Salom bu birinchi github bilan CodeSandbox da yaratilgan dastur</h1>
      </div>
    </div>
  );
}
