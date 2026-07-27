import {
  FaBriefcase,
  FaRocket,
  FaSearch,
  FaBuilding,
  FaUserTie,
  FaGraduationCap
} from "react-icons/fa";


function Jobs() {

  return (

    <div className="w-full min-h-[calc(100vh-12rem)] flex items-center justify-center">

      <div className="w-full max-w-3xl px-6">

        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900/80 shadow-2xl">

          {/* Decorative background glow */}

          <div className="absolute -top-32 -right-32 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl"></div>


          {/* Main Content */}

          <div className="relative z-10 px-8 sm:px-16 py-16 sm:py-20 text-center">


            {/* Main Icon */}

            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center shadow-[0_0_35px_rgba(34,211,238,0.12)]">

              <FaBriefcase className="text-cyan-400 text-4xl" />

            </div>


            {/* Badge */}

            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-semibold">

              <FaRocket className="text-xs" />

              Career & Opportunities

            </div>


            {/* Heading */}

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">

              Coming Soon

            </h1>


            {/* Description */}

            <p className="max-w-xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed">

              We are building a dedicated career space where students and alumni can discover job opportunities, internships, referrals, and professional opportunities from the community.

            </p>


            {/* Feature Preview */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">


              {/* Jobs */}

              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/70">

                <FaSearch className="text-cyan-400 text-xl mx-auto mb-3" />

                <p className="text-slate-300 text-sm font-medium">

                  Find Opportunities

                </p>

              </div>


              {/* Companies */}

              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/70">

                <FaBuilding className="text-cyan-400 text-xl mx-auto mb-3" />

                <p className="text-slate-300 text-sm font-medium">

                  Discover Companies

                </p>

              </div>


              {/* Professional Network */}

              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/70">

                <FaUserTie className="text-cyan-400 text-xl mx-auto mb-3" />

                <p className="text-slate-300 text-sm font-medium">

                  Grow Your Career

                </p>

              </div>


            </div>


            {/* Bottom Message */}

            <div className="mt-10 pt-6 border-t border-slate-800">

              <p className="text-slate-500 text-sm">

                Exciting career opportunities are coming to Alumni-Link 🚀

              </p>

            </div>


          </div>

        </div>

      </div>

    </div>

  );

}


export default Jobs;