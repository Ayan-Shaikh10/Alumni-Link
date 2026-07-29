import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PublicEvents from "../components/publicPages/PublicEvents";
import PublicAlumni from "../components/publicPages/PublicAlumni";
import PublicAbout from "../components/publicPages/PublicAbout";

function Home(){

    return(

        <>

        <Hero/>
        <PublicEvents />
        <PublicAlumni />
        <PublicAbout />

        </>

    );

}

export default Home;