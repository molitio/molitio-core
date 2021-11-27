import { Router, Request, Response } from "express";
import { MoForm } from '../form/MoForm';
const helloValuesRoutes = Router();

helloValuesRoutes.get("/", (req: Request, res: Response) => {
    const timeReceived = new Date();
    const formData = {
      _id: "mockFormDbId",
      name: "my name",
      formId: "mockFormId01",
      originUrl: req.originalUrl,
      timeSent: timeReceived,
      value: [
        {
          fieldName: "nameField",
          fieldValue: "My name is in the cloud",
        },
        {
          fieldName: "countryField",
          fieldValue: "This is my county. I Love HU",
        },
      ] ,
    };
    res.json(formData);
    res.send();
  });


  export default helloValuesRoutes;