import React from 'react'
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Sidebardata} from '../data/Sidebardata';
import{NewChannels} from '../data/Channeldata';

import AddIcon from '@material-ui/icons/Add';
function Sidebar() {
    return (
        <Container>
        
                <Workspace>
                    <Name>
                        React Community
                    </Name>
                    <NewMessage>
                        <AddCircleOutlineIcon />
                    </NewMessage>
                </Workspace>

                <MainChannels>

                    {
                        Sidebardata.map(item =>
                        (

                            <MainChannelItem>
                                    {item.icon}
                                    {item.text}
                             </MainChannelItem>

                        ))
                    }
                       
                </MainChannels>

                <ChannelContainer>
                    <NewChannelContainer>
                        <div>
                            Channels
                        </div>
                        <AddIcon />

                    </NewChannelContainer>
                    <ChannelsList>

                        {   
                            NewChannels.map(item =>(

                                <Channel>
                                    {item.name}
                                    {item.id}
                                </Channel>


                            ))



                        }

                    </ChannelsList>
                </ChannelContainer>
        
        </Container>
    )
}
export default Sidebar

const Container = styled.div`
background: #3F0E40
`;


const Workspace = styled.div`
color:white;
height:64px;
display : flex;
align-items:center;
padding-left:19px;
justify-content : space-between;
border-bottom: 1px solid #532753;
`;

const Name = styled.div`
`;


const NewMessage = styled.div`
width:36px;
height:36px;
background:white;
color:#3F0E40;
fill: #3F0E40;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:20px;
cursor:pointer;
`;


const MainChannels = styled.div`
padding-top:20px`;

const MainChannelItem = styled.div`
color:rgb(188,171,188);
display: grid;
grid-template-columns:15% auto;
height:28px;
align-items:center;
padding-left:19px;
cursor:pointer;
:hover{
    background : #350D36
   }
`;

const ChannelContainer = styled.div`
color:rgb(188,171,188);
margin-top:10px;

`;

const NewChannelContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:28px;
padding-left:19px;
padding-right:12px;

`;


const ChannelsList = styled.div``;

const Channel = styled.div`
height : 28px;
display:flex;
align-items:center;
padding-left:19px;
cursor:pointer;
:hover{
 background : #350D36
}
`;

