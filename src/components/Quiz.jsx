import React, { useState } from 'react';

const Quiz = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const question = "What is the capital of France?";
    const options = ["Berlin", "Madrid", "Paris", "Rome"];

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`You selected: ${selectedOption}`);
    };

    return (
        <div>
            <h2>Quiz</h2>
            <form onSubmit={handleSubmit}>
                <p>{question}</p>
                {options.map((option, index) => (
                    <div key={index}>
                        <label>
                            <input
                                type="radio"
                                value={option}
                                checked={selectedOption === option}
                                onChange={handleOptionChange}
                            />
                            {option}
                        </label>
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Quiz;