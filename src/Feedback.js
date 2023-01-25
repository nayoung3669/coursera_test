import { useState } from "react"

export function Feedback(onSubmit) {
    const [score, setScore] = useState("10");
    const [comments, setComments] = useState(null);

//button disable logic
    const isDisabled = Number(score) < 5 && comments.length <=10;

    const textAreaPlaceholder = isDisabled 
        ? "Please provide a comment"
        : "Optional feedback";

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({score, comments});
    }

    return (
        <form className="feedbackForm" onSubmit={handleSubmit} >
            <fieldset>
                <h1>Feedback form</h1>
                <div className="Field">
                    <label>Score: {score} ⭐️</label>
                    <input type="range" min="0" max="10" 
                        value={score} 
                        onChange={(e) => setScore(e.target.value)}
                    />
                </div>
                <div className="Field"> 
                    <label>Comments: </label>
                    <textarea 
                        placeholder={textAreaPlaceholder} 
                        value={comments} 
                        onChange={e => setComments(e.target.value)} />
                    <button type="submit" disabled={isDisabled} className="submitButton">Submit</button>
                </div>
            </fieldset>
        </form>
    )
}