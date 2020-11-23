import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Term } from "../entity/Terms";

export default class CreateTerms implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    return connection
      .createQueryBuilder()
      .insert()
      .into(Term)
      .values([
        {
          term: "ナウい",
          meaning: "今っぽいということ。",
        },
        {
          term: "タピる",
          meaning: "タピオカミルクティーを飲みに行くこと。",
        },
      ])
      .execute();
  }
}
