import { Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;