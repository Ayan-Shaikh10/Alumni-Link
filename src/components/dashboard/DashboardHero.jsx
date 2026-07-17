import heroBanner from "../../assets/dashboard/hero-banner.jpg";

function DashboardHero({ userData }) {
  return (
    <section className="max-w-7xl mx-auto px-8 pt-12">

      {/* Gradient Border */}
      <div
        className="
          rounded-3xl
          p-[3px]
          bg-gradient-to-br
          from-cyan-400
          via-sky-500
          to-purple-500
          shadow-[0_0_40px_rgba(34,211,238,0.22)]
        "
      >

        {/* Hero Card */}
        <div
          className="rounded-[22px] overflow-hidden bg-slate-950"
          style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: "100%",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        >

          {/* Overlay */}
          <div className="bg-slate-950/20 p-10 md:p-12">

            <div className="max-w-xl">

              <h1 className="text-5xl font-bold text-white leading-tight">
                Welcome Back 👋
              </h1>

              <p className="text-5xl font-semibold text-white mt-2">
                {userData?.fullName}
              </p>

              <p className="text-cyan-100 mt-6 text-lg leading-8">
                Great to see you again.
                <br />
                Let's continue building meaningful connections.
              </p>

              <button
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-2xl
                  border
                  border-cyan-300/40
                  bg-slate-900/30
                  backdrop-blur-md
                  text-white
                  font-semibold
                  hover:bg-cyan-500/20
                  hover:border-cyan-300
                  hover:scale-[1.03]
                  transition-all
                  duration-300
                "
              >
                View My Profile
                <span className="text-xl">➜</span>
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardHero;