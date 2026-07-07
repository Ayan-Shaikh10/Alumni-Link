function InputField({

  label,
  icon,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error

}) {

  return (

    <div className="mb-6">

      <label className="block text-slate-300 mb-2">

        {label}

      </label>

      <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700 focus-within:border-cyan-400 transition">

        <div className="mx-4 text-slate-400">

          {icon}

        </div>

        <input

          type={type}

          name={name}

          value={value}

          onChange={onChange}

          placeholder={placeholder}

          className="w-full bg-transparent outline-none py-4 text-white placeholder:text-slate-500"

        />

      </div>

      {

        error && (

          <p className="text-red-400 text-sm mt-2">

            {error}

          </p>

        )

      }

    </div>

  );

}

export default InputField;