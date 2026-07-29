import {
  FaGraduationCap,
  FaUsers,
  FaHandshake,
  FaBullseye,
  FaUniversity,
  FaGlobe,
  FaArrowDown,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaCheckCircle
} from "react-icons/fa";

function PublicAbout() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-slate-950 overflow-hidden"
    >

      {/* ================= Background Glow ================= */}

      <div className="absolute w-[420px] h-[420px] bg-cyan-400/10 blur-[170px] rounded-full -top-40 -left-20"></div>

      <div className="absolute w-[420px] h-[420px] bg-blue-500/10 blur-[170px] rounded-full bottom-0 right-0"></div>

      {/* ================= Hero ================= */}

      <div className="max-w-7xl mx-auto px-8 pt-28 pb-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-semibold">

              <FaUniversity />

              About Our Community

            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold text-white leading-tight">

              Building

              <span className="text-cyan-400">

                {" "}Connections

              </span>

              <br />

              Beyond Graduation

            </h1>

            <p className="mt-8 text-slate-300 text-lg leading-9">

              Alumni-Link is a modern alumni networking platform created to
              strengthen the relationship between students, graduates,
              faculty members and industry professionals.

              <br /><br />

              Instead of ending relationships after graduation,
              we believe every graduating student should remain
              connected with their institution and become a guide
              for future generations.

            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <div className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-5">

                <h2 className="text-3xl font-bold text-cyan-400">

                  1000+

                </h2>

                <p className="text-slate-400 mt-2">

                  Alumni Network

                </p>

              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-5">

                <h2 className="text-3xl font-bold text-cyan-400">

                  150+

                </h2>

                <p className="text-slate-400 mt-2">

                  Mentorship Sessions

                </p>

              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-5">

                <h2 className="text-3xl font-bold text-cyan-400">

                  40+

                </h2>

                <p className="text-slate-400 mt-2">

                  Community Events

                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/70 backdrop-blur-lg p-10">

              <div className="space-y-10">

                <div className="flex items-start gap-5">

                  <div className="w-30 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center">

                    <FaUsers className="text-cyan-400 text-2xl" />

                  </div>

                  <div>

                    <h3 className="text-white text-xl font-bold">

                      Student Community

                    </h3>

                    <p className="text-slate-400 mt-2 leading-7">

                      Helping current students discover mentors,
                      internships and career opportunities through
                      alumni guidance.

                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-5">

                  <div className="w-30 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center">

                    <FaHandshake className="text-cyan-400 text-2xl" />

                  </div>

                  <div>

                    <h3 className="text-white text-xl font-bold">

                      Professional Networking

                    </h3>

                    <p className="text-slate-400 mt-2 leading-7">

                      Encouraging meaningful professional
                      relationships that continue even after
                      graduation.

                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-5">

                  <div className="w-30 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center">

                    <FaBullseye className="text-cyan-400 text-2xl" />

                  </div>

                  <div>

                    <h3 className="text-white text-xl font-bold">

                      Shared Vision

                    </h3>

                    <p className="text-slate-400 mt-2 leading-7">

                      Building one unified ecosystem where students,
                      alumni and institutions grow together.

                    </p>

                  </div>

                </div>

              </div>

            </div>

            <div className="flex justify-center mt-10 animate-bounce">

              <FaArrowDown className="text-cyan-400 text-2xl" />

            </div>

          </div>

        </div>

      </div>



      {/* ====================================================== */}
      {/* MISSION • VISION • VALUES */}
      {/* ====================================================== */}

      <div className="max-w-7xl mx-auto px-8 pb-28">

        <div className="text-center mb-20">

          <span className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-semibold">

            Our Purpose

          </span>

          <h2 className="mt-5 text-5xl font-bold text-white">

            More Than Just an Alumni Portal
          </h2>

          <p className="mt-6 text-slate-400 text-lg leading-8 max-w-4xl mx-auto">

            Alumni-Link is designed to become the bridge between students,
            graduates and institutions. Every feature is focused on creating
            meaningful relationships that continue long after graduation.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Mission */}

          <div className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400/40 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-8">

              <FaBullseye className="text-cyan-400 text-3xl" />

            </div>

            <h3 className="text-2xl font-bold text-white">

              Our Mission

            </h3>

            <p className="mt-5 text-slate-400 leading-8">

              To empower students by connecting them with experienced alumni,
              providing mentorship, career guidance, networking opportunities,
              internships and lifelong professional support.

            </p>

          </div>

          {/* Vision */}

          <div className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400/40 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-8">

              <FaGlobe className="text-cyan-400 text-3xl" />

            </div>

            <h3 className="text-2xl font-bold text-white">

              Our Vision

            </h3>

            <p className="mt-5 text-slate-400 leading-8">

              To create a future where every graduate remains connected with
              their institution and contributes to building stronger careers,
              stronger communities and stronger generations.

            </p>

          </div>

          {/* Values */}

          <div className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400/40 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-8">

              <FaHandshake className="text-cyan-400 text-3xl" />

            </div>

            <h3 className="text-2xl font-bold text-white">

              Our Values

            </h3>

            <p className="mt-5 text-slate-400 leading-8">

              Collaboration, trust, innovation and continuous learning are
              the foundation of our platform. Every interaction is designed
              to create lasting relationships.

            </p>

          </div>

        </div>

      </div>


      {/* ====================================================== */}
      {/* PLATFORM FEATURES */}
      {/* ====================================================== */}

      <div className="bg-slate-900/40 border-y border-slate-800">

        <div className="max-w-7xl mx-auto px-8 py-28">

          <div className="text-center mb-20">

            <span className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-semibold">

              Platform Highlights

            </span>

            <h2 className="mt-5 text-5xl font-bold text-white">

              Everything Needed To Build Connections
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Verified Alumni",
                description:
                  "Connect only with verified graduates from the institution."
              },
              {
                title: "Career Guidance",
                description:
                  "Receive mentorship and professional advice from industry experts."
              },
              {
                title: "Networking",
                description:
                  "Build meaningful professional relationships for your future."
              },
              {
                title: "Events",
                description:
                  "Participate in workshops, seminars and alumni meetups."
              },
              {
                title: "Community",
                description:
                  "Strengthen lifelong relationships beyond graduation."
              },
              {
                title: "Internships",
                description:
                  "Discover internship opportunities shared by alumni."
              },
              {
                title: "Collaboration",
                description:
                  "Collaborate with seniors and juniors on innovative ideas."
              },
              {
                title: "Future Ready",
                description:
                  "Preparing students for successful careers and lifelong learning."
              }
            ].map((feature, index) => (

              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-cyan-400/40 transition duration-300"
              >

                <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-6">

                  <FaGraduationCap className="text-cyan-400 text-2xl" />

                </div>

                <h3 className="text-white text-xl font-bold">

                  {feature.title}

                </h3>

                <p className="text-slate-400 mt-4 leading-7">

                  {feature.description}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>



      {/* ====================================================== */}
      {/* CONTACT + COLLEGE INFORMATION */}
      {/* ====================================================== */}

      <div className="max-w-7xl mx-auto px-8 py-28">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <div>

            <span className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-semibold">

              Contact

            </span>

            <h2 className="text-5xl font-bold text-white mt-5">

              Get In Touch
            </h2>

            <p className="text-slate-400 mt-8 leading-8 text-lg">

              This demo platform represents how a modern college alumni
              management system can connect students and graduates.
              Feel free to explore the platform and reach out through the
              information below.
            </p>

            <div className="space-y-7 mt-12">

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center">

                  <FaMapMarkerAlt className="text-cyan-400 text-xl" />

                </div>

                <div>

                  <h4 className="text-white font-semibold text-lg">

                    College Address

                  </h4>

                  <p className="text-slate-400 mt-2 leading-7">

                    ABC Institute of Technology
                    <br />
                    MG Road,
                    Mumbai,
                    Maharashtra - 400001,
                    India

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center">

                  <FaEnvelope className="text-cyan-400 text-xl" />

                </div>

                <div>

                  <h4 className="text-white font-semibold text-lg">

                    Email

                  </h4>

                  <a

                    href="mailto:pan373634@gmail.com"

                    className="text-cyan-400 hover:text-cyan-300 mt-2 inline-block"

                  >

                    pan373634@gmail.com

                  </a>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center">

                  <FaGithub className="text-cyan-400 text-xl" />

                </div>

                <div>

                  <h4 className="text-white font-semibold text-lg">

                    GitHub

                  </h4>

                  <a

                    href="https://github.com/Ayan-Shaikh10/"

                    target="_blank"

                    rel="noopener noreferrer"

                    className="text-cyan-400 hover:text-cyan-300 break-all mt-2 inline-block"

                  >

                    github.com/Ayan-Shaikh10

                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* Right */}

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 rounded-3xl p-10">

            <h3 className="text-3xl font-bold text-white">

              About This Project

            </h3>

            <p className="text-slate-400 mt-8 leading-8">

              Alumni-Link is a modern full-stack web application developed to
              demonstrate how colleges can digitally connect current students
              with alumni through mentorship, networking, events, messaging,
              and professional collaboration.

            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-emerald-400" />

                <span className="text-slate-300">

                  Firebase Authentication

                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-emerald-400" />

                <span className="text-slate-300">

                  Cloud Firestore Database

                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-emerald-400" />

                <span className="text-slate-300">

                  Responsive React + Tailwind UI

                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-emerald-400" />

                <span className="text-slate-300">

                  Alumni & Student Networking

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ====================================================== */}
      {/* FOOTER */}
      {/* ====================================================== */}

      <footer className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-8 py-10">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <div>

              <h3 className="text-white font-bold text-xl">

                Alumni<span className="text-cyan-400">-Link</span>

              </h3>

              <p className="text-slate-500 text-sm mt-2">

                Connecting Students with Alumni.
              </p>

            </div>

            <div className="text-center">

              <p className="text-slate-500 text-sm">

                © {new Date().getFullYear()} Alumni-Link
              </p>

              <p className="text-cyan-400 text-sm mt-1 font-medium">

                Developed by Ayan Shaikh

              </p>

            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 text-center">

            <p className="text-[11px] text-slate-600">

              This website is a demonstration project created solely for
              educational and portfolio purposes. The institution, address,
              and some displayed information are fictional and used only
              for showcasing the application's features.

            </p>

          </div>

        </div>

      </footer>

    </section>

    

  );

}

export default PublicAbout;