import { CSSProperties } from "react";
import { FormField } from "./FormField";

export interface MForm {
  tag: string;
  displayName: string;

  componentBodyClassNames: string;
  componentBodyStyle: CSSProperties | undefined;

  formClassNames: string;
  formStyle: CSSProperties | undefined;

  formContainerClassNames: string;
  formContainerStyle: CSSProperties | undefined;

  id: string;
  formFields: Map<string, FormField>;
}
