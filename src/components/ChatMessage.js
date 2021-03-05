
import React from 'react'
import styled from 'styled-components';
function ChatMessage() {
    return (
        <Container>

            <UserAvatar>
                <img src="https://randomuser.me/api/portraits/women/40.jpg" alt="user-profile"/>
            </UserAvatar>

            <MessageContent>
                <Name>
                    Aman Gupta
                    <span>
                        3/01/22 11:13:55 AM
                    </span>
                </Name>
                <Text>
                    Hello from React Community
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container =  styled.div`
//background:orange;
padding:8px 20px;
display:flex;
align-items:center;
:hover {
    background:#F7F7F7;
}
`;

const UserAvatar =  styled.div`
width:36px;
height:36px;
border-radius : 2px;
overflow:hidden;
margin-right:8px;

img{
    width:100%;
}
`;

const MessageContent =  styled.div`
display:flex;
flex-direction: column;
`;

const Name =  styled.span`
font-weight:900;
font-size:15px;
line-height:1.4;
margin-right:8px;
span{
    margin-left:8px;
    font-weight:400;
    color:rgb(97,96,97);
    font-size:13px;

}
`;

const Text =  styled.span`
`;


