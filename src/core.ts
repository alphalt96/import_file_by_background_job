import { S3 } from 'aws-sdk';
import { FileStorage } from './libs/storage';
import { ItemDataSource } from './libs/datasources';
import { appDataSource } from './db';

const s3 = new S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'us-east-1',
  endpoint: process.env.S3_ENDPOINT,
  s3ForcePathStyle: true,
  signatureVersion: 'v4'
});

export const storage = new FileStorage(s3);

export const itemDataSource = new ItemDataSource(appDataSource);
