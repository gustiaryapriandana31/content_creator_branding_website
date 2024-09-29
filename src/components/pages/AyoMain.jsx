import { useState, useEffect, useRef } from "react";
import Button from "../elements/Button";
import {motion, useInView} from "framer-motion";
import { Link } from "react-router-dom";

// Components
import Header from "../layouts/Header";
import PageTransition from "./PageTransition";
import StairTransition from "./StairTransition";  

const AyoMainQuestion = [
  {
    questionLevel: "Easy",
    questionClue: "Hanya yang melingkar yang dihitung",
    questionBody: [
      {
        questionStatement: "Jika 10 + 3 adalah 1, 20 + 16 adalah 2, dan 11 + 4 adalah 0, ",
        question: "Berapa hasil dari 12 + 3?",
        answerOptions: [
          { answer: "3", isCorrect: false },
          { answer: "1", isCorrect: false },
          { answer: "0", isCorrect: true },
          { answer: "2", isCorrect: false }
        ]
      },
      {
        questionStatement: "Jika 10 + 28 adalah 3, dan 10 + 6 adalah 2, ",
        question: "Berapa hasil dari 83 + 82?",
        answerOptions: [
          { answer: "2", isCorrect: false },
          { answer: "4", isCorrect: true },
          { answer: "1", isCorrect: false },
          { answer: "5", isCorrect: false }
        ]
      },
      {
        questionStatement: "Jika 43 + 26 adalah 1, 25 + 81 adalah 2 dan 90 + 19 adalah 2, ",
        question: "Berapa hasil dari 160 + 89?",
        answerOptions: [
          { answer: "3", isCorrect: false },
          { answer: "4", isCorrect: false },
          { answer: "0", isCorrect: false },
          { answer: "5", isCorrect: true }
        ]
      }
    ],
  },
  {
    questionLevel: "Medium",
    questionClue: "Tiang itu tegak lurus",
    questionBody: [
      {
        questionStatement: "Jika 10 + 3 adalah 1, 12 + 16 adalah 2, dan 3 + 4 adalah 0, ",
        question: "Berapa hasil dari 12 + 3?",
        answerOptions: [
          { answer: "3", isCorrect: false },
          { answer: "1", isCorrect: true },
          { answer: "0", isCorrect: false },
          { answer: "2", isCorrect: false }
        ]
      },
      {
        questionStatement: "Jika 31 + 18 adalah 2, dan 110 + 16 adalah 3, ",
        question: "Berapa hasil dari 83 + 42?",
        answerOptions: [
          { answer: "2", isCorrect: false },
          { answer: "4", isCorrect: false },
          { answer: "0", isCorrect: true },
          { answer: "3", isCorrect: false }
        ]
      },
      {
        questionStatement: "Jika 16 + 31 adalah 2, 25 + 81 adalah 1 dan 101 + 171 adalah 4, ",
        question: "Berapa hasil dari 151 + 19?",
        answerOptions: [
          { answer: "2", isCorrect: false },
          { answer: "4", isCorrect: false },
          { answer: "2", isCorrect: false },
          { answer: "3", isCorrect: true }
        ]
      }
    ],
  }
]

