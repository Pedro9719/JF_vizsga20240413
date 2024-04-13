import React from 'react'
import { properties } from '../data'
import { SingleProperties } from './SingleProperties';

export const Properties = () => {
  console.log(properties);
  return (
    <div className='d-flex justify content center gap-3 flex-wrap bg-light'>
      <h3 className='w-100 m-2'>Aktuális ingatlan kínálatunk</h3>
      {properties.map(obj => <SingleProperties key={obj.id} {...obj} />)}
    </div>
  )
}

