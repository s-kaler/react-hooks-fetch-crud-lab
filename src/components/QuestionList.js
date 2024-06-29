import React, {useEffect, useState} from "react";
import QuestionForm from "./QuestionForm";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  //const [selectedCategory, setSelectedCategory] = useState("All");
  const [questions, setQuestions] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then((fetchedQuestions) => {
      setQuestions(fetchedQuestions)
      console.log(fetchedQuestions)
    })
  }, []);


  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question)  => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
        {questions.map((question) => (
          <QuestionItem 
            key = {question.id}
            question = {question}
            onDeleteQuestion={handleDeleteQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
