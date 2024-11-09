import React, { useState } from "react";
import Quistion from "../Quiz/Quistion";
import quizData from "../../staticData/data";

function Home() {
  const [questions, setQuestions] = useState(quizData);
  return (
    <main>
      <div className="container">
        <h3>Quiz App</h3>

        <section>
          {
            questions.map((question) => {
                return (
                    <Quistion key={question.id} {...question} />
    
                )
              })
          }
        </section>
      </div>
    </main>
  );
}

export default Home;
