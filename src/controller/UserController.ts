import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Term } from "../entity/Terms";

export class TermController {
  private termRepository = getRepository(Term);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.termRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.termRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.termRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let termToRemove = await this.termRepository.findOne(request.params.id);
    await this.termRepository.remove(termToRemove);
  }
}
