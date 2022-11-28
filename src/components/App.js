import "../styles/App.scss";
import adalabers from "../data/adalabers.json";
import { useState } from "react";

function App() {
  console.log(adalabers);
  const [data, setData] = useState(adalabers);

  return (
    <div className="App">
      <h1>Adalabers</h1>
      <table border="1" className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>MariCarmen</td>
            <td>Yanelis</td>
            <td>Python</td>
          </tr>

          <tr>
            <td>Amparo</td>
            <td>Dayana</td>
            <td>IA</td>
          </tr>

          <tr>
            <td>Escandia</td>
            <td>Iván</td>
            <td>3D graphics</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
