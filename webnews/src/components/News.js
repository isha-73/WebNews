import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Container, Flex, Spacer,Center } from '@chakra-ui/react'

export class News extends Component {

constructor(){
    super();
    console.log("Hello I am a constructor from News Component");
    this.state = {
        articles: [],
      
    }
}

    render() {
        return (
            <>
                <div>News</div>
                <Container
                 padding='8vh'
                maxW="container.xl"
                       boxShadow="md" >
                    <Center>
                <Flex>
                    <NewsItem  />
                    <NewsItem  />
                </Flex>
                </Center>
                </Container>
            </>
        )
    }
}

export default News