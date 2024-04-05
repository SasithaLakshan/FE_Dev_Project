import './App.scss'
import Header from './components/header'
import heroImage from './assets/Hero.png'

function App() {
  return (
    <>
    <Header/>
    <main>
      <section className='hero_section'>
        <h1>Hero Section</h1>
      </section>
      <section className='other_section'>
        <h1>Other Section</h1>
      </section>
    </main>
    </>
  )
}

export default App
