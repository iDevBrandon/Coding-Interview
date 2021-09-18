import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./Components/TodoTemplate";
import TodoHead from "./Components/TodoHead";
import TodoList from "./Components/TodoList";
import TodoCreate from "./Components/TodoCreate";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body 
  { background: #e9ecfe;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
