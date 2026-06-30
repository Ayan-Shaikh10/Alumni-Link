import { FaArrowRight } from "react-icons/fa";
import HeroImage from "../assets/images/Hero.svg";

function Hero() {

    return (

        <section className="relative overflow-hidden px-10 py-5 main-h-[95vh]">

            {/* Background Glow */}

            <div className="absolute w-96 h-96 bg-cyan-400 opacity-20 blur-[140px] rounded-full -top-24 -left-20"></div>

            <div className="absolute w-80 h-80 bg-blue-500 opacity-20 blur-[120px] rounded-full bottom-0 right-0"></div>

            <div className="max-w-7xl mx-auto px-8 py-24">

                <div className="grid md:grid-cols-2 gap-30 items-center">

                    {/* Left Side */}

                    <div>

                        <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-10">

                            Connect • Learn • Inspire

                        </p>

                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight ">

                            Connecting

                            <span className="text-cyan-400">

                                {" "}Students

                            </span>

                            <br/>

                            with Alumni

                        </h1>

                        <p className="mt-8 text-slate-300 text-lg leading-8">

                            Alumni-Link helps students connect with alumni,
                            discover mentorship opportunities,
                            participate in events,
                            and build professional relationships for a successful career.

                        </p>

                        <div className="flex gap-10 mt-15">

                            <button className="bg-cyan-400 text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 transition">

                                Join Now

                            </button>

                            <button className="border border-cyan-400 px-7 py-3 rounded-xl flex items-center gap-2 hover:bg-cyan-400 hover:text-black transition">

                                Explore

                                <FaArrowRight/>

                            </button>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div className="flex justify-center">

                        <img

                            src={HeroImage}

                            alt="Alumni Network"

                            className="max-w-md max-w-lg hover:scale-105 transition duration-500"

                        />

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Hero;