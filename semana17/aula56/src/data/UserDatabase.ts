import knex from "knex";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{


  private static TABLE_NAME = "User";

  public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<void> {
    await this.getConnection()
      .insert({
        id,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);

      BaseDatabase.destroyConnection
  }

  public async getUserByEmail(email: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    return result[0];
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id });

    return result[0];
  }

  public async deleteUser(id:string): Promise<void>{
    await this.getConnection().raw(`
    DELETE FROM ${UserDatabase.TABLE_NAME}
    WHERE id = "${id}"
    `)

    BaseDatabase.destroyConnection()
  }
}
