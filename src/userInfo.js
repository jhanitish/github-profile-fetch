import React from "react";
import styled from 'styled-components';

const UserInfoDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  background: #fff;
  padding: 2rem;
  border-radius: 40px;
  font-size: 1.2rem;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.12);
  margin-bottom: 40px;
`;

const Avatar = styled.div`
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    display: flex;
    align-items: flex-start;
`;

const Content = styled.div`
    line-height: 2rem;
`;

const Image = styled.img`
    border-radius: 50%;
    border: 2px solid #141414;
`;

const UserInfo = props => {
    return (
        <UserInfoDiv>
            <Avatar >
                <Image src={props.user.avatar_url} width="250px" alt="User"/>
            </Avatar>
            <Content>
                <h1>{ props.user.name }</h1>
                <p>
                    <strong>Bio: </strong>
                    {props.user.bio}
                </p>
                <p>
                    <strong>Location:</strong> 
                    {props.user.location}
                </p>
                <p>
                    <strong>Followers:</strong>
                    {props.user.followers}
                </p>
                <p>
                    <strong>Following:</strong>
                    {props.user.following}
                </p>
            </Content>
        </UserInfoDiv>
    );
};

export default UserInfo;