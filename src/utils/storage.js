import {storage} from '../firebaseConfig';

export async function putFileToStorage(file) {
  return storage.ref(`products/${file.name}`).put(file);
}

export async function getImageUrlFromStorage(file) {
  return storage.ref('products').child(file.name).getDownloadURL();
}
