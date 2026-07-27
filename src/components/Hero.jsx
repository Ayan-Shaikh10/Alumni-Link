import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import HeroImage from "../assets/images/Hero.svg";


function Hero() {

    const navigate = useNavigate();


    return (

        <section

            id="home"

            className="

                relative

                overflow-hidden

                min-h-[95vh]

                px-5

                sm:px-8

                lg:px-10

                py-5

                flex

                items-center

            "

        >

            {/* ========================================================= */}

            {/* BACKGROUND GLOWS */}

            {/* ========================================================= */}


            <div

                className="

                    absolute

                    w-72

                    h-72

                    sm:w-96

                    sm:h-96

                    bg-cyan-400

                    opacity-20

                    blur-[140px]

                    rounded-full

                    -top-24

                    -left-20

                    pointer-events-none

                "

            ></div>


            <div

                className="

                    absolute

                    w-64

                    h-64

                    sm:w-80

                    sm:h-80

                    bg-blue-500

                    opacity-20

                    blur-[120px]

                    rounded-full

                    bottom-0

                    right-0

                    pointer-events-none

                "

            ></div>


            {/* ========================================================= */}

            {/* HERO CONTENT */}

            {/* ========================================================= */}


            <div

                className="

                    relative

                    z-10

                    w-full

                    max-w-7xl

                    mx-auto

                    px-2

                    sm:px-4

                    lg:px-8

                    py-16

                    sm:py-20

                    lg:py-24

                "

            >

                <div

                    className="

                        grid

                        grid-cols-1

                        md:grid-cols-2

                        gap-14

                        lg:gap-20

                        items-center

                    "

                >

                    {/* ================================================= */}

                    {/* LEFT SIDE */}

                    {/* ================================================= */}


                    <div className="text-center md:text-left">


                        {/* EYEBROW */}

                        <p

                            className="

                                text-cyan-400

                                font-semibold

                                tracking-[0.25em]

                                uppercase

                                text-sm

                                sm:text-base

                                mb-7

                                sm:mb-10

                            "

                        >

                            Connect • Learn • Inspire

                        </p>


                        {/* MAIN HEADING */}

                        <h1

                            className="

                                text-4xl

                                sm:text-5xl

                                lg:text-6xl

                                xl:text-7xl

                                font-extrabold

                                leading-[1.1]

                                text-white

                            "

                        >

                            Connecting


                            <span className="text-cyan-400">

                                {" "}Students

                            </span>


                            <br />


                            with Alumni

                        </h1>


                        {/* DESCRIPTION */}

                        <p

                            className="

                                mt-7

                                sm:mt-8

                                text-slate-300

                                text-base

                                sm:text-lg

                                leading-7

                                sm:leading-8

                                max-w-2xl

                                mx-auto

                                md:mx-0

                            "

                        >

                            Alumni-Link helps students connect with alumni,

                            discover mentorship opportunities,

                            participate in events,

                            and build professional relationships for a successful career.

                        </p>


                        {/* ACTION BUTTONS */}

                        <div

                            className="

                                flex

                                flex-col

                                sm:flex-row

                                justify-center

                                md:justify-start

                                items-center

                                gap-4

                                sm:gap-6

                                mt-10

                                sm:mt-12

                            "

                        >

                            {/* JOIN NOW */}

                            <button

                                type="button"

                                onClick={() => navigate("/register")}

                                className="

                                    w-full

                                    sm:w-auto

                                    bg-cyan-400

                                    text-slate-950

                                    px-7

                                    py-3.5

                                    rounded-xl

                                    font-semibold

                                    hover:bg-cyan-300

                                    hover:scale-105

                                    transition-all

                                    duration-300

                                    shadow-lg

                                    shadow-cyan-400/10

                                "

                            >

                                Join Now

                            </button>


                            {/* EXPLORE */}

                            <button

                                type="button"

                                onClick={() => {

                                    document

                                        .getElementById("about")

                                        ?.scrollIntoView({

                                            behavior: "smooth"

                                        });

                                }}

                                className="

                                    w-full

                                    sm:w-auto

                                    border

                                    border-cyan-400

                                    text-cyan-400

                                    px-7

                                    py-3.5

                                    rounded-xl

                                    flex

                                    items-center

                                    justify-center

                                    gap-3

                                    font-semibold

                                    hover:bg-cyan-400

                                    hover:text-slate-950

                                    transition-all

                                    duration-300

                                "

                            >

                                Explore

                                <FaArrowRight />

                            </button>

                        </div>


                    </div>


                    {/* ================================================= */}

                    {/* RIGHT SIDE */}

                    {/* ================================================= */}


                    <div

                        className="

                            flex

                            justify-center

                            items-center

                            order-first

                            md:order-last

                        "

                    >

                        <img

                            src={HeroImage}

                            alt="Alumni Network"

                            className="

                                w-full

                                max-w-sm

                                sm:max-w-md

                                lg:max-w-lg

                                hover:scale-105

                                transition

                                duration-500

                                drop-shadow-[0_0_35px_rgba(34,211,238,0.12)]

                            "

                        />

                    </div>


                </div>

            </div>


        </section>

    );

}


export default Hero;