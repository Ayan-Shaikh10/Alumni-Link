import {
  FaUserGraduate,
  FaBuilding,
  FaGlobeAsia,
  FaHandshake
} from "react-icons/fa";

 // Replace later with alumni illustration if you have one.

function PublicAlumni() {

  return (

    <div className="bg-slate-950 text-white overflow-hidden">

      {/* ======================================================= */}
      {/* HERO SECTION */}
      {/* ======================================================= */}

      <section 
      
    id="alumni" 
      className="relative overflow-hidden">

        {/* Background Glow */}

        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[170px] rounded-full -left-32 -top-20"></div>

        <div className="absolute w-[450px] h-[450px] bg-blue-600/10 blur-[170px] rounded-full right-0 bottom-0"></div>

        <div className="max-w-7xl mx-auto px-8 pt-28 pb-32">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left */}

            <div>

              <p className="uppercase tracking-[0.35em] text-cyan-400 font-semibold mb-8">

                Alumni Network

              </p>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight">

                Meet The

                <span className="text-cyan-400">

                  {" "}Alumni{" "}

                </span>

                Who Continue

                <br />

                To Inspire

              </h1>

              <p className="text-slate-300 text-xl leading-9 mt-10 max-w-xl">

                Our alumni are building successful careers across
                the world while continuing to guide, mentor and
                support the next generation of students through
                Alumni-Link.

              </p>

              {/* Stats */}

              <div className="grid grid-cols-2 gap-8 mt-16">

                <div>

                  <h2 className="text-4xl font-black text-cyan-400">

                    300+

                  </h2>

                  <p className="text-slate-400 mt-2">

                    Alumni Network

                  </p>

                </div>

                <div>

                  <h2 className="text-4xl font-black text-cyan-400">

                    20+

                  </h2>

                  <p className="text-slate-400 mt-2">

                    Industries

                  </p>

                </div>

                <div>

                  <h2 className="text-4xl font-black text-cyan-400">

                    15+

                  </h2>

                  <p className="text-slate-400 mt-2">

                    Countries

                  </p>

                </div>

                <div>

                  <h2 className="text-4xl font-black text-cyan-400">

                    100%

                  </h2>

                  <p className="text-slate-400 mt-2">

                    Community Driven

                  </p>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="relative">

              <div className="w-full h-[420px] rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center">

    <FaUserGraduate className="text-cyan-400 text-8xl mb-8" />

    <h3 className="text-3xl font-bold text-white">

        Alumni Network

    </h3>

    <p className="text-slate-400 mt-4 text-center max-w-sm leading-8">

        Connecting graduates, mentoring students and building
        lifelong professional relationships.

    </p>

</div>

              {/* Floating Cards */}

              <div className="absolute top-5 left-0 bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 shadow-xl">

                <div className="flex items-center gap-3">

                  <FaBuilding className="text-cyan-400 text-xl" />

                  <div>

                    <h4 className="font-bold">

                      50+ Companies

                    </h4>

                    <p className="text-slate-400 text-sm">

                      Global Presence

                    </p>

                  </div>

                </div>

              </div>

              <div className="absolute bottom-6 right-0 bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 shadow-xl">

                <div className="flex items-center gap-3">

                  <FaHandshake className="text-cyan-400 text-xl" />

                  <div>

                    <h4 className="font-bold">

                      Mentorship

                    </h4>

                    <p className="text-slate-400 text-sm">

                      Lifelong Support

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================= */}
      {/* FEATURED ALUMNI */}
      {/* ======================================================= */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.35em] text-cyan-400 font-semibold mb-5">

              Featured Alumni

            </p>

            <h2 className="text-5xl font-black">

              Inspiring Success Stories

            </h2>

            <p className="text-slate-400 text-lg mt-6 max-w-3xl mx-auto leading-8">

              Our alumni are making meaningful contributions across industries,
              mentoring students, building innovative products and leading
              organizations around the world.

            </p>

          </div>


          {/* Featured Cards */}

          <div className="space-y-8">

            {/* Card 1 */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-300">

              <div className="grid lg:grid-cols-4 gap-8 items-center">

                <div className="flex justify-center">

                  <div className="w-32 h-32 rounded-full bg-cyan-400/10 border border-cyan-400 flex items-center justify-center">

                    <FaUserGraduate className="text-cyan-400 text-5xl"/>

                  </div>

                </div>

                <div className="lg:col-span-3">

                  <h3 className="text-3xl font-bold">

                    Abdul Rahman

                  </h3>

                  <p className="text-cyan-400 mt-2 font-semibold">

                    Senior Software Engineer • Google

                  </p>

                  <p className="text-slate-300 mt-6 leading-8">

                    "The guidance I received during my college journey shaped my
                    professional career. Today, I actively mentor students,
                    conduct technical sessions, and help fresh graduates prepare
                    for interviews."

                  </p>

                </div>

              </div>

            </div>


            {/* Card 2 */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-300">

              <div className="grid lg:grid-cols-4 gap-8 items-center">

                <div className="flex justify-center">

                  <div className="w-32 h-32 rounded-full bg-cyan-400/10 border border-cyan-400 flex items-center justify-center">

                    <FaUserGraduate className="text-cyan-400 text-5xl"/>

                  </div>

                </div>

                <div className="lg:col-span-3">

                  <h3 className="text-3xl font-bold">

                    Priya Sharma

                  </h3>

                  <p className="text-cyan-400 mt-2 font-semibold">

                    Cloud Engineer • Microsoft

                  </p>

                  <p className="text-slate-300 mt-6 leading-8">

                    "Alumni-Link creates a bridge between experienced
                    professionals and ambitious students. Sharing practical
                    industry knowledge is one of the best ways to give back to
                    our college community."

                  </p>

                </div>

              </div>

            </div>


            {/* Card 3 */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-300">

              <div className="grid lg:grid-cols-4 gap-8 items-center">

                <div className="flex justify-center">

                  <div className="w-32 h-32 rounded-full bg-cyan-400/10 border border-cyan-400 flex items-center justify-center">

                    <FaUserGraduate className="text-cyan-400 text-5xl"/>

                  </div>

                </div>

                <div className="lg:col-span-3">

                  <h3 className="text-3xl font-bold">

                    Aarav Mehta

                  </h3>

                  <p className="text-cyan-400 mt-2 font-semibold">

                    AI Researcher • NVIDIA

                  </p>

                  <p className="text-slate-300 mt-6 leading-8">

                    "Technology changes rapidly, but a strong alumni network
                    remains valuable throughout your career. Collaboration and
                    mentorship help every generation grow together."

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================= */}
      {/* INDUSTRIES */}
      {/* ======================================================= */}

      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.35em] text-cyan-400 font-semibold mb-5">

              Alumni Across Industries

            </p>

            <h2 className="text-5xl font-black">

              Building Careers Everywhere

            </h2>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">

            {[
              "Software Engineering",
              "Artificial Intelligence",
              "Cyber Security",
              "Cloud Computing",
              "Finance",
              "Healthcare",
              "Government",
              "Startups"
            ].map((industry) => (

              <div
                key={industry}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
              >

                <FaBuilding className="text-cyan-400 text-4xl mx-auto mb-6"/>

                <h3 className="font-semibold text-lg">

                  {industry}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ======================================================= */}
      {/* COMMUNITY IMPACT */}
      {/* ======================================================= */}

      <section className="py-32 bg-slate-900/40">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.35em] text-cyan-400 font-semibold mb-5">

              Community Impact

            </p>

            <h2 className="text-5xl font-black">

              Growing Together Every Year

            </h2>

            <p className="text-slate-400 text-lg mt-6 max-w-3xl mx-auto leading-8">

              Alumni-Link is more than just a directory.
              It is a community where knowledge, opportunities,
              mentorship and lifelong friendships continue long
              after graduation.

            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center hover:border-cyan-400 transition">

              <h2 className="text-6xl font-black text-cyan-400">

                300+

              </h2>

              <p className="text-slate-300 mt-4">

                Registered Alumni

              </p>

            </div>


            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center hover:border-cyan-400 transition">

              <h2 className="text-6xl font-black text-cyan-400">

                150+

              </h2>

              <p className="text-slate-300 mt-4">

                Students Guided

              </p>

            </div>


            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center hover:border-cyan-400 transition">

              <h2 className="text-6xl font-black text-cyan-400">

                90%

              </h2>

              <p className="text-slate-300 mt-4">

                Mentorship Success

              </p>

            </div>


            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center hover:border-cyan-400 transition">

              <h2 className="text-6xl font-black text-cyan-400">

                20+

              </h2>

              <p className="text-slate-300 mt-4">

                Industries

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================= */}
      {/* MENTORSHIP */}
      {/* ======================================================= */}

      <section className="py-32">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <p className="uppercase tracking-[0.35em] text-cyan-400 font-semibold mb-5">

                Mentorship

              </p>

              <h2 className="text-5xl font-black leading-tight">

                Helping Students

                <br />

                Build Better Careers

              </h2>

              <p className="text-slate-300 text-lg leading-9 mt-8">

                Alumni-Link encourages experienced graduates to
                support students through career guidance,
                technical mentoring, networking opportunities,
                resume reviews and interview preparation.

                Every interaction strengthens the bond between
                alumni and future graduates.

              </p>

            </div>


            <div className="space-y-6">

              {[
                "Career Guidance & Industry Insights",
                "Resume & Portfolio Reviews",
                "Mock Interviews",
                "Internship & Job Referrals",
                "Networking Opportunities",
                "Technical Mentorship"
              ].map((item) => (

                <div
                  key={item}
                  className="bg-slate-900 border border-slate-800 rounded-2xl px-8 py-6 hover:border-cyan-400 transition"
                >

                  <div className="flex items-center gap-5">

                    <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center">

                      <FaHandshake className="text-cyan-400"/>

                    </div>

                    <h3 className="text-lg font-semibold">

                      {item}

                    </h3>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================= */}
      {/* FINAL SECTION */}
      {/* ======================================================= */}

      <section className="pb-36">

        <div className="max-w-6xl mx-auto px-8">

          <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900 to-blue-500/10 p-16 text-center">

            <div className="absolute w-72 h-72 bg-cyan-400/10 blur-[130px] rounded-full -top-20 -left-20"></div>

            <div className="absolute w-72 h-72 bg-blue-500/10 blur-[130px] rounded-full -bottom-20 -right-20"></div>

            <div className="relative">

              <h2 className="text-5xl font-black leading-tight">

                Great Alumni Never Truly Leave

                <br />

                Their College.

              </h2>

              <p className="text-slate-300 text-xl leading-9 mt-10 max-w-4xl mx-auto">

                They continue inspiring future generations,
                sharing their experiences, creating opportunities,
                and strengthening the community that once shaped
                their own journey.

              </p>

              <div className="mt-16">

                <h3 className="text-cyan-400 text-3xl font-bold">

                  Together We Learn.

                </h3>

                <h3 className="text-cyan-400 text-3xl font-bold mt-3">

                  Together We Grow.

                </h3>

                <h3 className="text-cyan-400 text-3xl font-bold mt-3">

                  Together We Inspire.

                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}

export default PublicAlumni;