import { useNavigate } from "react-router-dom";
import Mountain from '../assets/mountain.jpg'
import Shape from '../assets/shape.jpg'
import { useRef } from "react";
import ai from "../assets/AI.png"
import Journal from "../assets/journal.png"
import Meditation from "../assets/meditation.png"
import Quiz from "../assets/quiz.png"
import Mood from "../assets/Mood.png"
import Community from "../assets/Community.png"

export default function Landing() {
  const featuresRef = useRef(null);
  const navigate = useNavigate();

  const handleScrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="min-h-screen bg-backg text-darkblue">
        <main className="hero-bg ">
          <section className="max-w-6xl px-6 mx-auto md:px-12 py-13">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-darkblue">
                Your journey to inner peace starts here
              </h1>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-darkblue">
                Welcome to your safe place for
                <span className="text-aquaGlow"> Mental Health</span>
              </h2>
              <p className="mt-6 text-base sm:text-lg text-center text-darkblue max-w-3xl mx-auto">
                MindEase provides guided meditations, mood tracking, and a supportive
                community to help you navigate life’s challenges with calm and clarity.
              </p>

              <div className="mt-12 pb-6 flex flex-wrap items-center justify-center gap-6 sm:gap-12">
                <button
                  onClick={() => navigate("/register")}
                  className="relative inline-flex px-6 sm:px-8 py-3 text-lg sm:text-xl font-semibold text-black border-[3px] border-darkblue bg-transparent overflow-hidden z-[1] cursor-pointer font-inherit 
                  before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#C54E9E] before:-translate-x-full before:transition-all before:duration-300 before:-z-[1] hover:before:translate-x-0"
                >
                  Sign up
                </button>

                <button
                  onClick={handleScrollToFeatures}
                  className="relative inline-flex px-6 sm:px-8 py-3 text-lg sm:text-xl font-semibold text-black border-[3px] border-darkblue bg-transparent overflow-hidden z-[1] cursor-pointer font-inherit 
                  before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#C54E9E] before:-translate-x-full before:transition-all before:duration-300 before:-z-[1] hover:before:translate-x-0"
                >
                  Explore Features
                </button>
              </div>
            </div>

            <div className="mt-12 text-center px-4 sm:px-0">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkblue">
                Everything you need for <span className="text-aquaGlow">wellness</span>
              </h3>
              <p className="mt-6 text-darkblue text-md max-w-xl mx-auto">
                Comprehensive tools and resources to support your mental health journey.
              </p>
            </div>
          </section>

          <section ref={featuresRef} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-14">

              <div className="bg-backg rounded-2xl shadow-md shadow-black/40 p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/70 border-2 border-darkblue border-opacity-100 hover:border-opacity-40">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
                  <img src={Meditation} alt="Guided Meditations" className="rounded-3xl w-16 h-16 sm:w-20 sm:h-20 shadow-lg object-contain" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-darkblue mb-2">Guided Meditations</h4>
                <p className="text-darkblue text-sm sm:text-base px-2 sm:px-4">
                  Calm your mind with guided sessions designed to reduce stress and increase focus.
                </p>
              </div>

              <div className="bg-backg rounded-2xl shadow-md shadow-black/40 p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/70 border-2 border-darkblue border-opacity-100 hover:border-opacity-40">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
                  <img src={Quiz} alt="Mental Wellness Check" className="rounded-3xl w-16 h-16 sm:w-20 sm:h-20 shadow-lg object-contain" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-darkblue mb-2">Mental Wellness Check</h4>
                <p className="text-darkblue text-sm sm:text-base px-2 sm:px-4">
                  A short assessment that suggests whether you're doing fine, need extra self-care, or may benefit from talking to someone.
                </p>
              </div>

              <div className="bg-backg rounded-2xl shadow-md shadow-black/40 p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/70 border-2 border-darkblue border-opacity-100 hover:border-opacity-40">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
                  <img src={Mood} alt="Mood Detection" className="rounded-3xl w-16 h-16 sm:w-20 sm:h-20 shadow-lg object-contain" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-darkblue mb-2">Mood Detection</h4>
                <p className="text-darkblue text-sm sm:text-base px-2 sm:px-4">
                  AI-powered mood tracking helps you identify emotional patterns and triggers.
                </p>
              </div>

              <div className="bg-backg rounded-2xl shadow-md shadow-black/40 p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/70 border-2 border-darkblue border-opacity-100 hover:border-opacity-40">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
                  <img src={Journal} alt="Daily Journal" className="rounded-3xl w-16 h-16 sm:w-20 sm:h-20 shadow-lg object-contain" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-darkblue mb-2">Daily Journal</h4>
                <p className="text-darkblue text-sm sm:text-base px-2 sm:px-4">
                  Reflect on your thoughts and track your emotional growth through daily entries
                </p>
              </div>

              <div className="bg-backg rounded-2xl shadow-md shadow-black/40 p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/70 border-2 border-darkblue border-opacity-100 hover:border-opacity-40">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
                  <img src={ai} alt="AI Companion" className="rounded-3xl w-16 h-16 sm:w-20 sm:h-20 shadow-lg object-contain" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-darkblue mb-2">AI Companion</h4>
                <p className="text-darkblue text-sm sm:text-base px-2 sm:px-4">
                  Chat with our AI-powered Therapist for real-time emotional support.
                </p>
              </div>

              <div className="bg-backg rounded-2xl shadow-md shadow-black/40 p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/70 border-2 border-darkblue border-opacity-100 hover:border-opacity-40">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
                  <img src={Community} alt="Community Space" className="rounded-3xl w-16 h-16 sm:w-20 sm:h-20 shadow-lg object-contain" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-darkblue mb-2">Community Space</h4>
                <p className="text-darkblue text-sm sm:text-base px-2 sm:px-4">
                  Connect with others, share your experiences, and grow together.
                </p>
              </div>
            </div>
          </section>
        </main>

        <section className="py-16 space-y-20 px-6 md:px-20">
          <div className="flex flex-col md:flex-row items-center px-4 md:px-20">
            <div className="md:w-1/2 px-4 md:px-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-relaxed">
                Your feelings are valid.<br /> Your journey is important.
              </h3>
              <span className="text-darkblue text-xl sm:text-3xl font-bold mb-3 block">
                Welcome to your
              </span>
              <span className="text-lightgreen text-xl sm:text-3xl font-bold mb-3 leading-relaxed block">
                SAFE SPACE.
              </span>
            </div>
            <div className="md:w-1/2 px-4 md:px-10 mt-8 md:mt-0 flex justify-center">
              <img
                src={Shape}
                alt="Meditation"
                className="rounded-4xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-lg object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center px-4 md:px-20">
            <div className="md:w-1/2 px-4 md:px-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-relaxed">
                Your trusted companion for <span className="text-[#5CB8A5]">Mental Wellbeing.</span>
                <span className="text-darkblue text-2xl sm:text-3xl md:text-4xl font-bold block mt-2">
                  Find peace, build resilience, and connect with a supportive community.
                </span>
              </h3>
            </div>
            <div className="md:w-1/2 px-4 md:px-10 mt-8 md:mt-0 flex justify-center">
              <img
                src={Mountain}
                alt="Nature Calm"
                className="rounded-4xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-lg object-contain"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
