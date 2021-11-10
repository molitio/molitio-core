import { Schema } from "mongoose";
import mongoose from "mongoose";

const MoFormFieldSchema = new Schema(
  {
    fieldName: {
      type: String,
      required: true,
    },
    fieldValue: Object,
  },
  { _id: true, autoIndex: true }
);

export interface MoFormField {
  fieldName: string;
  fieldValue: any;
}

const MoFormSchema = new Schema(
  {
    formId: String,
    name: {
      type: String,
      required: true,
    },
    originUrl: String,
    timeSent: Date,
    values: [MoFormFieldSchema],
  },
  { autoIndex: true, timestamps: true }
);

export interface MoForm extends mongoose.Document {
  name: string;
  formId: string;
  originUrl: string;
  timeSent: Date;
  values: MoFormField[];
}

export type MoFormModel = mongoose.Model<MoForm>

export default mongoose.model<MoForm, MoFormModel>("MoForm", MoFormSchema);
