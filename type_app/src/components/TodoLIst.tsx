import React from "react";
import { Todo } from "../model";

interface Props {
    history: Todo[];
}

const TodoList: React.FC<Props> = ({history}) => {
    const contents = history.map((item, index) => {
        return(
            <div key={index} className="content">
                <p className="content-font">{item.content}</p>
            </div>
        );
    });

    return(
        <div>
            {contents}
        </div>
    );
}

export default TodoList;