import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc
} from "firebase/firestore";

import { db } from "../firebase/firebase";


// ========================================
// SAVE NEW USER
// ========================================

export async function saveUser(uid, data) {

  await setDoc(
    doc(db, "users", uid),
    data
  );

}


// ========================================
// GET SINGLE USER
// ========================================

export async function getUser(uid) {

  const snapshot = await getDoc(
    doc(db, "users", uid)
  );

  if (snapshot.exists()) {

    return {

      id: snapshot.id,

      ...snapshot.data()

    };

  }

  return null;

}


// ========================================
// GET ALL USERS
// Used by Alumni Directory
// ========================================

export async function getUsers() {

  const usersRef = collection(
    db,
    "users"
  );

  const snapshot = await getDocs(
    usersRef
  );

  return snapshot.docs.map((document) => ({

    id: document.id,

    ...document.data()

  }));

}


// ========================================
// UPDATE USER
// ========================================

export async function updateUser(uid, data) {

  await updateDoc(

    doc(db, "users", uid),

    data

  );

}


// ========================================
// CALCULATE PROFILE PROGRESS
// ========================================

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

      completed:

        user.about

    },


    {

      label: "Skills",

      completed:

        user.skills &&

        user.skills.length > 0

    },


    {

      label: "Experience",

      completed:

        user.experience

    }

  ];


  const completed = sections

    .filter(

      section => section.completed

    )

    .map(

      section => section.label

    );


  const remaining = sections

    .filter(

      section => !section.completed

    )

    .map(

      section => section.label

    );


  const progress = Math.round(

    (

      completed.length /

      sections.length

    ) * 100

  );


  return {

    progress,

    completed,

    remaining

  };

}