import React from "react";

interface Props {
    text: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({text, handleChange, handleSubmit}) => {
    return(
        <div>
            <form className="input" onSubmit={handleSubmit}>
                <input
                 value={text}
                 onChange={(e) => handleChange(e)}
                 placeholder="Enter a Task"
                />
                <button>Add</button>
            </form>
        </div>
    )
};

export default InputField;