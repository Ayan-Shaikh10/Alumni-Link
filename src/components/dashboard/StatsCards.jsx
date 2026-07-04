function StatsCards() {

  const stats = [

    { title: "Alumni", value: "1,250+" },

    { title: "Events", value: "24" },

    { title: "Connections", value: "340" },

    { title: "Messages", value: "18" }

  ];

  return (

    <section className="max-w-7xl mx-auto px-8 mt-10">

      <div className="grid md:grid-cols-4 gap-6">

        {stats.map((card) => (

          <div
            key={card.title}
            className="bg-slate-900 border border-cyan-400/20 rounded-2xl p-6"
          >

            <p className="text-slate-400">

              {card.title}

            </p>

            <h2 className="text-3xl font-bold text-cyan-400 mt-2">

              {card.value}

            </h2>

          </div>

        ))}

      </div>

    </section>

  );

}

export default StatsCards;