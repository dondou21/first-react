import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import reactLogo from './react.png';
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <TempName />
    <Page />
  </>
)

function TempName() {
  return (
    <main>
    <div >
          <img className='logo' src={reactLogo} alt="react-logo" srcset="" />
          <h2>ReactFact</h2>
    </div>

    <div>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200k stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of entreprise apps, including mobils apps</li>
      </ul>
    </div>
  </main>
  )
}

function Page() {
  return (
    <div>
      <h1>My list</h1>
      <ul>
        <li>I wantto learn more about React</li>
        <li>Build my coding skill</li>
        <li>Be full stack developper</li>
      </ul>
    </div>
  );
}

export default Page;
export { TempName };