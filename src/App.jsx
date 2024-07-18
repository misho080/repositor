import { useState } from 'react'
import './App.css'
import { Card } from './components/Card/Card'
import image from './components/assets/Star.svg'
  


function App() {
  const [number,setNumber] = useState(0)
  const [showCard,setShowCard] = useState(false)
  

  return (
    <>
    <div className='body'>
      <div className='main_div'>
       {!showCard && (
        <>
        <div className='star-img'>
            <img className='icon' src={image} alt="" />
        </div>
        <h1 className='intro'>How did we do?</h1>
        <p className='main-text'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className='buttons'>
        <button className='numbers' onClick={() => setNumber(1)} ><p className='buttons-numbers'>1</p></button>
        <button className='numbers' onClick={() => setNumber(2)} ><p className='buttons-numbers'>2</p></button>
        <button className='numbers' onClick={() => setNumber(3)} ><p className='buttons-numbers'>3</p></button>
        <button className='numbers' onClick={() => setNumber(4)} ><p className='buttons-numbers'>4</p></button>
        <button className='numbers' onClick={() => setNumber(5)} ><p className='buttons-numbers'>5</p></button>
        </div>
       
        <button className='submit-button' onClick={() => {

          setShowCard(true)

        }}><p className='submit-text'>submit</p></button>
        
        </>
       )}

        {showCard && <Card  number={number}/>}
      </div>
      </div>
    </>
  )
}


export default App
