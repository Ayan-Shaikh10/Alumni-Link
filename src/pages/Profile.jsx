import { useState, useEffect } from "react";
import { updateUser } from "../services/userService";
import { useAuth } from "../contex/AuthContext";

import ProfileHeader from "../components/profile/ProfileHeader";
import PersonalSection from "../components/profile/PersonalSection";
import EducationSection from "../components/profile/EducationSection";
import ProfessionalSection from "../components/profile/ProfessionalSelection";
import AboutSection from "../components/profile/AboutSection";
import SkillsSection from "../components/profile/SkillesSection";
import ExperienceSection from "../components/profile/ExperienceSection";
import SaveButton from "../components/profile/SaveButton";



function Profile() {

  const {
    currentUser,
     userData,
    setUserData
   } = useAuth();

  const [formData, setFormData] = useState({

    fullName: "",

    email: "",

    phone: "",

    city: "",

    degree:"",

    department:"",

    graduationYear:"",

    Profession:"",

    company:"",

    about:"",

    skills:"",

    experience:""

  });

  const [errors, setErrors] = useState({});

  useEffect(() => {

    if (userData) {

      setFormData({

        fullName: userData.fullName || "",

        email: userData.email || "",

        phone: userData.phone || "",

        city: userData.city || "",

        degree: userData.degree || "",

        department: userData.department || "",

        graduationYear: userData.graduationYear || "",

        Profession: userData.Profession || "",

        company: userData.company || "",

        about: userData.about || "",

        skills: userData.skills || "",

        experience: userData.experience || ""


      });

    }

  }, [userData]);

  const [loading, setLoading] = useState(false);

const handleSave = async () => {

  if (!currentUser) return;

  try {

    setLoading(true);

    await updateUser(currentUser.uid, formData);

    setUserData(formData);

    alert("Profile updated successfully!");

  } catch (error) {

    console.error(error);

    alert("Something went wrong while saving your profile.");

  } finally {

    setLoading(false);

  }

};

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({

      ...prev,

      [name]: value

    }));

  };

const currentYear = new Date().getFullYear();

const years = [];

for (let year = currentYear + 5; year >= 1990; year--) {

  years.push(year);

}

return (

  <div className="min-h-screen bg-slate-950">

    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">

      {/* Profile Header */}

      <ProfileHeader />

      {/* Personal */}

      <PersonalSection
        formData={formData}
        handleChange={handleChange}
        errors={errors}
      />

      {/* Education */}

      <EducationSection
        formData={formData}
        handleChange={handleChange}
        errors={errors}
        years={years}
      />

      {/* Professional */}

      <ProfessionalSection
        formData={formData}
        handleChange={handleChange}
        errors={errors}
      />

      {/* About */}

      <AboutSection
        formData={formData}
        handleChange={handleChange}
      />

      {/* Skills */}

      <SkillsSection
        formData={formData}
        handleChange={handleChange}
      />

      {/* Experience */}

      <ExperienceSection
        formData={formData}
        handleChange={handleChange}
      />

      {/* Save Button */}

      <div className="mt-12 mb-16">

        <SaveButton
          handleSave={handleSave}
          loading={loading}
        />

      </div>

    </div>

  </div>

);

}

export default Profile;