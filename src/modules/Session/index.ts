import * as localforage from 'localforage';

localforage.config({
  driver: localforage.LOCALSTORAGE,
  name: 'pluto-app',
  storeName: 'pluto'
});

export default localforage;
