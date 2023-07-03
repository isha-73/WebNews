import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Link ,Center} from '@chakra-ui/react'

export class NewsItem extends Component {
   
    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
       
        return (
            <>
            <a href={newsUrl} target='_blank'>
                <Card   m='3vh' width={'50vh'} height={'70vh'} className='news-card' backgroundColor={'#c0bdbd'}>
                    <CardHeader>
                        <Heading textAlign={'center'} size='md'> {title}</Heading>
                    </CardHeader>
                       <CardBody display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
                    <img src={imageUrl} alt="Business-Consulting-Image.jpg" />
                        <Text fontSize={'18px'} textAlign={'center'} p={'5'}>{description}</Text>
                    </CardBody>
                   
                    
                </Card>
                </a>
            </>
        )
    }
}

export default NewsItem