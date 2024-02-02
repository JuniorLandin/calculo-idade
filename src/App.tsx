import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState("")
  const [nascimento, setNascimento] = useState("")

  const [user, setUser] = useState({
    name: '',
    nascimento: '',
    idade: 0
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function Submit(e: any) {
    e.preventDefault();

    const anoAtual = new Date().getFullYear();

    const idade = anoAtual - Number(nascimento);
    if(idade > 120 || idade < 0) {
      alert(`Ano de nascimento informado errado. Idade - ${idade}`)
      return
    }

    setUser({
      name: name,
      nascimento: nascimento,
      idade: idade
    })
  }

  return (
   <div className='container'>
    <h1 className='title'>Descubra sua Idade</h1>
    <div className='form'>
    <form onSubmit={Submit}>
      <div className='div-input'>
        <label className='label'>Qual seu nome?</label>
        <input
          className='input' 
          placeholder='Digite seu Nome'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
         />
      </div>
      <div className='div-input'>
        <label className='label'>Digite o ano que você nasceu?</label>
        <input
          className='input'
          placeholder='Digite seu ano de nascimento'
          type='number'
          value={nascimento}
          onChange={(e) => setNascimento(e.target.value)}
         />
      </div>
      <input
        type='submit'
        value="Gerar Idade"
        className='input-submit'
      />
    </form>
    </div>
      {user.name &&
       <p>{user.name} você tem: {user.idade} anos</p>  
      }
   </div>
  )
}

export default App
