import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { getMalzeme } from '../Store/MalzemeSlice'
import { useRef } from 'react';
function SearchArea() {
  const [visibilty, setVisibility] = useState(false);
  const malzeme = useSelector((state) => state.malzeme.malzeme);
  const dispatch = useDispatch();
  const searcref = useRef();
  const handleClick=()=>{
    let temp = visibilty === true ? false : true; setVisibility(temp);
    visibilty === false ? searcref.current.focus() : searcref.current.blur();
  }
  return (
    <div className='bg-black w-full h-20 flex items-center justify-center gap-2'>
      <button className='border-0 text-3xl' type='button' onClick={() => handleClick()}>
        <BsSearch className='text-purple-500 '></BsSearch>
      </button>
      <div>
        <input className={"bg-gray-200 appearance-none duration-300 transtion border-gray-200 rounded text-l font-semibold  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " + (visibilty === true ? "w-72 py-2 px-4 border-2" : "w-0")} type="text" ref={searcref} value={malzeme} onChange={(e) => dispatch(getMalzeme(e.target.value))} />
      </div>
      <button type='submit' className='hidden'>Get Recipes</button>
    </div>
  )
}

export default SearchArea