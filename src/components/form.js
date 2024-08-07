import React, { useState } from 'react';

export default function TextEditor() {
    const [text, setText] = useState("");
    const [history, setHistory] = useState([]); // To keep track of previous states
    const [currentHistoryIndex, setCurrentHistoryIndex] = useState(-1); // To track the current position in history

    const handleChange = (event) => {
        const newText = event.target.value;
        setHistory(prevHistory => {
            // If we're in the middle of the history, remove future states
            if (currentHistoryIndex < history.length - 1) {
                return [...prevHistory.slice(0, currentHistoryIndex + 1), newText];
            }
            return [...prevHistory, newText];
        });
        setText(newText);
        setCurrentHistoryIndex(prevIndex => prevIndex + 1);
    };

    const handleUndo = () => {
        if (currentHistoryIndex > 0) {
            setCurrentHistoryIndex(prevIndex => prevIndex - 1);
            setText(history[currentHistoryIndex - 1]);
        }
    };

    const handleRedo = () => {
        if (currentHistoryIndex < history.length - 1) {
            setCurrentHistoryIndex(prevIndex => prevIndex + 1);
            setText(history[currentHistoryIndex + 1]);
        }
    };

    return (
        <div>
            <textarea
                value={text}
                onChange={handleChange}
                placeholder="Enter text here"
                rows="10"
                cols="30"
            />
            <div>
                <button onClick={handleUndo} disabled={currentHistoryIndex <= 0}>Undo</button>
                <button onClick={handleRedo} disabled={currentHistoryIndex >= history.length - 1}>Redo</button>
            </div>
        </div>
    );
}