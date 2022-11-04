import { useState } from "react";
import SearchBar from "./components/SearchBar";
import styled from 'styled-components'

const Button = styled.button`
padding: 10px;
border-radius: 5px;
border:none;
background-color: white;
border: solid 1px #ccc;
cursor: pointer;

&:hover{
  background-color: #efefef;
}
`;

const people = [
  {
    id: "people-01",
    title: "Juan Perez",
  },
  {
    id: "people-02",
    title: "Horacio Perez",
  },
  {
    id: "people-03",
    title: "Gustavo Salinas",
  },
  {
    id: "people-04",
    title: "Raul Guiterrez",
  },
];
const calendar = [
  {
    id: "calendar-01",
    title: "Sesion de seguimiento",
  },
  {
    id: "calendar-02",
    title: "Revision de propuestas",
  },
  {
    id: "calendar-03",
    title: "Evento para donar juguetes",
  },
  {
    id: "calendar-04",
    title: "Junta semanal de equipo",
  },
];
const emails = [
  {
    id: "email-01",
    title: "reporte de resultados",
  },
  {
    id: "email-02",
    title: "requisitos para cambio",
  },
  {
    id: "email-03",
    title: "estatus de funcionalidad",
  },
  {
    id: "email-04",
    title: "proximos eventos",
  },
];

function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails]);

  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");
  const [count, setCount] = useState(0);

  function handleClick(e) {
    const op = e.target.name;

    switch (op) {
      case "all":
        setData([...people, ...calendar, ...emails]);
        setCurrentOption("all");
        break;
      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;
      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;
      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;
    }
  }

  function handleItemSelected(item){
    setSelection(item);
  }

  return (
    <div>
      <Button onClick={handleClick} name="all">
        ALL
      </Button>
      <Button onClick={handleClick} name="people">
        PEOPLE
      </Button>
      <Button onClick={handleClick} name="calendar">
        CALENDAR
      </Button>
      <Button onClick={handleClick} name="emails">
        EMAILS
      </Button>

      <button onClick={()=> setCount(count+1)}>{count}</button>

      {selection ? <div>Seleccionaste: {selection.title} </div> : ''}

      <SearchBar items={data} onItemSelected={handleItemSelected} />
    </div>
  );
}

export default App;
