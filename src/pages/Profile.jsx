import { useState, useEffect } from "react";

import { useAuth } from "../contex/AuthContext";

import ProfileHeader from "../components/profile/ProfileHeader";
import PersonalSection from "../components/profile/PersonalSection";

function Profile() {

  const { userData } = useAuth();

  const [formData, setFormData] = useState({

    fullName: "",

    email: "",

    phone: "",

    city: ""

  });

  const [errors, setErrors] = useState({});

  useEffect(() => {

    if (userData) {

      setFormData({

        fullName: userData.fullName || "",

        email: userData.email || "",

        phone: userData.phone || "",

        city: userData.city || ""

      });

    }

  }, [userData]);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({

      ...prev,

      [name]: value

    }));

  };

  return (

    <div className="min-h-screen bg-slate-950">

      <div className="max-w-6xl mx-auto px-8 py-10">

        <ProfileHeader />

        <PersonalSection

          formData={formData}

          handleChange={handleChange}

          errors={errors}

        />

      </div>

    </div>

  );

}

export default Profile;