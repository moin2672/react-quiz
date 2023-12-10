import { useReducer } from "react";
import Question from "./Question";

const initialState = {
  currentQuestionIndex: 0,
  questions: [],
};

const reducer = (state, action) => {
  if (action.type === "NEXT_QUESTION") {
    return {
      ...state,
      currentQuestionIndex: state.currentQuestionIndex + 1,
    };
  }
  return state;
};

const Quiz = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state", state);
  // const [questions, setQuestion] = useState([]);
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // console.log("currentQuestionIndex", currentQuestionIndex);
  return (
    <div className="quiz">
      <div>
        <div className="score">Question 1/8</div>
        <Question />
        <div
          className="next-button"
          onClick={() => dispatch({ type: "NEXT_QUESTION" })}
        >
          Next question
        </div>
      </div>
    </div>
  );
};

export default Quiz;
