import "../styles/App.scss";
import adalabers from "../data/adalabers.json";
import { useState } from "react";

function App() {
  console.log(adalabers);
  const [data, setData] = useState(adalabers.results);
  const [newAdalaber, setNewAdalaber] = useState({
    id: "",
    name: "",
    counselor: "",
    speciality: "",
  });

  const renderAllAdalabers = () => {
    // por cada adalaber crea un tr con sus datos
    return data.map((adalaber) => {
      return (
        <tr key={adalaber.id}>
          <td>{adalaber.name}</td>
          <td>{adalaber.counselor}</td>
          <td>{adalaber.speciality}</td>
        </tr>
      );
    });
  };

  const handleNewAdalaber = (ev) => {
    //para que se añadan los datos
    setNewAdalaber({ ...newAdalaber, [ev.target.id]: ev.target.value });
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    data.push(newAdalaber);
    setData([...data]);
    console.log(newAdalaber);
    // añade nueva adalaber a la tabla pintada
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="App">
      <h1>Adalabers</h1>
      <table border="1" className="table">
        <thead>
          <tr className="table__row">
            <th className="table_column">Nombre</th>
            <th className="table_column">Tutora</th>
            <th className="table_column">Especialidad</th>
          </tr>
        </thead>

        <tbody>{renderAllAdalabers()}</tbody>
      </table>

      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Añadir una Adalaber</h2>
        <div className="form__div">
          <label className="form__div--label" htmlFor="name">
            Nombre:
          </label>
          <input
            className="form__div--input"
            type="text"
            name="name"
            id="name"
            onInput={handleNewAdalaber}
          />
        </div>
        <div>
          <label className="form__div--label" htmlFor="counselor">
            Tutora:
          </label>
          <input
            className="form__div--input"
            type="text"
            name="counselor"
            id="counselor"
            onInput={handleNewAdalaber}
          />
        </div>
        <div>
          <label className="form__div--label" htmlFor="speciality">
            Especialidad:
          </label>
          <input
            className="form__div--input"
            type="text"
            name="speciality"
            id="speciality"
            onInput={handleNewAdalaber}
          />
        </div>
        <button className="form__btn" onClick={handleClick}>
          Añadir una nueva Adalaber
        </button>
      </form>
    </div>
  );
}

export default App;
