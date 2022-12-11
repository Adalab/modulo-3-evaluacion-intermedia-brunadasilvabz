import "../styles/App.scss";
import adalabers from "../data/adalabers.json";
import { useState } from "react";

function App() {
  //-------------VARIABLES ESTADO-----------------
  const [data, setData] = useState(adalabers.results);
  const [newAdalaber, setNewAdalaber] = useState({
    id: crypto.randomUUID(),
    name: "",
    counselor: "",
    speciality: "",
    social_networks: [],
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [counselorFilter, setCounselorFilter] = useState("");
  const [search, setSearch] = useState("");

  //-------------FUNCIONES RENDER-----------------

  const renderAllAdalabers = () => {
    return data
      .filter((adalaber) => adalaber.name.includes(search))
      .filter((adalaber) =>
        adalaber.counselor.toLowerCase().includes(counselorFilter)
      )
      .map((adalaber) => {
        // por cada adalaber crea un tr con sus datos
        return (
          <tr key={adalaber.id}>
            <td>{adalaber.name}</td>
            <td>{adalaber.counselor}</td>
            <td>{adalaber.speciality}</td>
            <td>
              {adalaber.social_networks.map((network, index) => {
                return (
                  <div key={index}>
                    <a href={network.url}>{network.name}</a>
                  </div>
                );
              })}
            </td>
          </tr>
        );
      });
  };

  //-------------FUNCIONES HANDLER-----------------

  const handleNewAdalaber = (ev) => {
    //para que se añadan los datos
    setNewAdalaber({ ...newAdalaber, [ev.target.id]: ev.target.value });
  };

  const handleClickNewAdalaber = (ev) => {
    ev.preventDefault();
    if (newAdalaber.name && newAdalaber.counselor && newAdalaber.speciality) {
      data.push(newAdalaber);
      setData([...data]);
      console.log(newAdalaber);
      // añade nueva adalaber a la tabla pintada
      setNewAdalaber({
        id: crypto.randomUUID(),
        name: "",
        counselor: "",
        speciality: "",
        social_networks: [],
      });
      setErrorMessage("");
    } else {
      setErrorMessage("Debes rellenar todos los campos");
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleSelectCounselor = (ev) => {
    setCounselorFilter(ev.target.value);
  };

  const handleSearch = (ev) => {
    const regExp = /[a-zA-ZáÁéÉíÍóÓúÚüÜ´]/;
    if (regExp.test(ev.target.value)) {
      setSearch(ev.target.value);
    } else {
      setSearch("");
    }
  };

  //-------------HTML-----------------

  return (
    <div className="App">
      <header>
        <h1>Adalabers</h1>
      </header>
      <main>
        <form>
          <label htmlFor="nameSearch">Escribe el nombre de la Adalaber</label>
          <input
            type="text"
            name="name"
            id="name"
            value={search}
            onChange={handleSearch}
          />

          <label htmlFor="counselor">
            Elige una tutora:
            <select
              onChange={handleSelectCounselor}
              name="counselor"
              id="counselor"
              value={counselorFilter}
            >
              <option value="">Todos</option>
              <option value="dayana">Dayana</option>
              <option value="iván">Iván</option>
              <option value="yanelis">Yanelis</option>
            </select>
          </label>
        </form>
        <section>
          <table border="1" className="table">
            <thead>
              <tr className="table__row">
                <th className="table_column">Nombre</th>
                <th className="table_column">Tutora</th>
                <th className="table_column">Especialidad</th>
                <th className="table_column">Redes Sociales</th>
              </tr>
            </thead>

            <tbody>{renderAllAdalabers()}</tbody>
          </table>
        </section>
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
              value={newAdalaber.name}
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
              value={newAdalaber.counselor}
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
              value={newAdalaber.speciality}
              onInput={handleNewAdalaber}
            />
          </div>

          <button className="form__btn" onClick={handleClickNewAdalaber}>
            Añadir una nueva Adalaber
          </button>
          <p>{errorMessage}</p>
        </form>
      </main>
    </div>
  );
}

export default App;