const AyoMain = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuestionBody, setCurrentQuestionBody] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showResult, setShowResult] = useState("hidden");
  const [score, setScore] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const totalQuestions = AyoMainQuestion.reduce(
      (acc, current) => acc + current.questionBody.length,
      0 // Initial value for accumulator
    );
    setTotalQuestion(totalQuestions);
  }, [AyoMainQuestion]); // Dependency array: update only when AyoMainQuestion changes

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setShowResult("correct");
    } else if(!isCorrect) {
      setShowResult("wrong");
    } else {
      setShowResult("hidden");
    }
    setIsClicked(true);
  };

  const nextQuestion = () => {
    setShowResult(false);
    setIsClicked(false);
    const questionsBody = AyoMainQuestion[currentQuestion].questionBody;
    const nextQuestion = currentQuestionBody + 1;

    if (nextQuestion < questionsBody.length) {
      setCurrentQuestionBody(nextQuestion);
    } else if (currentQuestion < AyoMainQuestion.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setCurrentQuestionBody(0);
    } else {
      // Menampilkan score akhir
      setShowScore(true);
    }
  };

  return (
    <>
      <Header />
      <StairTransition />
      <PageTransition>
        <section className="md:pt-5 p-4 bg-gray-950 min-h-screen">
          <h2 className="my-5 md:mb-6 mb-3 text-center md:text-5xl text-3xl font-audiowide font-bold text-green-600">
            Ayo Main!!!
          </h2>
          <motion.main
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "transform 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            key={`${currentQuestion}-${currentQuestionBody}`} // Update key
            initial={{ opacity: 0 }} // Start invisible
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Animate out when switching questions
            className="mt-12"
          >
            {showScore ? (
              <div className="border border-green-400 md:w-1/2 mx-auto text-center mt-[15%] text-white p-8 font-bold md:text-xl font-roboto-mono">
                Your scores are {score * 10} out of {totalQuestion * 10} points
                <a
                  href="/games"
                  className="block p-2 rounded-3xl w-1/2 md:w-3/4 mx-auto mt-8 bg-green-600"
                >
                  Replay
                </a>
              </div>
            ) : (
              <section className="text-white">
                <h1 className="mb-4 text-xl text-center font-semibold group-hover:text-green-600 font-poppins">
                  Level : {AyoMainQuestion[currentQuestion].questionLevel}
                </h1>
                <div className="p-6 rounded-3xl flex flex-col md:flex-row md:w-1/2 gap-12 mx-auto bg-gray-800 shadow-md shadow-gray-700 text-slate-500 font-poppins group">
                  <div className="flex-1 group-hover:text-slate-400">
                    <p className="my-4">
                      Clue :
                      <span className="font-semibold group-hover:text-green-600 block font-poppins">
                        {AyoMainQuestion[currentQuestion].questionClue}
                      </span>
                    </p>
                    <p>Pertanyaan :</p>
                    <p className="my-2">
                      {
                        AyoMainQuestion[currentQuestion].questionBody[
                          currentQuestionBody
                        ].questionStatement
                      }
                    </p>
                    <p className="font-semibold group-hover:text-yellow-400 ">
                      {
                        AyoMainQuestion[currentQuestion].questionBody[
                          currentQuestionBody
                        ].question
                      }
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:p-4 flex-1 justify-items-end">
                    {AyoMainQuestion[currentQuestion].questionBody[
                      currentQuestionBody
                    ].answerOptions.map((answerOption, idx) => (
                      <button
                        key={idx}
                        className="w-full md:w-3/4 px-4 py-2 border border-slate-600 group-hover:text-white hover:bg-green-600 text-slate-500 font-bold rounded-3xl disabled:cursor-not-allowed"
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }
                        disabled={isClicked}
                      >
                        {answerOption.answer}
                      </button>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </motion.main>

          {/* Condition to appear answer result */}
          {showResult === "correct" && (
            <div className="mt-1 mx-auto md:w-1/2 px-4 py-2 bg-green-600 text-white font-bold rounded-2xl">
              Jawaban kamu benar : <span className="float-right">10 poin</span>
            </div>
          )}
          {showResult === "wrong" && (
            <div className="mt-1 mx-auto md:w-1/2 px-4 py-2 bg-red-600 text-white font-bold rounded-2xl">
              Jawaban kamu salah : <span className="float-right">0 poin</span>
            </div>
          )}
          {showResult === "hidden" && null}

          {/* Action Button Below Quiz's Card */}
          <div className="flex flex-row justify-center font-poppins">
            <Link to="/" className="inline-block">
              <Button addedClassname="mx-3 mt-4 bg-blue-600 rounded-xl">
                Back to Home
              </Button>
            </Link>
            <Button
              addedClassname="mt-4 bg-green-600 rounded-xl"
              onClick={() => nextQuestion()}
            >
              Next
            </Button>
          </div>
        </section>
      </PageTransition>
    </>
  );
};

export default AyoMain;
