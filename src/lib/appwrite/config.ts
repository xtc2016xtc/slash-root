import { Client, Account, Databases, Storage, Avatars } from 'appwrite';


export const appwriteConfig = {
  url:import.meta.env.VITE_APPWRITE_URL,
  projectId:import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATASE_ID,
  usersid:import.meta.env.VITE_APPWRITE_USER_ID,
  contextid:import.meta.env.VITE_APPWRITE_CONTEXT_ID
}


export const client = new Client();


client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);



export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

// const result = await account.get()

const result = await account.create(
  '6795e3a50011696c2174', // userId
  'email@example.com', // email
  '1234', // password
);


console.log(result)