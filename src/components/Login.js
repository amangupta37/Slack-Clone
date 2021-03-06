
import React from 'react'
import styled from 'styled-components'
import {auth,provider} from '../firebase';

function Login(props) {

    const signIn = () =>{

        auth.signInWithPopup(provider)

        .then((result) =>{

            const newUser = {

                name:result.user.displayName,
                photo : result.user.photoURL
            }
            localStorage.setItem('user', JSON.stringify(newUser))
             props.setUser(newUser);
           
        })
        .catch((error) =>{

            alert(error.message);

        })
        
    }


    return (
        <Container>
            <Content>
                   
                <Slackimg src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png" />
                <h1>Sign in Slack</h1>
                <SigninButton onClick={()=>signIn()}>
                    Sign In with Google
                </SigninButton>
            
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
width:100%;
height:100vh;
background : #f8f8f8;
display:flex;
justify-content : center;
align-items:center;

`;

const Content = styled.div`

background : white;
padding:100px;
border-radius:5px;
display:flex;
flex-direction:column;
align-items:center;
justify-content : center;

`;

const Slackimg = styled.img`

height :100px;

`;

const SigninButton = styled.button`

margin-top:50px;
background:#0a8d48;
color:white;
border:none;
height:40px;
border-radius:4px;
cursor:pointer;
font-size:15px;

`;