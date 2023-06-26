import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;

        return (
            <>
                <Card align='center' p='3vh' m='5vh'>
                    <CardHeader>
                        <Heading size='md'> {title}</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>{description}</Text>
                        <Text>{author}</Text>
                    </CardBody>
                    <CardFooter>
                        <Button colorScheme='blue'>View here</Button>
                    </CardFooter>
                </Card>
            </>
        )
    }
}

export default NewsItem