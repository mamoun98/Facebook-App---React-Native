import React from 'react'
import {View} from 'react-native'
import styled from 'styled-components'
import {Entypo,AntDesign,MaterialCommunityIcons} from '@expo/vector-icons'
import Avatar from './Avatar'

const Feed = () => {

    return (
        <>
        <Container>
            <Header>
                <Row>
                    <Avatar 
                    source={require('../assets/user2.jpg')}
                    />
                    <View style= {{paddingLeft:10}}>
                    <User>Mamoun Iqtait</User>
                    <Row>
                    <Time>9 min</Time>
                    <Entypo 
                        name='dot-single'
                        size={12}
                        color='#747476'
                    />
                         <Entypo 
                        name='globe'
                        size={12}
                        color='#747476'
                    />
                    </Row>
                    </View>
                </Row>
                <Entypo 
                        name='dots-three-horizontal'
                        size={15}
                        color='#222121'
                    />
            </Header>
            <Post>lorem eeeveeveve vevevevev eveveve</Post>
            <Photo source={require('../assets/post1.jpg')} />

            <Footer>
                <FooterCount>
                    <Row>
                        <IconCount>
                            <AntDesign 
                            name='like1'
                            size={12}
                            color='#FFFFFF'
                            />
                        </IconCount>
                        <TextCount>88 Likes</TextCount>
                    </Row>
                    <TextCount>24 Comments</TextCount>
                </FooterCount>
                
                <Separator />
                <FooterMenu>
                    <Button>
                        <Icon>
                            <AntDesign 
                                name = 'like2'
                                size = {20}
                                color = '#424240'
                            />
                        </Icon>
                        <Text>Like</Text>
                    </Button>
                    <Button>
                        <Icon>
                            <MaterialCommunityIcons
                                name = 'comment-outline'
                                size = {20}
                                color = '#424240'
                            />
                        </Icon>
                        <Text>Comment</Text>
                    </Button>
                    <Button>
                        <Icon>
                            <MaterialCommunityIcons
                                name = 'share-outline'
                                size = {20}
                                color = '#424240'
                            />
                        </Icon>
                        <Text>Share</Text>
                    </Button>
                </FooterMenu>
            </Footer>
            <ButtomDivider />

            <Header>
                <Row>
                    <Avatar 
                    source={require('../assets/user3.jpg')}
                    />
                    <View style= {{paddingLeft:10}}>
                    <User>Rabea jack</User>
                    <Row>
                    <Time>9 min</Time>
                    <Entypo 
                        name='dot-single'
                        size={12}
                        color='#747476'
                    />
                         <Entypo 
                        name='globe'
                        size={12}
                        color='#747476'
                    />
                    </Row>
                    </View>
                </Row>
                <Entypo 
                        name='dots-three-horizontal'
                        size={15}
                        color='#222121'
                    />
            </Header>
            <Post>Welcom Welcom Welcom Welcom Welcom Welcom Welcom Welcom Welcom Welcom Welcom Welcom Welcom </Post>
            <Photo source={require('../assets/post2.jpg')} />

            <Footer>
                <FooterCount>
                    <Row>
                        <IconCount>
                            <AntDesign 
                            name='like1'
                            size={12}
                            color='#FFFFFF'
                            />
                        </IconCount>
                        <TextCount>88 Likes</TextCount>
                    </Row>
                    <TextCount>24 Comments</TextCount>
                </FooterCount>
                
                <Separator />
                <FooterMenu>
                    <Button>
                        <Icon>
                            <AntDesign 
                                name = 'like2'
                                size = {20}
                                color = '#424240'
                            />
                        </Icon>
                        <Text>Like</Text>
                    </Button>
                    <Button>
                        <Icon>
                            <MaterialCommunityIcons
                                name = 'comment-outline'
                                size = {20}
                                color = '#424240'
                            />
                        </Icon>
                        <Text>Comment</Text>
                    </Button>
                    <Button>
                        <Icon>
                            <MaterialCommunityIcons
                                name = 'share-outline'
                                size = {20}
                                color = '#424240'
                            />
                        </Icon>
                        <Text>Share</Text>
                    </Button>
                </FooterMenu>
            </Footer>
            <ButtomDivider />
        </Container>
        </>
    )
}

export default Feed

const Container = styled.View`
    flex:1;
`
const Header = styled.View`
    height: 50px;
    flex-direction:row;
    align-items : center;
    justify-content:space-between;
    margin-top:6px;
    padding:0 11px;
`
const Row =styled.View`
    align-items:center;
    flex-direction:row;
`
const User = styled.Text`
    font-size:15px;
    font-weight:bold;
    color:#222121;
    
`
const Time = styled.Text`
    font-size:10px;
    color:#747476;
`
const Post = styled.Text`
    font-size:15px;
    color:#222121;
    line-height:16px;
    padding:0 11px;
    margin-top:10px;
`

const Photo = styled.Image`
    margin-top:9px;
    width:100%;
    height:300px;
`

const Footer = styled.View`
    padding: 0 11px;
`

const FooterCount = styled.View`
    flex-direction:row;
    justify-content:space-between;
    padding:9px 0;
`

const IconCount = styled.View`
    background:#1878f3;
    width:20px;
    height:20px;
    border-radius:10px;
    align-items:center;
    justify-content:center;
    margin-right:6px;
`

const TextCount = styled.Text`
    font-size:11px;
    color:#424240;
`

const Separator =styled.View`
    width:100%;
    height:2px;
    background:#F9F9F9;
`

const FooterMenu = styled.View`
    flex-direction:row;
    justify-content:space-between;
    padding: 9px 0;
`

const Button = styled.TouchableOpacity`
    flex-direction:row;
`

const Icon =styled.View`
    margin-right:6px;
`

const Text =styled.Text`
    font-size:12px;
    color:#424040;
`
const ButtomDivider = styled.View`
    width:100%;
    height:9px;
    background: #f0f2f5;
`