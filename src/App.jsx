import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [message, setMessage] = useState("");
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    setNoPosition({
      x: (Math.random() - 0.5) * 300,
      y: (Math.random() - 0.5) * 300,
    });
  };

  const handleYesClick = () => {
    setAccepted(true);
    setMessage(
      "I'm so happy you said yes! Tonight, we'll cuddle up and watch movies together, just you and me."
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-purple-900 bg-galaxy">
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
        {!accepted ? (
          <>
            <h1 className="text-4xl font-bold text-purple-100 mb-6">
              Will you be my Valentine?
            </h1>
            <div className="flex gap-4">
              <button
                onClick={handleYesClick}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl shadow-lg font-bold"
              >
                YES
              </button>
              <motion.div animate={noPosition}>
                <button
                  onClick={moveNoButton}
                  className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl shadow-lg font-bold"
                >
                  NO
                </button>
              </motion.div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-2xl font-bold text-purple-300 mb-4">
              {message}
            </h1>
            <div className="text-lg text-purple-200 italic mt-6 px-8 py-6 bg-purple-800 bg-opacity-80 rounded-2xl shadow-2xl max-w-3xl mx-auto">
              <p>
                With every beat, my heart sings, <br />
                For you, my love, the joy it brings. <br />
                Under the stars, we'll laugh and play, <br />
                Together, forever, come what may. <br />
                Every moment is pure and true, <br />
                And I’m so glad to spend it with you. <br />
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
