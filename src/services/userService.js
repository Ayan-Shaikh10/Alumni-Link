import {
  doc,
  setDoc
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export async function saveUser(uid, data) {
  await setDoc(doc(db, "users", uid), data);
}