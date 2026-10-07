import { useState, useEffect } from "react";

const Controlled = ({ input, validation, setValidation, currentQuestion }) => {
  const [answer, setAnswer] = useState("");

  // Automatically clears the input text field and validation border when the question changes
  useEffect(() => {
    setAnswer("");
    setValidation("");
  }, [currentQuestion, setValidation]);

  const handleInput = (event) => {
    setAnswer(event.target.value);
    
    // Clear validation borders the moment the user edits their mistake
    if (validation !== "") {
      setValidation("");
    }
  };

  const onSubmit = () => {
    input(answer);
  };

  // Determine dynamic border color CSS class
  const getBorderClass = () => {
    if (validation === "correct") return "border-green";
    if (validation === "wrong") return "border-red";
    return "";
  };

  return (
    <div className="Controlled">
      <input 
        type="text" 
        value={answer} 
        onChange={handleInput} 
        className={getBorderClass()} 
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Controlled;