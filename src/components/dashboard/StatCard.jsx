function StatCard({

  title,

  value,

  subtitle,

  icon,

  iconBg = "bg-cyan-500/20",

  iconColor = "text-cyan-400"

}) {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-400 text-sm">

            {title}

          </p>

          <h2 className="text-4xl font-bold text-white mt-2">

            {value}

          </h2>

          {subtitle && (

            <p className="text-green-400 text-sm mt-2">

              {subtitle}

            </p>

          )}

        </div>

        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${iconBg}`}>

          <div className={`text-3xl ${iconColor}`}>

            {icon}

          </div>

        </div>

      </div>

    </div>

  );

}

export default StatCard;