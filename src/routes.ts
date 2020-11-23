import { createConnection } from "typeorm";
const { Router } = require("express");
import { Term } from "./entity/Terms";
const routes = Router();

export const setupServer = async () => {
  const conn = await createConnection();

  routes.get("/terms", async (req, res) => {
    const result = await conn.getRepository(Term).find();
    return res.json(result); //DBにある全てのデータを持ってくる
  });

  routes.post("/terms", async (req, res) => {
    const body = req.body;
    const newWord = new Term();
    newWord.term = body.term;
    newWord.meaning = body.meaning;
    console.log(newWord);
    await conn.getRepository(Term).save(newWord); //DBにデータを追加
    return res.json({ post_result: "OK" });
  });

  routes.patch("/terms/:id", async (req, res) => {
    const patchId = req.params.id;
    const body = req.body;
    const changeTerm = await conn.getRepository(Term).findOne(patchId);
    for (const para in body) {
      changeTerm[para] = body[para];
    }
    await conn.getRepository(Term).save(changeTerm);
    return res.json({ patch_result: "OK" });
  });

  routes.delete("/terms/:id", async (req, res) => {
    const deleteId = req.params.id;
    const deleteTerm = await conn.getRepository(Term).findOne(deleteId);
    await conn.getRepository(Term).remove(deleteTerm);
    return res.json({ delete: "OK" });
  });
};
setupServer();

module.exports = { setupServer };
module.exports = routes;
