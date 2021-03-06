import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
function Header(props) {
    return (
      <Container>

            <Main>
                <AccessTimeIcon />
                    <SearchContainer>
                        <Search>
                            <input type="text" placeholder="Search..."/>
                        </Search>
                    </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    {props.user.name}
                </Name>
                <UserImage >
                    <img src={props.user.photo} alt="img"/>
                </UserImage>
                <Logout onClick={props.Signout} >
                    <ExitToAppOutlinedIcon />
                </Logout>
            </UserContainer>
      </Container>
    )
}

export default Header

const Container = styled.div`
background:#350d36;
color:white;
display:flex;
align-items : center;
justify-content : center; 
postion:relative;
box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);

`

const Main = styled.div`
display:flex;
margin-left:16px;
margin-right:16px;

`

const SearchContainer = styled.div`
min-width:400px;
margin-left:16px;
margin-right:16px;
`

const Search = styled.div`
box-shadow: inset 0 0 0 1px rgb(104 74 104);
width: 100%;
border-radius: 6px;
input{
    background-color:transparent;
    border:none;
    padding-left:8px;
    padding-right:8px;
    color:white;
    padding-top:4px;
    padding-bottom:4px;
}

input:focus{
    outline:none;
}
`

const UserContainer = styled.div`
display:flex;
align-items : center;
padding-right:16px;
poseition:absolute;
right:0;
`
const Name = styled.div`
padding-right:16px;
`
const UserImage = styled.div`
width:28px;
height:28px;
border:1.5px solid white;
border-radius:3px;
//padding-left:80rem;
//cursor:pointer;

img{
    width:100%;
}
`
const Logout = styled.div`
padding-top:5px;
padding-left:20px;
cursor:pointer;

`;