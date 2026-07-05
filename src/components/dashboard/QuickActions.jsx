import { useNavigate } from "react-router-dom";

import {
  FaUserEdit,
  FaUsers,
  FaCalendarAlt,
  FaPlusCircle
} from "react-icons/fa";

function QuickActions() {

  const navigate = useNavigate();

  const actions = [

    {
      title: "Edit Profile",
      icon: <FaUserEdit className="text-4xl text-cyan-400" />,
      path: "/profile"
    },

    {
      title: "Find Alumni",
      icon: <FaUsers className="text-4xl text-cyan-400" />,
      path: "/directory"
    },

    {
      title: "Browse Events",
      icon: <FaCalendarAlt className="text-4xl text-cyan-400" />,
      path: "/events"
    },

    {
      title: "Create Post",
      icon: <FaPlusCircle className="text-4xl text-cyan-400" />,
      path: "#"
    }

  ];

  return (

    <section className="max-w-7xl mx-auto px-8 mt-10">

      <h2 className="text-3xl font-bold text-white mb-8">

        Quick Actions

      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {actions.map((action) => (

          <button
            key={action.title}
            onClick={() => {

              if (action.path !== "#") {

                navigate(action.path);

              }

            }}
            className="bg-slate-900 border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300"
          >

            <div className="flex flex-col items-center">

              {action.icon}

              <h3 className="text-white font-semibold text-xl mt-5">

                {action.title}

              </h3>

            </div>

          </button>

        ))}

      </div>

    </section>

  );

}

export default QuickActions;