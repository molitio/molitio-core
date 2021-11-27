import { Router, Request, Response } from "express";
import moFormData, { MoForm } from "../form/MoForm";

const moFormRoutes = Router();

moFormRoutes.get("/", async (req: Request, res: Response) => {
  moFormData.find((err: any, result: MoForm[]) => {
    if (err) {
      res.send("Error");
    } else {
      res.send(result);
    }
  });
});

moFormRoutes.post("/", async (req: Request, res: Response) => {
  if (req.body._id === null || req.body._id === "") {
    delete req.body._id;
  }

  let formData = new moFormData(req.body);

  formData.timeSent = new Date();

  if (formData.isNew) {
    saveNew(req, res, formData);
  } else {
    if (formData._id.IsValid()) {
      setExisting(req, res, formData);
    }
  }
});

moFormRoutes.delete("/:id", async (req: Request, res: Response) => {
  moFormData.findByIdAndRemove(req.params.id, (err: any, result: any) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send(result);
    }
  });
});

function saveNew(req: Request, res: Response, formData: MoForm) {
  formData.save((err: any, result: any) => {
    if (err) {
      console.log(err.message);
      res.send(err.message);
    } else {
      console.log(JSON.stringify(result));
      res.send(result);
    }
  });
}

function setExisting(req: Request, res: Response, formData) {
  formData.set((err: any, result: any) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send(result);
    }
  });
}

export default moFormRoutes;
