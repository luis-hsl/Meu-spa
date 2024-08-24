import { Outlet } from "react-router-dom";
import Cabecalho from "./Components/Cabecalho";
import Rodape from "./Components/Rodape";

export default function App() {
  return (
    <div>

      <Outlet />

      <Cabecalho/>
        <Outlet />
      <Rodape/>
    </div>
  );
}