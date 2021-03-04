import './App.css';
import {useEffect, useState} from 'react';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import db from './firebase';


function App() {


   const [rooms, setstate] = useState([]);

   const [user, setUser] = useState();

  const getChannels = () =>{

    db.collection('rooms').onSnapshot((snapshot) =>{

     setstate(snapshot.docs.map((doc) => {
       return {id: doc.id , name : doc.data().name};
     })
     
     )

    })

  }
useEffect(() => {
  getChannels();
}, [])
 
console.log(rooms);


  return (
    <div className="App">
      <Router>
      {     
         !user ? 

         <Login />

         :

          <Container>
              <Header />
                <Main>
                  <Sidebar room ={rooms} />
                  <Switch>
                       <Route path="/room">
                           <Chat />
                       </Route>
                       <Route path="/">
                            <Login setUser={setUser}/>
                       </Route>
                   </Switch>
                </Main> 
          </Container>
      }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
width : 100%;
height:100vh;
display:grid;
grid-template-rows : 38px auto;

`
const Main = styled.div`

display:grid;
grid-template-columns: 260px auto;

`