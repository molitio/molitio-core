import { useState } from "react";
import { MFormProps } from "./interface/MFormProps";
import "../index.scss";
import "./component.scss";

export function MFormComponent({ formCollection }: MFormProps): JSX.Element {
  const firstName = useState("");
  const lastName = useState("");

  return (
    <>
      {Array.from(formCollection.formsData.values()).map((form) => (
        <div className={form.componentBodyClassNames} style={form.componentBodyStyle}>
          <div className={form.formContainerClassNames} style={form.formContainerStyle}>
            <form className={form.formClassNames} style={form.formStyle}>
              {Array.from(form.formFields).map((field) => (
                <div className={field[1].inputContainerClassNames}>
                  <input
                    className={field[1].inputClassNames}
                    id={field[0]}
                    type={field[1].type}
                  />
                  <label
                    className={field[1].inputLabelClassNames}
                    htmlFor={field[0]}
                  >
                    {field[1].labelText}
                  </label>
                </div>
              ))}
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
            </form>
          </div>
        </div>
      ))}

      <h5>
        {firstName}
        {lastName}
      </h5>
    </>
  );
}
