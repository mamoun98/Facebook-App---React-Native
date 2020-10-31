import React from 'react'
import {}from 'react-native'
import styled from 'styled-components'
import Avatar from './Avatar'
import {Ionicons,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'

const ToolBar = () =>{
   return (
    <>
    <Container>
     <Row>
         <Avatar source={require('../assets/user1.jpg')} />
         <Input
         placeholder ="What's on your mind?"
         />
     </Row>
     <Divider />
     <Row>
         <Menu>
            <Ionicons 
            name = 'ios-videocam'
            size = {22}
            color ='#F44337'
            />
            <MenuText>Live</MenuText>
         </Menu>
         <Separator />
         
         <Menu>
            <MaterialCommunityIcons 
            name = 'image'
            size = {22}
            color ='#4CAF50'
            />
            <MenuText>Photo</MenuText>
         </Menu>
         <Separator />
 
         <Menu>
            <MaterialCommunityIcons 
            name = 'video-plus'
            size = {22}
            color ='#E141FC'
            />
            <MenuText>Room</MenuText>
         </Menu>
     </Row>   
    </Container>
    <ButtomDivider></ButtomDivider>
    </>
   )
 
   

}

export default ToolBar


const Container = styled.View`
   width:100%;
   height:92px;
`;

const Row = styled.View`
   flex-direction:row;
   width:100%;
   background-color:#FFFFFF;
   padding:0 11px;
   align-items:center;
`
const Input = styled.TextInput`
   width: 100%;
   height:50px;
   padding:0 12px;
   font-size:18px;
`
const Divider = styled.View`
   width:100%;
   height:1px;
   background: #f0f0f0;
   margin-top:2px;
`
const ButtomDivider = styled.View`
   width:100%;
   height:9px;
   background: #f0f2f5;
`
const Menu =styled.View`
   flex:1;
   flex-direction:row;
   align-items:center;
   justify-content:center;
   height:42px;
`
const MenuText =styled.Text`
   padding-left:11px;
   font-weight:500;
   font-size:12px;
`

const Separator = styled.View`
   width:1px;
   height:26px;
   background: #f0f0f0;
`