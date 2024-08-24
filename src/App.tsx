import { Outlet } from "react-router-dom";
import Cabecalho from "./Components/Cabecalho/Cabecalho";
import Rodape from "./Components/Rodape/Rodape";

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