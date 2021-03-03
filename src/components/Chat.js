import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
function chat() {
    return (
        <Container>

            <HeaderSection>

                <Channel>

                    <ChannelName>
                        #React Community
                    </ChannelName>
                    <ChannelInfo>
                            This is the React community channel
                    </ChannelInfo>

                </Channel>

                <ChannelDetail>
                        <div>
                            Details
                        </div>
                        <Info>
                            <InfoOutlinedIcon />
                        </Info>
                      
                </ChannelDetail>


            </HeaderSection>

            <MessageContainer>

               <ChatMessage />

            </MessageContainer>

            <ChatInput />

            



        </Container>
    )
}

export default chat;

const Container = styled.div`
display:grid;
grid-template-rows:64px auto min-content;
`;

const HeaderSection = styled.div`
//background:red;
padding-left:20px;
padding-right:20px;
display:flex;
align-items:center;
border-bottom: 1px solid rgba(83,39,83,.13);
justify-content: space-between;


`;

const Channel = styled.div`
`;

const ChannelDetail = styled.div`
display:flex;
align-items:center;
color:#606060;

`;

const ChannelName = styled.div`
font-weight:700;

`;

const ChannelInfo = styled.div`
font-weight:700;
color:#606060;
font-size: 13px;
margin-top: 8px;

`;
const Info = styled( InfoOutlinedIcon)`
margin-left:10px;
`

const MessageContainer = styled.div`
//background:yellow;
`;

