import { MinMaxValidator } from "./MinMaxValidator";

export interface FormField {
  type: string;
  labelText: string;
  inputClassNames: string;
  inputContainerClassNames: string;
  inputLabelClassNames: string;
  value: any;
  minMaxLimit: MinMaxValidator;
  required: boolean;
}
