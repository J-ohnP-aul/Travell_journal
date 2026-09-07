import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


const nums = [1,2,3,4]
console.log('hello world')
console.log(nums.map(num => num ** 2))

function capitalize(word){
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const words = ["john", 'paul', 'okoth']
const capWords = words.map(capitalize);
console.log(words);
console.log(capWords);

const pokemon = ["bulbassaur", "Pikachu", "Squirle"]

const p_m = (p)=>{
  const start = "<p>"
  return start.concat(" ", p, " ", "</p>")
}
const p_m_modified = (p)=>{
  return `<p>${p}</p>`
}

// console.log(pokemon.map(p_m))

console.log(pokemon.map(p_m_modified))