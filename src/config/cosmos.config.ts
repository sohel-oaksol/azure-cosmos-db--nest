// src/config/cosmos.config.ts
import { CosmosClient } from '@azure/cosmos';
import * as dotenv from 'dotenv';

dotenv.config();

export const cosmosClient = new CosmosClient({
  endpoint: process.env.COSMOS_DB_ENDPOINT,
  key: process.env.COSMOS_DB_KEY,
});

export const databaseId = process.env.COSMOS_DB_DATABASE_ID;
export const containerId = process.env.COSMOS_DB_CONTAINER_ID;

export async function getContainer() {
  const { database } = await cosmosClient.databases.createIfNotExists({ id: databaseId });
  const { container } = await database.containers.createIfNotExists({ id: containerId });
  return container;
}
