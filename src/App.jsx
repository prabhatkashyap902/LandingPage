import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import moviePlay from './assets/images/movie_play1.png'
import adultPlay from './assets/images/adult_play1.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <p style={{color: 'white', position:'absolute', top: '2%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '30px', backgroundColor: 'black', padding: '10px', borderRadius: '10px'}}>MovieClip.com</p> */}
      <p>पूरी मूवी देखने के लिए निचे वीडियो पे क्लिक करे 👇🏻</p>
      <p>(Puri Movie dekhne ke liye niche video pe click kare) 👇🏻</p>
      <div><a href='https://ooloptou.net/4/7711738'><img src={moviePlay} style={{ width: '300px'}}/></a></div>
      <p >18+ ya P*rn क्लिप देखने के लिए निचे वीडियो पे क्लिक करे </p>
      <p>(18+ ya P*rn dekhne ke liye niche video pe click kare 👇🏻) </p>
      <div><a href='https://ooloptou.net/4/7711738'><img src={adultPlay} style={{ width: '300px'}}/></a></div>
      {/* <div style={{position: 'absolute', bottom: '0', left: '50%', transform: 'translate(-50%, -50%)', width: '100%'}}>MovieClip.com copyright 2024</div> */}
    </>
  )
}

export default App
