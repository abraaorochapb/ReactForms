import React, { useState } from 'react'

const MyForm = () => {
const [name, setName] = useState()
const [age, setAge] = useState()
const [email, setEmail] = useState()

const handleEmail = (e) => {
  setEmail(e.target.value)
}

console.log(name, age, email)
  return (
    <div className=' text-center'>
      <form className='space-y-4 w-80 m-auto mt-4'>
        <div className='flex flex-col space-y-2 '>
          <label htmlFor='name'>Nome:</label>
          <input className='p-2 rounded-sm text-zinc-700' placeholder='Digite seu Nome' type='text' id='name' onChange={(e) => setName(e.target.value)}/>
        </div>

        <div className='flex flex-col space-y-2 '>
          <label htmlFor='age'>Idade:</label>
          <input className='p-2 rounded-sm text-zinc-700' placeholder='Digite sua Idade' type='text' id='age' onChange={(e) => setAge(e.target.value)} />
        </div>

        <div className='flex flex-col space-y-2 '>
          <label htmlFor='job'>Email:</label>
          <input className='p-2 rounded-sm text-zinc-700' placeholder='Digite seu Email' type='text' id='job' onChange={handleEmail}/>
        </div>
        
        <div>
          <input type="submit" value={'Enviar'} className='bg-green-500 text-white p-2 rounded-sm mt-4 w-80 cursor-pointer'/>
        </div>
        
      </form>
    </div>
  )
}

export default MyForm