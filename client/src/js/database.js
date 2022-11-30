import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

export const initdb = async () => {
    //We are creating a new database named 'contact_db' which will be using version 1 of this database
    openDB('contact_db', 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains('contacts')) {
                console.log('contacts store already exists')
                return;
            }
            //Create a new object store for the data and give it a key name of 'id' which will increment automatically
            db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
            console.log('contacts store created');
        }
        })
    }