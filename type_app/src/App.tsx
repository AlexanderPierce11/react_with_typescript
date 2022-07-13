import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoLIst';
import { Todo } from './model';

const App: React.FC = () => {
  //stateの設定
  const [text, setText] = useState(''); // suppose 
  const [history, setHistory] = useState<Todo[]>([]);  //interface Todoはmodel.tsに記述 //historyはTodoが複数入ったArray

  // Input入力時
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setText((text) => inputValue);
  };

  // タスク追加時
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text === ""){
      return;
    } else {
      const newContent = {
        id: Date.now(),
        content: text
      };
      setHistory((history) => [...history, newContent]);
      setText('');
    }
  };
  
  return (
    <div className="App">
      <h3 className="content-title">TodoList</h3>
      <TodoList
        history={history}
      />
      <InputField
        text={text}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;