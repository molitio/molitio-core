import React from "react";
import { ButtonExampleProps } from "./ButtonExampleProps";

export function ButtonExample({ props }: ButtonExampleProps): JSX.Element {
  return (
    <main>
      <label>{props.label}</label>
      <input type="button" value={props.label}></input>
    </main>
  );
}
