import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaUsers,
  FaLaptopCode,
  FaBriefcase,
  FaHandshake,
  FaMicrophone,
  FaLightbulb
} from "react-icons/fa";

const featuredEvent = {
  title: "Annual Alumni Networking Summit 2026",
  date: "18 August 2026",
  location: "Mumbai University Convention Hall",
  description:
    "Meet experienced alumni from leading companies, participate in mentorship sessions, career discussions, startup networking, and exclusive industry panels designed to help students build successful careers.",
  image:
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200"
};

const upcomingEvents = [
  {
    id: 1,
    title: "AI & Machine Learning Workshop",
    date: "22 Aug 2026",
    location: "Seminar Hall",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800"
  },
  {
    id: 2,
    title: "Resume Review Drive",
    date: "30 Aug 2026",
    location: "Placement Cell",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800"
  },
  {
    id: 3,
    title: "Startup Founder Meetup",
    date: "05 Sep 2026",
    location: "Innovation Hub",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
  },
  {
    id: 4,
    title: "Hackathon 2026",
    date: "18 Sep 2026",
    location: "Computer Lab",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
  },
  {
    id: 5,
    title: "Career Fair",
    date: "25 Sep 2026",
    location: "Main Campus",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800"
  },
  {
    id: 6,
    title: "Industry Leadership Talk",
    date: "10 Oct 2026",
    location: "Auditorium",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800"
  }
];

const stats = [
  {
    number: "100+",
    title: "Events Conducted"
  },
  {
    number: "8,000+",
    title: "Participants"
  },
  {
    number: "500+",
    title: "Industry Experts"
  },
  {
    number: "50+",
    title: "Partner Companies"
  }
];

const categories = [
  {
    icon: <FaLaptopCode />,
    title: "Technical Workshops",
    desc: "Hands-on learning sessions with industry professionals."
  },
  {
    icon: <FaBriefcase />,
    title: "Career Development",
    desc: "Resume reviews, interview preparation and placement drives."
  },
  {
    icon: <FaHandshake />,
    title: "Networking",
    desc: "Connect directly with successful alumni and recruiters."
  },
  {
    icon: <FaMicrophone />,
    title: "Guest Lectures",
    desc: "Inspiring talks from experienced professionals."
  },
  {
    icon: <FaUsers />,
    title: "Community Meetups",
    desc: "Build meaningful relationships within the alumni network."
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation Events",
    desc: "Hackathons, startup competitions and innovation challenges."
  }
];

