import React from 'react'
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
function Chat() {
    return (
        <ChatContainer>
            <ChatHeader>
                 <ChannelInfo>
                    <ChannelName>
                        # React Community 
                        <Staricon>
                            <StarOutlineIcon />
                        </Staricon>
                          
                    </ChannelName>
                 </ChannelInfo>  
                 <CommunityInfo>
                    We are a Community of React JS and officially React V16.8 Supports Hooks
                    <Details>
                        <Message>
                           Deatils
                           <Dicon>
                                 <InfoOutlinedIcon />
                           </Dicon> 
                        </Message>
                    </Details> 
                </CommunityInfo> 
            </ChatHeader>
        </ChatContainer>
    )
}

export default Chat
const ChatContainer = styled.div`
background :white;
`;

const ChatHeader = styled.div`
height: 65px;
//background:red;
display:grid;
grid-template-row:15% auto;
border-bottom: 0.5px solid rgb(54,69,79);


`;
const ChannelInfo = styled.div`
width:14.5rem;
height:100%;
//background:green;
`;
const ChannelName = styled.div`
font-family:Sans-serif;
padding-top:10px;
padding-left:10px;
font-weight:bold;
font-size:1rem;
color:black;
display:flex;
align-items:center;
justify-content:space-between;
`;
const Staricon = styled.div`
padding-right:2rem;
`
const CommunityInfo = styled.div`
font-size:0.9rem;
padding-left:10px;
display:flex;
align-items:center;
justify-content:space-between;
`
const Details = styled.div`
`
const Message = styled.div`
padding-right:20px;
font-family:Sans-serif;
display:flex;
align-items:center;
justify-content:space-between;
//padding-top:5rem;

`
const Dicon = styled.div`

padding-left:1rem;
//padding-bottom:5rem;
cursor:pointer;

`