import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  serverTimestamp,
  arrayUnion,
  arrayRemove
} from "firebase/firestore";

import { db } from "../firebase/firebase";


/* ===============================
   Get All Events
================================ */

export async function getEvents() {

  const snapshot = await getDocs(

    collection(db, "events")

  );


  return snapshot.docs.map(doc => ({

    id: doc.id,

    ...doc.data()

  }));

}


/* ===============================
   Get Single Event
================================ */

export async function getEvent(eventId) {

  const snapshot = await getDoc(

    doc(db, "events", eventId)

  );


  if (!snapshot.exists()) {

    return null;

  }


  return {

    id: snapshot.id,

    ...snapshot.data()

  };

}


/* ===============================
   Create Event
================================ */

export async function createEvent(data) {

  return await addDoc(

    collection(db, "events"),

    {

      ...data,

      createdAt: serverTimestamp(),

      registeredUsers: [],

      isActive: true

    }

  );

}


/* ===============================
   Update Event
================================ */

export async function updateEvent(eventId, data) {

  await updateDoc(

    doc(db, "events", eventId),

    data

  );

}


/* ===============================
   Delete Event
================================ */

export async function deleteEvent(eventId) {

  await deleteDoc(

    doc(db, "events", eventId)

  );

}


/* ===============================
   Register User For Event
================================ */

export async function registerForEvent(eventId, uid) {

  await updateDoc(

    doc(db, "events", eventId),

    {

      registeredUsers: arrayUnion(uid)

    }

  );

}


/* ===============================
   Withdraw User From Event
================================ */

export async function withdrawFromEvent(eventId, uid) {

  await updateDoc(

    doc(db, "events", eventId),

    {

      registeredUsers: arrayRemove(uid)

    }

  );

}


/* ===============================
   Get User's Registered Events
================================ */

export async function getUserRegistrations(uid) {

  const snapshot = await getDocs(

    collection(db, "events")

  );


  const registeredEventIds = [];


  snapshot.docs.forEach((eventDoc) => {

    const eventData = eventDoc.data();


    if (

      eventData.registeredUsers &&

      eventData.registeredUsers.includes(uid)

    ) {

      registeredEventIds.push(eventDoc.id);

    }

  });


  return registeredEventIds;

}