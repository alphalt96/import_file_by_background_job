import { DataSource } from 'typeorm';
require('dotenv').config();
import path from 'path';
import { ImportItemOrder, Item } from './entities';

const username = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const port = +process.env.POSTGRES_PORT;
const database = process.env.POSTGRES_DB;
const host = process.env.POSTGRES_HOST;
const isDebug = process.env.NODE_ENV === 'development' ? true : false

export const appDataSource = new DataSource({
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  logging: isDebug,
  entities: [ ImportItemOrder, Item ],
  migrations: [ path.join(__dirname, 'migrations/*.ts') ]
});

appDataSource.initialize()
  .then(_ => {
    console.log('Connect to db successfully');
  })
  .catch(err => {
    console.log('Error when connect to db', err);
  });

process.on('exit', () => {
  console.log('Close db connection before exit app');
  appDataSource.destroy().then(() => {
    console.log('Close connection to db successfully');
  });
});
