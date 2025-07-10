import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import reactLogo from './react.png';
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById("root"));

root.render(
    <>
        <Header />
        <Page />
        <Footer />
    </>
)


function Page() {
  return (
    <ol>
      <li>
        React is a popular libary, so I will be able to fit in with all the coolest
        devolpers out there!  
      </li>
      <li>
        I am more likely to ger a job as a front end developer if I know React
      </li>
    </ol>
  )
}

function Header() {
  return (
    <header>
      <img className='logo' src={reactLogo} alt="react-logo" />
      <h1>Reasons I am excited to learn React</h1>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2023 Juno React Course. All rights reserved.</small>
    </footer>
  )
}

export default Page;
export { Header, Footer };