 import React, {Component} from 'react';
 import logo from './logo.svg';
 import './App.css';
 
 import Movie from './components/Movie';
 import MovieList from './components/MovieList'
 
 class App extends Component {
   render() {
     
  
     return (
       <div>
         <MovieList />
       </div>
     );
   }
 }
 
 export default App;