import React from "react";
import "./App.css";
import { MFormComponent } from "./component/MFormComponent";
import { formService } from "./service/formService";

function App() {
  return (
    <>
      <div className="App">
        <MFormComponent formCollection={formService} />
      </div>

      <div>
        <form>
          <div className="form-row align-items-center">
            <div className="col-sm-3 my-1">
              <label className="sr-only" htmlFor="inlineFormInputName">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputName"
                placeholder="Jane Doe"
              />
            </div>
            <div className="col-sm-3 my-1">
              <label className="sr-only" htmlFor="inlineFormInputGroupUsername">
                Username
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="col-auto my-1">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="autoSizingCheck2"
                />
                <label className="form-check-label" htmlFor="autoSizingCheck2">
                  Remember me
                </label>
              </div>
            </div>
            <div className="col-auto my-1">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
