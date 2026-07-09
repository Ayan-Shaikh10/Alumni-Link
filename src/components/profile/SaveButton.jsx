import { FaSave } from "react-icons/fa";

function SaveButton({

  handleSave,

  loading

}) {

  return (

    <section className="mt-12">

      <div className="bg-slate-900 border border-cyan-400/20 rounded-2xl p-8">

        {/* Information */}

        <div className="text-center mb-8">

          <h3 className="text-2xl font-bold text-white">

            Ready to Save?

          </h3>

          <p className="text-slate-400 mt-2">

            Your profile information will be securely saved and can be updated anytime.

          </p>

        </div>

        {/* Button */}

        <div className="flex justify-center">

          <button

            type="button"

            onClick={handleSave}

            disabled={loading}

            className="w-full md:w-[420px] bg-cyan-400 text-black py-4 rounded-xl font-bold text-lg hover:bg-cyan-300 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/20"

          >

            {

              loading

                ? "Saving..."

                : <>

                    <FaSave />

                    Save Changes

                  </>

            }

          </button>

        </div>

      </div>

    </section>

  );

}

export default SaveButton;