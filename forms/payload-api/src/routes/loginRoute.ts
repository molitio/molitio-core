import { Router, Request, Response } from "express";
import moFormData, { MoForm } from "../form/MoForm";

const loginRoute = Router();

loginRoute.post("/", async (req: Request, res: Response) => {
  if (req.body._id === null || req.body._id === "") {
    delete req.body._id;
  }

  if(loginUser())
  {
    try {
        
        res.json({ message: "Ok"});
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
  }
});

function loginUser()  {
    return true;
}

export default loginRoute;
