import { Router, Request, Response } from "express";

const helloValuesRoutes = Router();

helloValuesRoutes.get("/", (req: Request, res: Response) => {
    const timeReceived = new Date();
    const human = {
      _id: "mockFormDbId",
      name: "my name",
      time: timeReceived,
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
    res.json(human);
    res.send();
  });


  export default helloValuesRoutes;