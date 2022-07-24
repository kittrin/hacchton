import './App.css';
import Main from "./pages/Main";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import HeaderMain from "./Components/ForPages/Main/HeaderMain";

function App() {
  return (
    <BrowserRouter>
        <HeaderMain/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
