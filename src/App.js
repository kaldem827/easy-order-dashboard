import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Popup } from "./pages/Components/Popup";
import { Home } from "./pages/Home/Home";
import { Menu } from "./pages/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
      </Routes>

      <Popup
        header={"Add Meal"}
        text="Meal added with success"
        type={"success"}
      />
    </div>
  );
}

export default App;
