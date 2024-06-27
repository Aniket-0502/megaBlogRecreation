import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBucketId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log("Appwrite error :: createPost :: error -> ", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBucketId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log("Appwrite error :: updatePost :: error -> ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBucketId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite error :: deletePost :: error -> ", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite error :: getPost :: error -> ", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite error :: getPosts :: error -> ", error);
      return false;
    }
  }

  //File storage service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite error :: uploadFile :: error -> ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.document.bucket.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        fileId
      );
      return true;
    } catch (error) {
      console.log("Appwrite error :: deleteFile :: error -> ", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    try {
      return this.document.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite error :: getFilePreview :: error -> ", error);
    }
  }
}

const service = new Service();

export default service;
