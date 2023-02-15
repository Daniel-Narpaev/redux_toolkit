import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import { store } from "./store";

function App() {
  return (
  <div>
  <Provider store={store}>
    <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/todo" element={<TodoPage/>}/>
      </Routes>
  </Provider>  
  </div>
  );
}

export default App;
    <TodoPage/>
