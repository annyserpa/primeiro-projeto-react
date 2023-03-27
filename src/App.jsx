import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { Container } from './styles.js'


function App() {
  const [list, setList] = useState([{ id: uuid(), task: 'Nada' }])
  const [task, setTask] = useState('')

  function inputMudou(event) {
    setList(event.target.value)
  }

  function cliqueiNoBotao() {
    setList([...list, { id: uuid(), task }])
  }

  return (
    <Container>
      <input onChange={inputMudou} placeholder="O que tenho para fazer...?" />
      <button onClick={cliqueiNoBotao}>Adicionar</button>

      <ul>
        {list.map((item) => (
          <li key={item.id}> {item.task} </li>
        ))}
      </ul>
    </Container>
  )
}
export default App
