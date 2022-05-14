import { FormControl, FormGroup } from '@angular/forms';

export declare class MoForm {
  export;
}

export interface MoFormField {
  fieldName: string;
  fieldValue: any;
}

export interface MoFormData extends FormGroup {
  _id: string;
  name: string;
  formId: string;
  originUrl: string;
  timeSent: Date;
  values: MoFormField[];
}

export function convertFormGroup(moFormData: MoFormData): MoFormData {
  const fields: MoFormField[] = [];

  Object.entries(moFormData.value).forEach((field) => {
    fields.push({
      fieldName: field[0],
      fieldValue: field[1],
    } as MoFormField);
  });

  return {
    _id: moFormData._id,
    name: moFormData.name,
    formId: moFormData.formId,
    originUrl: moFormData.originUrl,
    values: fields,
  } as MoFormData;
}
