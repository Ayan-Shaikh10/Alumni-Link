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

// Calculate Profile Progress
export function calculateProfileProgress(user) {

  if (!user) {

    return {

      progress: 0,

      completed: [],

      remaining: []

    };

  }

  const sections = [

    {
      label: "Personal Details",
      completed:
        user.fullName &&
        user.email &&
        user.phone
    },

    {
      label: "Educational Details",
      completed:
        user.degree &&
        user.department &&
        user.graduationYear
    },

    {
      label: "Professional Details",
      completed:
        user.profession &&
        user.city
    },

    {
      label: "About Me",
      completed: user.about
    },

    {
      label: "Skills",
      completed:
        user.skills &&
        user.skills.length > 0
    },

    {
      label: "Experience",
      completed: user.experience
    }

  ];

  const completed = sections
    .filter(section => section.completed)
    .map(section => section.label);

  const remaining = sections
    .filter(section => !section.completed)
    .map(section => section.label);

  const progress = Math.round(
    (completed.length / sections.length) * 100
  );

  return {

    progress,

    completed,

    remaining

  };

}