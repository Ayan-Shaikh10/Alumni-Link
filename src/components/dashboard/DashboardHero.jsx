

function DashboardHero({userData}) {

  return (

    <section className="max-w-7xl mx-auto px-8 pt-12">

      <div className="rounded-3xl bg-gradient-to-r from-cyan-500 to-sky-600 p-10">

        <div>
  <h1 className="text-5xl font-bold text-white">
    Welcome Back 👋
  </h1>

  <p className="text-5xl font-semibold text-white mt-2 ">
    {userData?.fullName}
  </p>
</div>

        <p className="text-cyan-100 mt-4 text-lg">

          Great to see you again. Let's reconnect with your alumni community.

        </p>

      </div>

    </section>

  );

}

export default DashboardHero;