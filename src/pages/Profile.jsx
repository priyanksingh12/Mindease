import React, { useState, useEffect } from "react";
import { FaRegEdit, FaSave, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Profile = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user")) || {};
  const userProfession = localStorage.getItem("profession") || "Not Set";

  const uid = storedUser?.id;

  const addActivity = (uid, text, meta = "") => {
    const key = `user-${uid}-activity`;
    const arr = JSON.parse(localStorage.getItem(key) || "[]");
    arr.unshift({ text, meta, ts: Date.now() });
    if (arr.length > 20) arr.length = 20;
    localStorage.setItem(key, JSON.stringify(arr));
  };

  const [profileData, setProfileData] = useState({
    fullName: storedUser.name || storedUser.fullName || "",
    gender: storedUser.gender || "",
    age: storedUser.age || "",
    phone: storedUser.phone || "",
    email: storedUser.email || "",
    profession: userProfession,
  });
  const [isEditing, setIsEditing] = useState(false);
 const [phoneError, setPhoneError] = useState("");
const [ageError, setAgeError] = useState("");


  const profilePhoto =
    storedUser.picture ||
    storedUser.photoURL ||
    storedUser.image ||
    storedUser.photo ||
    "";

  const validateIndianMobile = (num) => /^[6-9]\d{9}$/.test(num);



  

  const resetProfileData = () => {
    setProfileData({
      fullName: storedUser.name || storedUser.fullName || "",
      gender: storedUser.gender || "",
      age: storedUser.age || "",
      phone: storedUser.phone || "",
      email: storedUser.email || "",
      profession: userProfession,
    });
    setPhoneError("");
  };

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleAgeChange = (e) => {
  const value = e.target.value;

  // Allow empty while typing
  if (value === "") {
    setAgeError("");
    setProfileData({ ...profileData, age: "" });
    return;
  }

  const num = Number(value);

  if (Number.isNaN(num) || num <= 0) {
    setAgeError("Please enter a valid age");
  } else if (num > 100) {
    setAgeError("Age cannot be more than 100");
  } else {
    setAgeError("");
    setProfileData({ ...profileData, age: num });
  }
};

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setProfileData({ ...profileData, phone: value });
      if (value.length === 10) {
        setPhoneError(validateIndianMobile(value) ? "" : "Enter a valid Indian mobile number (starts with 6-9)");
      } else {
        setPhoneError("");
      }
    }
  };

  const handleSave = () => {
    if (phoneError) {
      alert("Please fix input errors before saving.");
      return;
    }
    localStorage.setItem("user", JSON.stringify(profileData));
    localStorage.setItem("profession", profileData.profession);
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("profession");
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    if (uid) addActivity(uid, "Opened Profile");
  }, [uid]);

  useEffect(() => {
    const prof = localStorage.getItem("profession") || "Not Set";
    setProfileData((prev) => ({ ...prev, profession: prof }));
  }, []);

  return (
  <div className="relative min-h-screen flex flex-col px-4 sm:px-6 md:px-10 lg:px-20 bg-gradient-to-br from-sky-50 via-yellow-50 to-orange-100
">
      

      <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-b from-blue-100 to-transparent hidden sm:block opacity-80"></div>
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-b from-purple-100 to-transparent hidden sm:block opacity-80"></div>

      <div className="relative z-10 w-full max-w-5xl bg-backg sm:p-10 rounded-lg shadow-xl my-10 mx-auto">

        <div className="flex items-center justify-center mb-4">
  <button
    onClick={() => navigate("/dashboard")} 
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full
               bg-white/80 text-[#1F2933] text-2xl font-medium shadow-sm
               hover:bg-white hover:shadow-md transition"
  >
    <FaHome size={40} />
   <p> Dashboard </p>
  </button>
</div>

        <h1 className="text-3xl font-bold text-black mb-6 text-center sm:text-left">My Profile</h1>

        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 rounded-lg p-6 sm:p-10 flex flex-col sm:flex-row justify-around items-center gap-6">
          <div className="flex items-center gap-4">
            {profilePhoto ? (
              <img src={profilePhoto} alt="profile" className="w-24 h-24 rounded-full object-cover" />
            ) : (
              <FaUser size={90} className="bg-lightgreen text-white rounded-full p-3" />
            )}
            <div className="text-center sm:text-left leading-relaxed max-w-xs sm:max-w-sm">
              <h2 className="text-2xl font-semibold truncate">{profileData.fullName}</h2>
              <p className="text-gray-600 break-words">{profileData.email}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                if (isEditing) {
                  resetProfileData();
                  setIsEditing(false);
                } else {
                  setIsEditing(true);
                }
              }}
              className="bg-aquaGlow text-white px-5 py-4 rounded-full flex items-center gap-2 hover:bg-lightgreen transition text-xl whitespace-nowrap"
            >
              {isEditing ? "Cancel" : "Edit"} <FaRegEdit size={20} />
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition whitespace-nowrap"
            >
              <FaSignOutAlt size={20} />
            </button>
          </div>
        </div>

        <div
          className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 rounded-lg shadow-md px-6 py-8 mt-8"
          style={{ minHeight: "400px" }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-3xl font-bold text-black mb-5 flex-1 min-w-0">Personal Information</h2>
            {isEditing && (
              <button
                onClick={handleSave}
                className="bg-lightgreen text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-aquaGlow transition whitespace-nowrap"
              >
                Save <FaSave size={16} />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 text-xl font-semibold">Full Name</p>
              <p className="font-medium text-xl truncate">{profileData.fullName}</p>
            </div>

            <div>
              <p className="text-gray-600 text-xl font-semibold">Profession</p>
              <p className="font-medium text-xl truncate">{profileData.profession}</p>
            </div>

            <div>
              <p className="text-gray-600 font-semibold text-xl">Gender</p>
              {isEditing ? (
                <select
                  name="gender"
                  value={profileData.gender}
                  onChange={handleChange}
                  className="border p-2 rounded w-full text-xl"
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              ) : (
                <p className="font-medium text-xl truncate">{profileData.gender}</p>
              )}
            </div>

            <div>
              <p className="text-gray-600 text-xl font-semibold">Phone No</p>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    name="phone"
                    value={profileData.phone}
                    onChange={handlePhoneChange}
                    maxLength={10}
                    className={`border p-2 rounded w-full text-xl ${phoneError ? "border-red-500" : ""}`}
                  />
                  {phoneError && <p className="text-red-600 mt-1 text-lg">{phoneError}</p>}
                </>
              ) : (
                <p className="font-medium truncate">{profileData.phone}</p>
              )}
            </div>

          <div>
  <p className="text-gray-600 text-xl font-semibold">Age</p>
  {isEditing ? (
    <>
      <input
        type="number"
        name="age"
        value={profileData.age}
        onChange={handleAgeChange}
        className={`border p-2 rounded w-full text-xl ${
          ageError ? "border-red-500" : ""
        }`}
      />
      {ageError && <p className="text-red-600 mt-1 text-lg">{ageError}</p>}
    </>
  ) : (
    <p className="font-medium text-xl">{profileData.age}</p>
  )}
</div>


            <div>
              <p className="text-gray-600 text-xl font-semibold">Email</p>
              <p className="font-medium text-xl break-words">{profileData.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Profile;
