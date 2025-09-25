'use client'
import React from 'react'
import '../styles/button_genre.scss'

const Button_genre = ({genre_img, genre_type ,clickme}) => {
  return (
    <button onClick={clickme} className='genre_button'>
      {genre_img}
      <p> {genre_type} </p>
    </button>
  )
}

export default Button_genre