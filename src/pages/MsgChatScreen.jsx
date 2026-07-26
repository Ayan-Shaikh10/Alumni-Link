import {
  useEffect,
  useRef,
  useState
} from "react";

import {
  FaArrowLeft,
  FaUserGraduate,
  FaPaperPlane,
  FaSmile,
  FaPhone,
  FaVideo,
  FaEllipsisV,
  FaSignOutAlt,
  FaUserSlash,
  FaTrash,
  FaCheckDouble,
  FaComments
} from "react-icons/fa";

import { toast } from "react-toastify";

import {
  subscribeToMessages,
  sendMessage,
  markMessagesAsSeen,
  deleteChat
} from "../services/chatSwevice";


function MsgChatScreen({

  user,

  onBack,

  connection,

  currentUser

}) {


  const [message, setMessage] =
    useState("");


  const [messages, setMessages] =
    useState([]);


  const [isLoading, setIsLoading] =
    useState(true);


  const [isSending, setIsSending] =
    useState(false);


  const [isMenuOpen, setIsMenuOpen] =
    useState(false);


  const menuRef =
    useRef(null);


  const messagesEndRef =
    useRef(null);


  /*
  |--------------------------------------------------------------------------
  | REAL-TIME CHAT LISTENER
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    if (

      !currentUser?.uid ||

      !user?.id

    ) {

      return;

    }


    setIsLoading(true);


    const unsubscribe =
      subscribeToMessages(

        currentUser.uid,

        user.id,

        loadedMessages => {

          setMessages(
            loadedMessages
          );

          setIsLoading(
            false
          );

        },

        error => {

          console.error(
            "Failed to listen to messages:",
            error
          );

          toast.error(
            "Unable to load messages."
          );

          setIsLoading(
            false
          );

        }

      );


    markMessagesAsSeen(

      currentUser.uid,

      user.id

    ).catch(error => {

      console.error(
        "Failed to mark messages as seen:",
        error
      );

    });


    return () => {

      unsubscribe();

    };

  }, [

    currentUser?.uid,

    user?.id

  ]);


  /*
  |--------------------------------------------------------------------------
  | AUTO-SCROLL TO LATEST MESSAGE
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({

      behavior: "smooth"

    });

  }, [

    messages

  ]);


  /*
  |--------------------------------------------------------------------------
  | CLOSE MENU WHEN CLICKING OUTSIDE
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    function handleOutsideClick(
      event
    ) {

      if (

        menuRef.current &&

        !menuRef.current.contains(
          event.target
        )

      ) {

        setIsMenuOpen(
          false
        );

      }

    }


    document.addEventListener(

      "mousedown",

      handleOutsideClick

    );


    return () => {

      document.removeEventListener(

        "mousedown",

        handleOutsideClick

      );

    };

  }, []);


  /*
  |--------------------------------------------------------------------------
  | SEND MESSAGE
  |--------------------------------------------------------------------------
  */

  async function handleSendMessage(
    event
  ) {

    event.preventDefault();


    const trimmedMessage =
      message.trim();


    if (

      !trimmedMessage ||

      !currentUser?.uid ||

      !user?.id

    ) {

      return;

    }


    try {

      setIsSending(
        true
      );


      await sendMessage(

        currentUser.uid,

        user.id,

        trimmedMessage

      );


      setMessage("");


    } catch (error) {

      console.error(
        "Failed to send message:",
        error
      );

      toast.error(
        "Message could not be sent."
      );


    } finally {

      setIsSending(
        false
      );

    }

  }


  /*
  |--------------------------------------------------------------------------
  | TIME FORMATTER
  |--------------------------------------------------------------------------
  */

  function formatMessageTime(
    timestamp
  ) {

    if (

      !timestamp

    ) {

      return "...";

    }


    const date =
      timestamp.toDate

        ? timestamp.toDate()

        : new Date(
            timestamp
          );


    return date.toLocaleTimeString(

      [],

      {

        hour:
          "2-digit",

        minute:
          "2-digit"

      }

    );

  }


  /*
  |--------------------------------------------------------------------------
  | CALL SERVICES
  |--------------------------------------------------------------------------
  */

  function handleUnavailableService(
    serviceName
  ) {

    toast.info(

      `${serviceName} service is currently unavailable. 🚧`

    );

  }


  /*
  |--------------------------------------------------------------------------
  | EXIT CHAT
  |--------------------------------------------------------------------------
  */

  function handleExitChat() {

    setIsMenuOpen(
      false
    );


    toast.info(
      "You have exited the chat."
    );


    onBack();

  }


  /*
  |--------------------------------------------------------------------------
  | DISCONNECT CHAT
  |--------------------------------------------------------------------------
  */

  function handleDisconnectChat() {

    setIsMenuOpen(
      false
    );


    toast.info(

      "Chat disconnected. Your connection is still preserved."

    );


    onBack();

  }


  /*
  |--------------------------------------------------------------------------
  | DELETE CHAT
  |--------------------------------------------------------------------------
  */

  async function handleDeleteChat() {

    if (

      !currentUser?.uid ||

      !user?.id

    ) {

      return;

    }


    try {

      await deleteChat(

        currentUser.uid,

        user.id

      );


      setIsMenuOpen(
        false
      );


      toast.success(
        "Chat history deleted."
      );


    } catch (error) {

      console.error(
        "Failed to delete chat:",
        error
      );

      toast.error(
        "Failed to delete chat."
      );

    }

  }


  return (

    <div className="w-full h-[calc(100vh-12rem)] min-h-[600px] flex flex-col bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">


      {/* ============================================================ */}

      {/* CHAT HEADER */}

      {/* ============================================================ */}


      <div className="relative flex items-center justify-between gap-4 px-5 sm:px-8 py-5 sm:py-6 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800/90">


        <div className="flex items-center gap-4 min-w-0">


          <button

            onClick={onBack}

            type="button"

            className="w-11 h-11 flex-shrink-0 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 flex items-center justify-center hover:bg-cyan-400 hover:text-slate-950 hover:border-cyan-400 transition"

          >

            <FaArrowLeft />

          </button>


          <div className="relative flex-shrink-0">

            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/40 flex items-center justify-center">

              <FaUserGraduate className="text-cyan-400 text-2xl sm:text-3xl" />

            </div>


            <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-4 border-slate-900"></span>

          </div>


          <div className="min-w-0">

            <h2 className="text-white font-bold text-lg sm:text-xl truncate">

              {user?.fullName ||
                "Alumni Member"}

            </h2>


            <div className="flex items-center gap-2 mt-1">

              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>

              <p className="text-emerald-400 text-sm font-medium">

                Connected

              </p>

            </div>

          </div>

        </div>


        <div className="flex items-center gap-1 sm:gap-2">


          <button

            type="button"

            onClick={() =>

              handleUnavailableService(
                "Voice call"
              )

            }

            className="w-11 h-11 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition"

          >

            <FaPhone />

          </button>


          <button

            type="button"

            onClick={() =>

              handleUnavailableService(
                "Video call"
              )

            }

            className="w-11 h-11 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition"

          >

            <FaVideo />

          </button>


          <div
            ref={menuRef}
            className="relative"
          >

            <button

              type="button"

              onClick={() =>

                setIsMenuOpen(
                  previous =>
                    !previous
                )

              }

              className={`w-11 h-11 rounded-xl flex items-center justify-center transition ${

                isMenuOpen

                  ? "bg-cyan-400 text-slate-950"

                  : "text-slate-400 hover:text-cyan-400 hover:bg-slate-800"

              }`}

            >

              <FaEllipsisV />

            </button>


            {isMenuOpen && (

              <div className="absolute right-0 top-14 z-50 w-60 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">


                <button

                  type="button"

                  onClick={handleExitChat}

                  className="w-full flex items-center gap-3 px-4 py-4 text-left text-slate-300 hover:bg-slate-800 transition"

                >

                  <FaSignOutAlt className="text-cyan-400" />

                  <span>
                    Exit Chat
                  </span>

                </button>


                <button

                  type="button"

                  onClick={handleDisconnectChat}

                  className="w-full flex items-center gap-3 px-4 py-4 text-left text-slate-300 hover:bg-slate-800 transition"

                >

                  <FaUserSlash className="text-yellow-400" />

                  <span>
                    Disconnect Chat
                  </span>

                </button>


                <button

                  type="button"

                  onClick={handleDeleteChat}

                  className="w-full flex items-center gap-3 px-4 py-4 text-left text-slate-300 hover:bg-red-400/10 hover:text-red-400 transition"

                >

                  <FaTrash className="text-red-400" />

                  <span>
                    Delete Chat
                  </span>

                </button>

              </div>

            )}

          </div>

        </div>

      </div>


      {/* ============================================================ */}

      {/* MESSAGES */}

      {/* ============================================================ */}


      <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 space-y-5 bg-slate-950/30">


        {isLoading && (

          <div className="h-full flex items-center justify-center">

            <div className="text-center">

              <div className="w-10 h-10 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"></div>

              <p className="text-slate-500">

                Loading messages...

              </p>

            </div>

          </div>

        )}


        {!isLoading &&
          messages.length === 0 && (

            <div className="h-full flex items-center justify-center">

              <div className="text-center">

                <FaComments className="text-slate-700 text-4xl mx-auto mb-4" />

                <p className="text-slate-500">

                  No messages yet.

                </p>

                <p className="text-slate-600 text-sm mt-1">

                  Start a new conversation.

                </p>

              </div>

            </div>

          )}


        {!isLoading &&

          messages.map(

            item => {

              const isMine =

                item.senderId ===
                currentUser?.uid;


              const isSystem =

                item.sender ===
                "system";


              return (

                <div

                  key={
                    item.id
                  }

                  className={`flex ${

                    isMine

                      ? "justify-end"

                      : isSystem

                        ? "justify-center"

                        : "justify-start"

                  }`}

                >

                  {isSystem ? (

                    <div className="max-w-md text-center">

                      <p className="text-slate-500 text-xs bg-slate-800/60 px-5 py-2.5 rounded-full">

                        {item.text}

                      </p>

                    </div>

                  ) : (

                    <div

                      className={`max-w-[85%] sm:max-w-[65%] px-5 py-4 rounded-2xl ${

                        isMine

                          ? "bg-cyan-400 text-slate-950 rounded-br-md"

                          : "bg-slate-800 text-slate-200 rounded-bl-md"

                      }`}

                    >

                      <p className="text-sm sm:text-base leading-relaxed break-words">

                        {item.text}

                      </p>


                      <div className="flex items-center justify-end gap-2 mt-2">


                        <p

                          className={`text-[10px] ${

                            isMine

                              ? "text-slate-700"

                              : "text-slate-500"

                          }`}

                        >

                          {
                            formatMessageTime(
                              item.createdAt
                            )
                          }

                        </p>


                        {isMine && (

                          <FaCheckDouble

                            className={`text-xs ${

                              item.seen

                                ? "text-blue-600"

                                : "text-slate-700"

                            }`}

                          />

                        )}

                      </div>

                    </div>

                  )}

                </div>

              );

            }

          )}

        
      


        <div
          ref={messagesEndRef}
        />

      </div>


      {/* ============================================================ */}

      {/* COMPOSER */}

      {/* ============================================================ */}


      <form

        onSubmit={
          handleSendMessage
        }

        className="flex items-center gap-3 px-4 sm:px-6 py-5 border-t border-slate-800 bg-slate-900/95"

      >

        <button

          type="button"

          onClick={() =>

            toast.info(
              "Emoji picker is coming soon 😊"
            )

          }

          className="hidden sm:flex w-12 h-12 flex-shrink-0 rounded-xl items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition"

        >

          <FaSmile className="text-lg" />

        </button>


        <input

          type="text"

          value={
            message
          }

          onChange={event =>

            setMessage(
              event.target.value
            )

          }

          placeholder="Type a message..."

          disabled={
            isSending
          }

          className="flex-1 min-w-0 bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white text-base placeholder:text-slate-500 outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10 transition"

        />


        <button

          type="submit"

          disabled={

            !message.trim() ||
            isSending

          }

          className="w-14 h-14 flex-shrink-0 rounded-2xl bg-cyan-400 text-slate-950 flex items-center justify-center hover:bg-cyan-300 transition disabled:opacity-40 disabled:cursor-not-allowed"

        >

          <FaPaperPlane className="text-lg" />

        </button>

      </form>

    </div>

  );

}


export default MsgChatScreen;