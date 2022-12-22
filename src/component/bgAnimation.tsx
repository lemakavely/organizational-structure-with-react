// import Typewriter from "typewriter-effect";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Typist from "react-typist";

const BgAnimation = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);
  return (
    <>
      <div className="mt-5 pt-20 bg-gray-100 h-96 flex items-center justify-center px-16">
        <div className="absolute w-full max-w-lg">
          <div className="absolute z-30 bg-green-200 top-0 -left-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute z-30 bg-yellow-200 top-0 -right-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute z-30 bg-purple-300 -bottom-8 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <h1 className="text-5xl text-indigo-900 text-center">
            SOFTWARE SYSTEMS FOR GREAT ACHIEVEMENTS.
          </h1>
             
          <div className="Typer pt-5 text-center text-5xl text-indigo-900">
            <div className="h-10">
            {count && (
              <Typist avgTypingDelay={80} onTypingDone={() => setCount(0)}>
                <span> Purposeful</span>
                <Typist.Backspace count={20} delay={800} />
                <span> Strategical</span>
                <Typist.Backspace count={20} delay={800} />
                <span> Accomplishments</span>
                <Typist.Backspace count={20} delay={800} />
              </Typist>
            )}
            </div>                
          </div>
        </div>
      </div>
    </>
  );
};
export default BgAnimation;
