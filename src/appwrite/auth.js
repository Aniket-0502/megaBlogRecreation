import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  //auth services (all are promises)
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //Automatically logs in the user after creating account
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite Error :: createAccount :: error -> ", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return session;
    } catch (error) {
      console.log("Appwrite Error :: login :: error -> ", error);
      throw error;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite Error :: logout :: error -> ", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite Error :: getCurrentUser :: error -> ", error);
    }
    return null;
  }
}

const authService = new AuthService();

export default authService;
