import { useState } from 'react'

function english(num){
  const index = ['zero','one','two','three','four','five','six','seven','eight','nine']
  return (''+num).split('').map(x => index[parseInt(x)]).join('-')
}

export default function useEnglish(num){
  const [count, setCount] = useState(num)
  const word = english(count)
  const addOne = function(){ setCount(count + 1) }
  return [ word, addOne ]
}