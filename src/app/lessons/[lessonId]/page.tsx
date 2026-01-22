import Link from "next/link";
import { notFound } from "next/navigation";

//defining thje lessons data:

const lessonsData = [
  {
    id: "1",
    name: "Conversational Lessons",
    price: "28$",
    description: "Practice speaking through a variety of topics",
    details:
      "Focus on fluency, pronunciation, and colloquial expressions. Ideal for students who want to travel or socialize.",
    features: ["50 min lessons", "Vocabulary lists", "Audio recordings"],
  },
  {
    id: "2",
    name: "General Lessons",
    price: "30$",
    description: "Cover speaking, grammar and vocabulary.",
    details:
      "A structured approach to learning the language foundations. We cover all four skills: reading, writing, listening, and speaking.",
    features: ["50 min lessons", "Materials included", "Homework assignments"],
  },
  {
    id: "3",
    name: "Exams",
    price: "35$",
    description: "Official Ramon Llull & Generalitat de Catalunya exams",
    details:
      "Intensive preparation for official certifications. We focus on exam techniques, time management, and specific exam contents.",
    features: [
      "50 min lessons",
      "Mocking exams included",
      "Correction included",
    ],
  },
];

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;
  const lesson = lessonsData.find((item) => item.id === lessonId);

  //Handle cases where the ID doesn't exist (e.g. /lessons/999)
  if (!lesson) {
    return notFound();
  }

  return (
    <div className="mx-auto mt-16 text-center lg:text-lg">
      {/*
       */}{" "}
      <Link
        href="/lessons"
        className="font-bold underline hover:text-blue-500 text-lg"
      >
        Back to Lessons
      </Link>
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 justify-center mx-auto p-8 2xl:w-[50%]">
        <div className="fkex flex-col text-center">
          <h1 className="text-4xl font-bold my-6">{lesson.name}</h1>
          <p className="2xl:text-2xl">{lesson.description}</p>
          <div className="p-8">
            <ul className="2xl:text-2xl">
              {lesson.features.map((feature) => (
                <li className="">{feature}</li>
              ))}
            </ul>
          </div>
          <button className="bg-indigo-600 2xl:text-2xl text-white px-16 py-2 rounded-lg hover:bg-amber-800">
            Book a Trial
          </button>
        </div>
        <img src={"/conversational.jpg"} className="mx-auto w-full 2xl:max-w-[90%]"></img>
      </div>
      <div>
        <h2 className="font-bold">Why Our Lessons</h2>
        <p className="2xl:text-2xl">{lesson.details}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 2xl:gap-20 justify-center mt-8 w-[70%] sm:w-[90%] 2xl:w-[80%] 2xl:text-2xl mx-auto">
          <div className=" flex flex-col p-2  bg-white rounded hover:scale-105 transform transition-transform">
            <img src={"/cefr.webp"} className="w-full  h-1/2"></img>
            <p className="flex-1 flex items-center justify-center text-center p-3 text-black">
              We follow the official Common European Framework of Reference
            </p>
          </div>
          <div className="flex flex-col  border-black p-2 bg-white rounded hover:scale-105 transform transition-transform">
            <img src={"/material.jpg"} className="w-full h-1/2"></img>
            <p className="flex-1 flex items-center justify-center text-center p-3  text-black">
              We will provide you all the materials online downloadable
            </p>
          </div>
          <div className="flex flex-col  border-black p-2 bg-white rounded hover:scale-105 transform transition-transform">
            <img src={"/onlinetutor.jpg"} className="w-full h-1/2"></img>
            <p className="flex-1 flex items-center justify-center text-center p-3 text-black">
              All our tutors are native from Barcelona with neutral accent
            </p>
          </div>
          <div className="flex flex-col border-black p-2 bg-white rounded hover:scale-105 transform transition-transform">
            <img src={"/allonline.jpg"} className="w-full h-1/2"></img>
            <p className="flex-1 flex items-center justify-center text-center p-3 text-black">
              Live sessions all online from the comfort of your home
            </p>
          </div>
        </div>
      </div>
      <div className="p-15">
        <h2>Get Started</h2>
        <div className="2xl:text-2xl grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center mt-10 w-[80%] mx-auto">
          <div className="flex flex-col items-center justifify-end space-y-8 dark:tex-white">
            {/* Step 1 */}
            <div className="flex items-start justify-start space-x-4">
              <div className="flex items-center justify-center w-8 h-8 font-semibold border border-black rounded-full">
                1
              </div>
              <div>Choose Lesson type</div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center justify-end space-x-4">
              <div className="flex items-center justify-center w-8 h-8 font-semibold border border-black rounded-full">
                2
              </div>
              <div >Book a Trial</div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center justify-end space-x-4">
              <div className="flex items-center justify-center w-8 h-8 font-semibold border border-black rounded-full">
                3
              </div>
              <div>Get Your Personalized Plan</div>
            </div>

            {/* Step 4 */}
            <div className="flex items-center justify-end space-x-4">
              <div className="flex items-center justify-center w-8 h-8 font-semibold border border-black rounded-full">
                4
              </div>
              <div>Schedule Your Lessons</div>
            </div>
          </div>
          <div>
            <img src={"/getstarted.jpg"}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
