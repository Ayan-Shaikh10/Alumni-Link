import {
  doc,
  setDoc,
  getDoc,
  updateDoc
} from "firebase/firestore";

import { db } from "../firebase/firebase";

// Save New User
export async function saveUser(uid, data) {
  await setDoc(doc(db, "users", uid), data);
}

// Get User
export async function getUser(uid) {

  const snapshot = await getDoc(doc(db, "users", uid));

  if (snapshot.exists()) {

    return snapshot.data();

  }

  return null;

}

// Update User
export async function updateUser(uid, data) {

  await updateDoc(doc(db, "users", uid), data);

}