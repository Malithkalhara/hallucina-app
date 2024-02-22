import React from 'react'

export const LabeledInput = ({label}) => {
  return (
    <div className='row'>
        <span className='col-4 d-flex justify-content-start'>
            <p>{label}</p>
        </span>
        <span className='col-8 '>
            <input type='text' />
        </span>
    </div>
  )
}
