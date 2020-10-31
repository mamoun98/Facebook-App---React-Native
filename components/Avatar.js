import React from 'react'
import styled from 'styled-components'

const Avatar = ({source , online, story}) => {
    return <Container>
        <User source={source} story = {story} />
        {online && <UserActive />}
    </Container>
}

export default Avatar

const Container = styled.View`
    width:40px;
    height:40px;
    position:relative;
`
const User = styled.Image`
    width:40px;
    height:40px;
    border-radius:20px;
    border-color:#1777f2;
    border-width:${props => (props.story ? '3px' : 0)};
`
const UserActive =styled.View`
    width:12px;
    height:12px;
    border-radius:8px;
    background:#4bcb14;
    position:absolute;
    bottom:-1px;
    right:-1px;
    border-width:2px;
    border-color:#FFFFFF;
`
