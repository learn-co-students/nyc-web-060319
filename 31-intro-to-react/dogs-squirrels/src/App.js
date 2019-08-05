import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Animal from "./Animal"


class App extends React.Component {

  render(){
    let cohortName = "060319"
    let dogImage = "https://i.pinimg.com/originals/d4/50/4e/d4504e742a9e4d2b1924129882005506.jpg"
    let squirrelImage = "https://media.sandiegoreader.com/img/photos/2018/06/19/smiling_t670.jpg?b3f6a5d7692ccc373d56e40cf708e3fa67d9af9d"
   
    return (
      <div>
        <Header headerCohortName={cohortName}/>
        <Animal animalImg={dogImage}/>
        <Animal animalImg={squirrelImage}/>
      </div>
    );
  }
}


export default App;
