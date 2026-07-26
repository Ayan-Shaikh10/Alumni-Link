import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const connectionsRef = collection(db, "connections");

export async function sendConnectionRequest(requesterId, receiverId) {

  const existingSentQuery = query(
    connectionsRef,
    where("requesterId", "==", requesterId),
    where("receiverId", "==", receiverId)
  );

  const existingReceivedQuery = query(
    connectionsRef,
    where("requesterId", "==", receiverId),
    where("receiverId", "==", requesterId)
  );

  const [
    existingSentSnapshot,
    existingReceivedSnapshot
  ] = await Promise.all([

    getDocs(existingSentQuery),

    getDocs(existingReceivedQuery)

  ]);

  const existingConnections = [

    ...existingSentSnapshot.docs,

    ...existingReceivedSnapshot.docs

  ];

  const activeConnection = existingConnections.find(

    (connectionDoc) => {

      const data = connectionDoc.data();

      return (

        data.status === "pending" ||

        data.status === "accepted"

      );

    }

  );

  if (activeConnection) {

    return {

      id: activeConnection.id,

      ...activeConnection.data()

    };

  }

  const connection = await addDoc(

    connectionsRef,

    {

      requesterId,

      receiverId,

      status: "pending",

      createdAt: serverTimestamp(),

      acceptedAt: null

    }

  );

  return {

    id: connection.id,

    requesterId,

    receiverId,

    status: "pending"

  };

}

export async function getConnectionBetweenUsers(

  firstUserId,

  secondUserId

) {

  const firstQuery = query(

    connectionsRef,

    where(

      "requesterId",

      "==",

      firstUserId

    ),

    where(

      "receiverId",

      "==",

      secondUserId

    )

  );

  const secondQuery = query(

    connectionsRef,

    where(

      "requesterId",

      "==",

      secondUserId

    ),

    where(

      "receiverId",

      "==",

      firstUserId

    )

  );

  const [

    firstSnapshot,

    secondSnapshot

  ] = await Promise.all([

    getDocs(firstQuery),

    getDocs(secondQuery)

  ]);

  const connectionDocs = [

    ...firstSnapshot.docs,

    ...secondSnapshot.docs

  ];

  if (connectionDocs.length === 0) {

    return null;

  }

  const connectionDoc = connectionDocs[0];

  return {

    id: connectionDoc.id,

    ...connectionDoc.data()

  };

}

export async function getUserConnections(uid) {

  const sentQuery = query(

    connectionsRef,

    where(

      "requesterId",

      "==",

      uid

    )

  );

  const receivedQuery = query(

    connectionsRef,

    where(

      "receiverId",

      "==",

      uid

    )

  );

  const [

    sentSnapshot,

    receivedSnapshot

  ] = await Promise.all([

    getDocs(sentQuery),

    getDocs(receivedQuery)

  ]);

  const connections = [

    ...sentSnapshot.docs,

    ...receivedSnapshot.docs

  ];

  return connections.map(

    (connectionDoc) => ({

      id: connectionDoc.id,

      ...connectionDoc.data()

    })

  );

}

export async function acceptConnectionRequest(

  connectionId

) {

  await updateDoc(

    doc(

      db,

      "connections",

      connectionId

    ),

    {

      status: "accepted",

      acceptedAt: serverTimestamp()

    }

  );

}

export async function withdrawConnectionRequest(

  connectionId

) {

  await updateDoc(

    doc(

      db,

      "connections",

      connectionId

    ),

    {

      status: "withdrawn"

    }

  );

}