import './App.css';
import {useEffect, useState} from 'react';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import db from './firebase';
import {auth} from './firebase';


function App() {


   const [rooms, setstate] = useState([]);

   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const getChannels = () =>{

    db.collection('rooms').onSnapshot((snapshot) =>{

     setstate(snapshot.docs.map((doc) => {
       return {id: doc.id , name : doc.data().name};
     })
     
     )

    })

  }

  const signOut = () =>
    {
        auth.signOut().then(() =>{
          localStorage.removeItem('user');
          setUser(null);
        })
    } 

useEffect(() => {
  getChannels();
}, [])
 
console.log("User is ", user);


  return (
    <div className="App">
      <Router>
      {     
         !user ? 

         <Login setUser={setUser} />

         :

          <Container>
              <Header  Signout={signOut} user={user}/>
                <Main>
                  <Sidebar room ={rooms} />
                  <Switch>
                       <Route path="/room/:channelID">
                            <Chat  />
                       </Route>
                       <Route path="/">
                            Select or create Channel 
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