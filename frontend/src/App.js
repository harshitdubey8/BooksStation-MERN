import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";

import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        <Route path="/books/delete/:id" element={<ShowBook />} />
        <Route path="/books/create" element={<CreateBook />} />
      </Routes>
    </div>
  );
}

export default App;
