import React from 'react'

const MyForm = () => {
  return (
    <div className=' text-center'>
      <form className='space-y-4 w-80 m-auto mt-4'>
        <div className='flex flex-col space-y-2 '>
          <label htmlFor='name'>Nome:</label>
          <input className='p-2 rounded-sm' placeholder='Digite seu Nome' type='text' id='name' />
        </div>

        <div className='flex flex-col space-y-2 '>
          <label htmlFor='age'>Idade:</label>
          <input className='p-2 rounded-sm' placeholder='Digite sua Idade' type='text' id='age' />
        </div>

        <div className='flex flex-col space-y-2 '>
          <label htmlFor='job'>Trabalho:</label>
          <input className='p-2 rounded-sm' placeholder='Ocupação' type='text' id='job' />
        </div>
      </form>
      <input type="submit" value={'Enviar'} className='bg-green-500 text-white p-2 rounded-sm mt-8 w-80'/>
    </div>
  )
}

export default MyForm