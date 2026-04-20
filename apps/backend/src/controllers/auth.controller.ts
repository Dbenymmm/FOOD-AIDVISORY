import { Request, Response } from "express";
import { z } from "zod";
import * as authService from "../services/auth.service";

const schema = z.object({ email: z.string().email(), password: z.string().min(8) });

export async function signup(req: Request, res: Response) {
  try {
    const body = schema.parse(req.body);
    const result = await authService.signup(body.email, body.password);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error instanceof Error ? error.message : "Signup failed" });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const body = schema.parse(req.body);
    const result = await authService.login(body.email, body.password);
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ message: error instanceof Error ? error.message : "Login failed" });
  }
}
