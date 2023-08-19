
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './NavBar/Navbar'
import Header from './Header/Header';
import Skill from './Skills/Skill';
import Works from './Works/Works';
import Contact from './Contact/Contact';


function App() {
 

  return (
    <>
    <Navbar/>
    <Header id='head'/>
    <Skill id='skills'/>
    <Works id='works'/>
    <Contact id='contact'/>
  
    

     
    </>
  )
}

export default App
