import { useState } from 'react'
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
//import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
//import SearchBar from './components/SearchBar';
import {StarterProjects} from './Data';


function App(){
  const[projects,setprojects] = usestate(StarterProjects);




return (

  <>
     <Header/>
     <main>


     </main>

  </>
)
}




export default App;


