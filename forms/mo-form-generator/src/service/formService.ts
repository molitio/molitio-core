import { FormCollection } from "../component/interface/FormCollection";
import { FormField } from "../component/interface/FormField";
import { MForm } from "../component/interface/MForm";

export const formService: FormCollection = {
  formsData: new Map<string, MForm>([
    [
      "personalInfo",
      {
        tag: "firstLastNameForm",
        displayName: "Personal Information",
        id: "cda8752d-0ba7-4852-b9e7-cb03b919277c",

        componentBodyClassNames: "",
        componentBodyStyle: {
          padding: "20px",
          backgroundColor: "purple",
        },

        formContainerClassNames: "container",
        formContainerStyle: {
          color: "yellow",
        },

        formClassNames: "",
        formStyle: {},

        formFields: new Map<string, FormField>([
          [
            "firstName",
            {
              type: "text",
              labelText: "First name",
              inputContainerClassNames: "form-group",
              inputClassNames: "form-control",
              inputLabelClassNames: "",
              value: "",
              minMaxLimit: { min: 3, max: 144 },
              required: true,
            },
          ],
          [
            "lastName",
            {
              type: "text",
              labelText: "Last name",
              inputContainerClassNames: "form-group",
              inputClassNames: "form-control",
              inputLabelClassNames: "",
              value: "",
              minMaxLimit: { min: 3, max: 144 },
              required: true,
            },
          ],
          [
            "dob",
            {
              type: "date",
              labelText: "Date of Birth",
              inputContainerClassNames: "form-group",
              inputClassNames: "form-control",
              inputLabelClassNames: "",
              value: "",
              minMaxLimit: { min: 1900, max: 2021 },
              required: true,
            },
          ],
          [
            "accept",
            {
              type: "checkbox",
              labelText: "Accept answer",
              inputContainerClassNames: "form-check",
              inputClassNames: "form-check-input my-1",
              inputLabelClassNames: "form-check-label",
              value: false,
              minMaxLimit: { min: 1900, max: 2021 },
              required: true,
            },
          ],
        ]),
      },
    ],
  ]),
};
