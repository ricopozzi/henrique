import './App.css'
import { useState } from 'react'

export default function App() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [ lista, setLista ] = useState([])
  const [listaBuscada, setListaBuscada] = useState([])


  function typingName(name) {
    return setNome(name)
  }

  function typingPhone(phone) {
    return setTelefone(phone)
  }

  function AddToList() {
    return setLista([...lista ,{name: nome, phone: telefone}])
  }

  function Search(text) {
    const arrayPesquisado = lista.filter((item) => item.name === text)

    return setListaBuscada(arrayPesquisado)
  }

  return (
    <main className="container" >

      <input onChange={(event) => Search(event.target.value)} type="text" />
      
      <div className='inputContainer'>
        <p className='inputTitle' > Nome </p>
        <input onChange={(event) => typingName(event.target.value)} className='inputText' type="text" />
      </div>

      <div className='inputContainer'>
        <p className='inputTitle' > Telefone </p>
        <input onChange={(event) => typingPhone(event.target.value) } className='inputText' type="text" />
      </div>

      <button onClick={() => AddToList()} className='submitButton' > Adicionar </button>

      {listaBuscada.map(   (usuario) => {
        return (
          <div>{usuario.name} --- {usuario.phone}</div>
        )
      }    )}
      
    </main>
  )
}