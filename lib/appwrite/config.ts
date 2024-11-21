/*
original author : Amon K. Daniel
date : 11/21/2024
Last updated by: Amon K. Daniel
description: This config file is entry point for memory-dump appwrite database 



*/

import { Client, Account, Databases } from "appwrite";

export const appwriteConfig = {
  projectID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "",
  url: process.env.NEXT_PUBLIC_APPWRITE_URL || "",
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
  userCollectionId: process.env.NEXT_PUBLIC_USER_COLLECTION_ID || "",
  imageCollectionId: process.env.NEXT_PUBLIC_IMAGE_COLLECTION_ID || "",
  titleCollectionId: process.env.NEXT_PUBLIC_TITLE_COLLECTION_ID || "",
  descriptionCollectionId:
    process.env.NEXT_PUBLIC_DESCRIPTION_COLLECTION_ID || "",
};

export const client = new Client();

client.setProject(appwriteConfig.projectID);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
