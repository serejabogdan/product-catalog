import {database} from '../firebaseConfig';

export function onDeleteProduct(path) {
  database.ref(path).remove();
}

export function getRef(path) {
  return database.ref(path);
}
