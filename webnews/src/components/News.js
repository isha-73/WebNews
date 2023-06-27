import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Container, Flex, Spacer, Center, Box } from '@chakra-ui/react'
import './News.css'
const apiKey = process.env.REACT_APP_API_KEY;

export class News extends Component {
    articles = []


    constructor() {

        super();
        console.log("Hello I am a constructor from News Component");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=india&category=business&apiKey=${apiKey}}`
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);

        this.setState({ articles: parsedData.articles })
    }

    render() {
        console.log("Hello I am a render from News Component");
        return (
            <>
                <Box width="100%" >



                    <div>News</div>

                  
                        <Flex wrap='wrap' justifyContent={'center'}>
                
                            {this.state.articles.map((element) => {
                                return <div >
                                    <NewsItem key={element.url} title={element.title?element.title.slice(0,80):""} description={element.description?element.description.slice(0,100):""}
                                        imageUrl={element.urlToImage} newsUrl={element.url} author={element.author}
                                        date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}


                        </Flex>
                    


                </Box>
            </>
        )
    }
}

export default News