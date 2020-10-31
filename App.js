
import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components'
import AppBar from './components/AppBar'
import ToolBar from './components/ToolBar'
import Users from './components/Users';
import Story from './components/Story';
import Feed from './components/Feed';


export default class App extends React.Component {
  render(){
    return (
    <Container>
      <StatusBar 
      backgroundColor ="#FFFFFF"
      barStyle="dark-content"
      />
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
      <AppBar></AppBar>
      <ToolBar></ToolBar>
      <Users></Users>
      <Story />
      <Feed></Feed>
      </ScrollView>
    </Container>
    );
  }
  }

const Container =styled.SafeAreaView`
  flex:1;
`



