import React from 'react'
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import FormatBoldOutlinedIcon from '@material-ui/icons/FormatBoldOutlined';
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined';
import FormatItalicOutlinedIcon from '@material-ui/icons/FormatItalicOutlined';
import StrikethroughSOutlinedIcon from '@material-ui/icons/StrikethroughSOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import LinkOffOutlinedIcon from '@material-ui/icons/LinkOffOutlined';
import FormatListNumberedOutlinedIcon from '@material-ui/icons/FormatListNumberedOutlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';




function ChatInput() {
    return (
        <Container>

            <InputConatiner>
                <form>
                    <input type="text" placeholder="Message here ...." />
                    <SendButton>
                        <SendIcon />
                    </SendButton>
                </form>

                <NewButtons>


                        <Newicon>
                                  <FlashOnOutlinedIcon />

                                   <FormatBoldOutlinedIcon />

                                   <FormatItalicOutlinedIcon />

                                   <StrikethroughSOutlinedIcon />

                                   <CodeOutlinedIcon />

                                   <LinkOffOutlinedIcon />

                                   <FormatListNumberedOutlinedIcon />

                                    <FormatListBulletedOutlinedIcon />
                        </Newicon>

                       
               
                </NewButtons>


            </InputConatiner>
        
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
//background:orange;
padding-left:20px;
padding-right:20px;
padding-bottom:24px;
`;

const InputConatiner = styled.div`
border: 2px solid #8D8D8E;
border-radius:4px;
form{
    display:flex;
    height:42px;
    align-items:center;
    padding-left:10px;
    input {
        flex:1;
        border:none;
        font-size:13px;
    }
    input:focus{
        outline:none;
    }
}
`;


const SendButton = styled.div`
background:#007a5a;
border-radius:2px;
width:32px;
height:32px;
display: flex;
justify-content: center;
align-items: center;
margin-right:5px;
cursor:pointer;
.MuiSvgIcon-root {

    width:18px;
    color : #D9D9D9;
}
:hover{
    background: #148567;
}
`;

const NewButtons = styled.div`
border: 1px solid #8D8D8E;
height:30px;
width:100%;
color:#8D8D8E;
 display:flex;
 align-items:center;


`;

const Newicon = styled.div`
padding-top:5px;
padding-left:5px;
cursor:pointer


`;

