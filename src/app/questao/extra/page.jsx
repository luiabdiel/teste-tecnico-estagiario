"use client"

import { useEffect, useState } from "react";
import styled from "styled-components";
import css from "styled-jsx/css";

const Container = styled.div`
  width: 100%;

  margin: 0 auto;
`

const FormContainer = styled.form`
  margin-top: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    border: none;
    outline: none;
    padding: 12px 16px;
    border-radius: 4px;

    width: 90%;

    font-size: 16px;
  }

  div {
    display: flex;
    gap: 4px;
  }
`

const Button = styled.button`
  border: none;
  border-radius: 50%;
  padding: 10px;

  font-weight: 600;

  cursor: pointer;

  &:hover {
    border-radius: 0;
    filter: brightness(0.85);
  }

  ${(props) =>
    props.color === "blue" &&
    css`
      background-color: #007bff;
    `}

  ${(props) =>
    props.color === "green" &&
    css`
      background-color: #28a745;
    `}

  ${(props) =>
    props.color === "red" &&
    css`
      background-color: #e25858;
    `
    }
`;

const ListContainer = styled.ul`
  list-style: none;

  margin-top: 20px;

  li {
    border-bottom: 1px solid #fff;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 8px;

    font-size: 18px;
  }
`

const LOCAL_STORAGE_KEY = "tasks"

function Todo() {
  const [title, setTitle] = useState("")
  const [tasks, setTasks] = useState([])

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTasks()
  },[])

  function setTasksAndSave(newTasks) {
    setTasks(newTasks)

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function addTasks(taskTitle) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle
      }
    ])
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    setTasksAndSave(newTasks)
  }

  function clearAllTasks() {
    setTasksAndSave([])
  }

  function handleChangeInput(event) {
    setTitle(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if(!title.trim()) return

    addTasks(title)
    setTitle("")
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Adicionar uma tarefa"
          value={title}
          onChange={handleChangeInput}
        />
        <div>
          <Button color="blue">Adicionar</Button>
          <Button color="green" onClick={clearAllTasks}>Limpar</Button>
        </div>
      </FormContainer>
      <ListContainer>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>
            <Button color="red" onClick={() => deleteTaskById(task.id)}>Remover</Button>
          </li>
        ))}
      </ListContainer>
    </Container>
  )
}

export default function QuestaoExtra() {
  return (
    <>
      <h1>Questão Extra</h1>
      <p>
        Crie um to-do app que adiciona e remove itens de uma lista.
        O app deve ter um pequeno formulário e um botão azul para adicionar itens.
        Cada item deve ter um botão para removê-lo.
        Deve existir também um botão verde para zerar a lista.
        Todos os botões precisam ser redondos e ficarem quadrados quando o mouse estiver sobre eles.
        A lista deve ser salva no localStorage.
      </p>
      <Todo />
    </>
  );
}
