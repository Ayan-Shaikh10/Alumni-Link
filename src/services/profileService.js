import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export async function updateUserProfile(uid, data) {

    console.log("Save Block Called");

  const userRef = doc(db, "users", uid);

  await updateDoc(userRef, data);

}