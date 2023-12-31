import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Container, Flex, Spacer, Center, Box, Button, IconButton, Heading } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import './News.css'
import PropTypes from 'prop-types'
import Loading from './Loading'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
    articles = []
    static defaultProps = {
        country: 'in',
        category: 'science'
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string

    }

    constructor(props) {
       
        super(props);
        console.log("In news js"+this.props.apiKey);
        console.log("Hello I am a constructor from News Component");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: 0
        }
        let count = 0
        document.title = `Web-News | ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1).toLowerCase()}`
    }
    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=10`
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
        this.props.setProgress(100);
    }
    // handlePrev = async () => {
    //     console.log("Previous");

    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=apikey&page=${this.state.page - 1}&pageSize=10`
    //     this.setState({ loading: true })
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     this.setState({ loading: false })
    //     this.setState({ articles: parsedData.articles })
    //     this.setState({ page: this.state.page + 1 })
    // }
    // handleNext = async () => {
    //     console.log("Next");
    //     if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 20)) {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=apikey&page=${this.state.page + 1}&pageSize=20`
    //         this.setState({ loading: true })
    //         let data = await fetch(url);
    //         let parsedData = await data.json()
    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parsedData.articles,
    //             loading: false
    //         })
    //     }
    // }
    fetchMoreData = async () => {
        this.props.setProgress(10);
        this.setState({page:this.state.page+1})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        
        this.setState({ articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,loading:false })
        this.props.setProgress(100);
    }

    render() {
        console.log("Hello I am a render from News Component");
        return (
            <>

                <Box marginTop={'15vh'} position={'absolute'} alignItems={"center"}>
                    <Heading 
                        // 
                        p='5'
                        fontSize='4xl'
                        whiteSpace="normal"
                        wordBreak="break-word">`Explore recent {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1).toLowerCase()} news over India with Top Headlines` </Heading>
                    {this.state.loading && <Loading />}
                   
                        <InfiniteScroll
                            dataLength={5}
                            next={this. fetchMoreData}
                            hasMore={this.state.articles.length !== this.state.totalResults}
                            // loader={<h4>Loading...</h4>}
                        >
                             <Flex wrap='wrap' justifyContent={'center'}>
                            {this.state.articles && this.state.articles.map((element) => {
                                return <div key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 80) : ""} description={element.description ? element.description.slice(0, 80)+"..." : ""}
                                        imageUrl={element.urlToImage} newsUrl={element.url} author={element.author}
                                        date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}

                            </Flex>
                                </InfiniteScroll>
                    
                        
                    {/* <div className="prevnext">
                        <Flex>
                            <IconButton
                                icon={<ArrowBackIcon />} // Replace IconName with the Chakra UI icon component you want to use

                                aria-label="Button"
                                label="Previous"
                                isDisabled={this.state.page <= 1}
                                onClick={this.handlePrev}
                            />
                            <Spacer />

                            <IconButton
                                icon={<ArrowForwardIcon />} // Replace IconName with the Chakra UI icon component you want to use
                                aria-label="Button"
                                label="Next"
                                isDisabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)}
                                onClick={this.handleNext}
                            />
                        </Flex>
                    </div> */}

                </Box>
            </>
        )
    }
}

export default News