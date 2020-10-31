import React from 'react'
import { Button } from 'react-native'
import styled from 'styled-components'
import {Feather,MaterialCommunityIcons} from '@expo/vector-icons'


const AppBar =() =>{
return <Container>
    <Logo>facebook</Logo>
    <Row>
        <Buttton>
            <Feather 
            name ='search'
            size = {29}
            color = 'black'
            />
        </Buttton>
        <Buttton>
           <MaterialCommunityIcons 
           name='facebook-messenger'
           size ={29}
           color ='black'
           
           />
        </Buttton>
    </Row>
</Container>

}

export default AppBar

const Container = styled.View`
    width:100%;
    height:58px;
    padding:0 11px;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;

const Logo = styled.Text`
    color: #3a86e9;
    font-size:25px;
    font-weight:bold;
    letter-spacing:-.03px;
`
const Row = styled.View`
    flex-direction:row;
`
const Buttton =styled.TouchableOpacity`
    width:42px;
    height:42px;
    border-radius:21px;
    background-color:#EEEEEE;
    align-items:center;
    justify-content:center;
    margin-left:16px;
`;