function PublicEvents() {
  return (
    <div
    className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}

      <div className="absolute w-[500px] h-[500px] bg-cyan-400/10 blur-[180px] rounded-full -top-40 -left-20"></div>

      <div className="absolute w-[450px] h-[450px] bg-blue-500/10 blur-[170px] rounded-full bottom-0 right-0"></div>

      {/* HERO */}

      <section
      
    id="events" 
      className="relative max-w-7xl mx-auto px-8 pt-24 pb-32">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="inline-block px-5 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-semibold tracking-wide">

              COMMUNITY EVENTS

            </span>

            <h1 className="text-5xl lg:text-6xl font-black leading-tight mt-8">

              Learn.

              <span className="text-cyan-400">

                {" "}Connect.

              </span>

              <br />

              Grow Together.

            </h1>

            <p className="text-slate-400 text-lg leading-8 mt-8 max-w-xl">

              Alumni-Link regularly organizes networking sessions,
              technical workshops, alumni talks, career fairs,
              mentorship programs and community events that help students
              build strong professional connections and accelerate
              their careers.

            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <button className="bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-300 transition"
              onClick={()=>
                document.getElementById("event-section")?.scrollIntoView({behavior:"smooth"})
              }>

                Explore Events

              </button>

              <button className="border border-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-400 hover:text-slate-950 transition flex items-center gap-3"
              onClick={()=>
                document.getElementById("why-attend")?.scrollIntoView({behavior:"smooth"})
              }>

                Learn More

                <FaArrowRight />

              </button>

              

            </div>

          </div>

          {/* Featured Card */}

          <div>

            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="h-80 w-full object-cover"
              />

              <div className="p-8">

                <span className="text-cyan-400 text-sm font-semibold">

                  FEATURED EVENT

                </span>

                <h2 className="text-3xl font-bold mt-3">

                  {featuredEvent.title}

                </h2>

                <div className="flex items-center gap-6 mt-6 text-slate-400">

                  <span className="flex items-center gap-2">

                    <FaCalendarAlt />

                    {featuredEvent.date}

                  </span>

                  <span className="flex items-center gap-2">

                    <FaMapMarkerAlt />

                    {featuredEvent.location}

                  </span>

                </div>

                <p className="text-slate-400 leading-8 mt-6">

                  {featuredEvent.description}

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* COMMUNITY STATS */}
      {/* ====================================================== */}

      <section className="relative max-w-7xl mx-auto px-8 pb-28">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (

            <div
              key={index}
              className="
                bg-slate-900/80
                border
                border-slate-800
                rounded-3xl
                p-8
                text-center
                hover:border-cyan-400/40
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <h2 className="text-5xl font-black text-cyan-400">

                {item.number}

              </h2>

              <p className="text-slate-400 mt-4">

                {item.title}

              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ====================================================== */}
      {/* UPCOMING EVENTS */}
      {/* ====================================================== */}

      <section 
      id="event-section"
      className="max-w-7xl mx-auto px-8 pb-32">

        <div className="text-center mb-20">

          <span className="text-cyan-400 font-semibold tracking-widest uppercase">

            What's Happening

          </span>

          <h2 className="text-5xl font-black mt-5">

            Upcoming Events

          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg leading-8">

            Participate in engaging workshops, alumni networking
            sessions, hackathons and career development events
            specially designed for students and graduates.

          </p>

        </div>


        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {upcomingEvents.map((event) => (

            <div
              key={event.id}
              className="
                group
                overflow-hidden
                rounded-3xl
                bg-slate-900
                border
                border-slate-800
                hover:border-cyan-400/40
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <div className="overflow-hidden">

                <img
                  src={event.image}
                  alt={event.title}
                  className="
                    w-full
                    h-60
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-700
                  "
                />

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold mb-5">

                  {event.title}

                </h3>

                <div className="space-y-4">

                  <div className="flex items-center gap-3 text-cyan-400">

                    <FaCalendarAlt />

                    <span>

                      {event.date}

                    </span>

                  </div>

                  <div className="flex items-center gap-3 text-slate-400">

                    <FaMapMarkerAlt />

                    <span>

                      {event.location}

                    </span>

                  </div>

                </div>

               

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ====================================================== */}
      {/* EVENT CATEGORIES */}
      {/* ====================================================== */}

      <section className="bg-slate-900/40 border-y border-slate-800 py-28">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-20">

            <span className="text-cyan-400 uppercase tracking-widest font-semibold">

              Explore

            </span>

            <h2 className="text-5xl font-black mt-5">

              Event Categories

            </h2>

            <p className="text-slate-400 mt-6 max-w-3xl mx-auto leading-8">

              Every event is carefully planned to improve technical
              knowledge, communication skills, networking opportunities
              and career growth.

            </p>

          </div>


          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {categories.map((category, index) => (

              <div
                key={index}
                className="
                  rounded-3xl
                  bg-slate-900
                  border
                  border-slate-800
                  p-8
                  hover:border-cyan-400/40
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-cyan-400/10
                    text-cyan-400
                    flex
                    items-center
                    justify-center
                    text-2xl
                    mb-7
                  "
                >

                  {category.icon}

                </div>

                <h3 className="text-2xl font-bold mb-5">

                  {category.title}

                </h3>

                <p className="text-slate-400 leading-8">

                  {category.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ====================================================== */}
      {/* WHY ATTEND */}
      {/* ====================================================== */}

      <section 
      id="why-attend"
      className="max-w-7xl mx-auto px-8 py-32">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="text-cyan-400 uppercase tracking-widest font-semibold">

              Why Participate

            </span>

            <h2 className="text-5xl font-black mt-6">

              Every Event Opens
              <span className="text-cyan-400">
                {" "}New Opportunities
              </span>

            </h2>

            <p className="text-slate-400 leading-8 text-lg mt-8">

              Alumni-Link events are designed to bridge the gap between
              students and industry professionals. Whether you're seeking
              career guidance, internships, mentorship or networking,
              every event helps you move one step closer to your goals.

            </p>

            <div className="mt-12 space-y-6">

              {[
                "Meet experienced alumni from top companies.",
                "Participate in hands-on technical workshops.",
                "Receive career guidance and mentorship.",
                "Build meaningful professional relationships.",
                "Discover internship and placement opportunities."
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <div className="w-10 h-10 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-bold">

                    ✓

                  </div>

                  <p className="text-slate-300 text-lg">

                    {item}

                  </p>

                </div>

              ))}

            </div>

          </div>


          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

            <h3 className="text-3xl font-bold mb-10">

              Community Impact

            </h3>

            <div className="space-y-8">

              <div>

                <div className="flex justify-between mb-3">

                  <span>Student Participation</span>

                  <span>95%</span>

                </div>

                <div className="h-3 rounded-full bg-slate-800">

                  <div className="h-3 rounded-full bg-cyan-400 w-[95%]"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between mb-3">

                  <span>Networking Success</span>

                  <span>90%</span>

                </div>

                <div className="h-3 rounded-full bg-slate-800">

                  <div className="h-3 rounded-full bg-cyan-400 w-[90%]"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between mb-3">

                  <span>Career Guidance</span>

                  <span>98%</span>

                </div>

                <div className="h-3 rounded-full bg-slate-800">

                  <div className="h-3 rounded-full bg-cyan-400 w-[98%]"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================== */}
      {/* TESTIMONIALS */}
      {/* ====================================================== */}

      <section className="bg-slate-900/40 border-y border-slate-800 py-32">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-20">

            <span className="text-cyan-400 uppercase tracking-widest">

              Student Stories

            </span>

            <h2 className="text-5xl font-black mt-6">

              What Students Say

            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {[
              {
                name: "Rahul Sharma",
                text: "The networking event helped me connect with alumni working at Microsoft. Their guidance completely changed my career preparation."
              },
              {
                name: "Priya Patel",
                text: "The resume workshop and mock interviews boosted my confidence before campus placements."
              },
              {
                name: "Aman Khan",
                text: "Thanks to Alumni-Link events, I found an internship through an alumnus working in the software industry."
              }
            ].map((item, index) => (

              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-300"
              >

                <div className="text-cyan-400 text-5xl mb-6">

                  “

                </div>

                <p className="text-slate-300 leading-8">

                  {item.text}

                </p>

                <div className="mt-8">

                  <h4 className="font-bold text-xl">

                    {item.name}

                  </h4>

                  <p className="text-cyan-400">

                    Alumni-Link Student

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ====================================================== */}
{/* COMMUNITY CTA */}
{/* ====================================================== */}

<section className="max-w-7xl mx-auto px-8 py-32">

  <div className="rounded-[40px] overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 px-12 py-24 text-center">

    <p className="uppercase tracking-[0.35em] text-slate-900 font-bold">

      Alumni-Link Community

    </p>

    <h2 className="text-5xl font-black text-slate-950 mt-6">

      One Community.

      <br />

      Endless Opportunities.

    </h2>

    <p className="max-w-4xl mx-auto mt-10 text-slate-900 text-xl leading-9">

      Alumni-Link is more than an event platform.

      It is a growing professional ecosystem where students,
      alumni, mentors and recruiters come together to
      exchange knowledge, build meaningful relationships,
      discover career opportunities and strengthen the
      lifelong connection with their institution.

    </p>

    <div className="grid md:grid-cols-3 gap-10 mt-20">

      <div>

        <h3 className="text-4xl font-black text-slate-950">

          200+

        </h3>

        <p className="mt-3 text-slate-900">

          Alumni Connected

        </p>

      </div>

      <div>

        <h3 className="text-4xl font-black text-slate-950">

          50+

        </h3>

        <p className="mt-3 text-slate-900">

          Successful Events

        </p>

      </div>

      <div>

        <h3 className="text-4xl font-black text-slate-950">

          100%

        </h3>

        <p className="mt-3 text-slate-900">

          Student Focused Platform

        </p>

      </div>

    </div>

    <div className="mt-20 max-w-3xl mx-auto">

      <p className="text-slate-900 leading-8">

        Together we create an environment where every student
        has access to guidance, every alumnus has the opportunity
        to give back, and every success story inspires the next generation.

      </p>

    </div>

  </div>

</section>

    </div>
  );
}

export default PublicEvents;