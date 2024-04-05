import './App.scss'
import Header from './components/header'
import Footer from './components/footer'
import heroImage from './assets/Hero.png'

function App() {
  return (
    <>
    <Header/>
    <main>
      <section id='hero_section'>
        <h1>Hero Section</h1>
      </section>
      <section id='services_section'>
        <h1>Services Section</h1>
      </section>
      <section id='about_section'>
        <h1>About Section</h1>
      </section>
      <section id='contact_section'>
        <h1>Contact Section</h1>
      </section>
      <section id='career_section'>
        <h1>Career Section</h1>
      </section>
    </main>
    <Footer/>
    </>
  )
}

export default App
