import React from 'react'
import { useAppSelector } from '../hooks/redux'

export function FavouritesPage() {

  const { favourites } = useAppSelector(state => state.github)
  if (favourites.length === 0) return <p className='text-center'>No items.</p>
  console.log(favourites);

  return (
    <div className='flex flex-col items-center justify-center pt-10'>
      <h2 className='mb-5 text-[32px] font-bold'>Сохраненные репозитории</h2>
      <ul className="list-none">
        {favourites.map((f, index) => (
          <a href={f} target={'_blank'}>
            <li key={f} className='flex gap-2 border p-[10px] mb-5'>
              <span>{index + 1}</span>
              <span>{f}</span>
            </li>
          </a>
        ))}
      </ul>
    </div>
  )
}
