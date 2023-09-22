import React from 'react'

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is develop by
         {' '}
        <strong>
          <a href='https://www.linkedin.com/in/puneet-vishnoi-931b7517b/'> Puneet Vishnoi</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        LinkedIN :
        <a className='text-white' href='https://www.linkedin.com/in/puneet-vishnoi-931b7517b/'> MarNawar
        </a>
      </p>
      <p className='text-lg text-gray-400'>
        Github :
        <a className='text-white' href='https://github.com/MarNawar'> MarNawar
        </a>
      </p>
    </div>
  )
}

export default About