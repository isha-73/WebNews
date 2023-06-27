import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Link ,Center} from '@chakra-ui/react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;

        return (
            <>
                <Card  p='1vh' m='3vh' width='80vh' >
                    <CardHeader>
                        <Heading textAlign={'center'} size='md'> {title}</Heading>
                    </CardHeader>
                       <CardBody >
                    <img src={imageUrl} alt="Business-Consulting-Image.jpg"  width="400px" height='200px'  />
                        <Text>{description}</Text>
                        
                    </CardBody>
                   
                    
                </Card>
            </>
        )
    }
}

export default NewsItem