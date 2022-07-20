import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import "./style.css";

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: "", avatar: ""})

  function handleAddStudentInList() {
    if (studentName) {
      const newStudent =  {
        name: studentName,
        time: new Date().toLocaleTimeString("pt-br", {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }),
      }

      setStudents([...students, newStudent]);
      setStudentName("");
    }
  }

  useEffect(() => {
    fetch('https://api.github.com/users/gabrielgpena793')
    .then(response => response.json())
    .then(data => {
      setUser({name: data.login, avatar: data.avatar_url})
    })
  }, [])

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>

      <input
        type="text"
        placeholder="Digite o nome..."
        value={studentName}
        onChange={(event) => setStudentName(event.target.value)}
      />
      <button type="button" onClick={handleAddStudentInList}>
        Adicionar
      </button>

      {students.map((student, index) => (
        <Card
          key={index}
          name={student.name}
          time={student.time}
        />
      ))}
    </div>
  );
}
