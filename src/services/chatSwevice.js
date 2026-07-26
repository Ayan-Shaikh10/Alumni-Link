import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  doc,
  updateDoc,
  getDocs,
  writeBatch
} from "firebase/firestore";

import { db } from "../firebase/firebase";


// ============================================================
// CREATE A UNIQUE CHAT ID
// ============================================================

export function getChatId(userId1, userId2) {

  return [userId1, userId2]
    .sort()
    .join("_");

}


// ============================================================
// GET CHAT MESSAGES COLLECTION
// ============================================================

function getMessagesCollection(userId1, userId2) {

  const chatId = getChatId(
    userId1,
    userId2
  );

  return collection(
    db,
    "chats",
    chatId,
    "messages"
  );

}


// ============================================================
// REAL-TIME MESSAGE LISTENER
// ============================================================

export function subscribeToMessages(
  userId1,
  userId2,
  onMessages,
  onError
) {

  const messagesRef = getMessagesCollection(
    userId1,
    userId2
  );

  const messagesQuery = query(
    messagesRef,
    orderBy(
      "createdAt",
      "asc"
    )
  );

  return onSnapshot(

    messagesQuery,

    snapshot => {

      const messages = snapshot.docs.map(
        messageDoc => ({

          id: messageDoc.id,

          ...messageDoc.data()

        })
      );

      onMessages(messages);

    },

    error => {

      console.error(
        "Message listener error:",
        error
      );

      if (onError) {

        onError(error);

      }

    }

  );

}


// ============================================================
// SEND MESSAGE
// ============================================================

export async function sendMessage(
  senderId,
  receiverId,
  text
) {

  const messagesRef = getMessagesCollection(
    senderId,
    receiverId
  );

  await addDoc(

    messagesRef,

    {

      senderId,

      receiverId,

      text,

      createdAt: serverTimestamp(),

      seen: false,

      seenAt: null

    }

  );

}


// ============================================================
// MARK RECEIVED MESSAGES AS SEEN
// ============================================================

export async function markMessagesAsSeen(
  currentUserId,
  otherUserId
) {

  const messagesRef = getMessagesCollection(
    currentUserId,
    otherUserId
  );

  const messagesQuery = query(
    messagesRef,
    orderBy(
      "createdAt",
      "asc"
    )
  );

  const snapshot = await getDocs(
    messagesQuery
  );

  const batch = writeBatch(db);

  let hasChanges = false;

  snapshot.docs.forEach(

    messageDoc => {

      const message = messageDoc.data();

      if (

        message.receiverId === currentUserId &&

        message.seen === false

      ) {

        batch.update(

          doc(

            db,

            "chats",

            getChatId(

              currentUserId,

              otherUserId

            ),

            "messages",

            messageDoc.id

          ),

          {

            seen: true,

            seenAt: serverTimestamp()

          }

        );

        hasChanges = true;

      }

    }

  );

  if (hasChanges) {

    await batch.commit();

  }

}


// ============================================================
// DELETE ENTIRE CHAT
// ============================================================

export async function deleteChat(
  userId1,
  userId2
) {

  const messagesRef = getMessagesCollection(
    userId1,
    userId2
  );

  const snapshot = await getDocs(
    messagesRef
  );

  const batch = writeBatch(db);

  snapshot.docs.forEach(

    messageDoc => {

      batch.delete(
        messageDoc.ref
      );

    }

  );

  await batch.commit();

}