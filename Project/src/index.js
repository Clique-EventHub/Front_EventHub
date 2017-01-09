import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardList from './components/cardList';
// import BootstrapCarousel from './components/bootstrap-carousel';
// import SlickCarousel from './components/slick-carousel';
import CarouselTop from './components/carousel-top';
import TopNavBar from './components/navbar';
import EventDetail from './components/eventDetail';
import axios from 'axios';

const url = "https://api.github.com/users/mralexgray/repos";

class App extends Component {
    constructor(props) {
        super(props);

        //Dummy data
        // var test = [];
        // axios.get(url).then((data) => {
        //     test = data.data;
        //     axios.get(url).then((dataIn => {
        //         test.push({"dataIn": dataIn.data});
        //         console.log("In: ", test);
        //     }))
        //     console.log(test);
        // })


        this.state = {
            'cardList_1': [
                {
                    'title': 'Hello',
                    'date': 'unknown',
                    'view count': 20,
                    'id': '1',
                    'poster': '/resource/img/Hub/New_big_00.png'
                },
                {
                    'title': 'Hello 2',
                    'date': 'unknown',
                    'view count': 10,
                    'id': '2',
                    'poster': '/resource/img/Hub/New_big_01.png',
                    'profile': '/resource/img/event-icon/iCon-00.jpeg'
                },
                {
                    'title': 'Hello 3',
                    'date': 'unknown',
                    'view count': 30,
                    'id': '3',
                    'poster': '/resource/img/Hub/New_big_02.png'
                },
                {
                    'title': 'Hello 7',
                    'date': 'unknown',
                    'view count': 20,
                    'id': '4',
                    'poster': '/resource/img/Hub/New_big_02.png'
                },
                {
                    'title': 'Hello 8',
                    'date': 'unknown',
                    'view count': 10,
                    'id': '7',
                    'poster': '/resource/img/Hub/New_big_03.png',
                    'profile': '/resource/img/event-icon/iCon-03.jpeg'
                },
                {
                    'title': 'Hello 9',
                    'date': 'unknown',
                    'view count': 30,
                    'id': '8',
                    'poster': '/resource/img/Hub/New_big_00.png'
                }
            ],
            'cardList_2': [
                {
                    'title': 'Hello 4',
                    'date': 'unknown',
                    'view count': 20,
                    'id': '1',
                    'poster': '/resource/img/Hub/Hot_big_00.png',
                    'profile': '/resource/img/event-icon/iCon-01.jpeg'
                },
                {
                    'title': 'Hello 5',
                    'date': 'unknown',
                    'view count': 10,
                    'id': '2',
                    'poster': '/resource/img/Hub/Hot_big_01.png'
                },
                {
                    'title': 'Hello 6',
                    'date': 'unknown',
                    'view count': 30,
                    'id': '3',
                    'poster': '/resource/img/Hub/Hot_big_02.png',
                    'profile': '/resource/img/event-icon/iCon-02.jpeg'
                },
                {
                    'title': 'Hello 7',
                    'date': 'unknown',
                    'view count': 20,
                    'id': '4',
                    'poster': '/resource/img/Hub/New_big_02.png'
                },
                {
                    'title': 'Hello 8',
                    'date': 'unknown',
                    'view count': 10,
                    'id': '7',
                    'poster': '/resource/img/Hub/New_big_03.png',
                    'profile': '/resource/img/event-icon/iCon-03.jpeg'
                },
                {
                    'title': 'Hello 9',
                    'date': 'unknown',
                    'view count': 30,
                    'id': '8',
                    'poster': '/resource/img/Hub/New_big_00.png'
                }
            ],
            'cardList_3': [
                {
                    'title': 'Hello 7',
                    'date': 'unknown',
                    'view count': 20,
                    'id': '1',
                    'poster': '/resource/img/Hub/New_big_02.png'
                },
                {
                    'title': 'Hello 8',
                    'date': 'unknown',
                    'view count': 10,
                    'id': '2',
                    'poster': '/resource/img/Hub/New_big_03.png',
                    'profile': '/resource/img/event-icon/iCon-03.jpeg'
                },
                {
                    'title': 'Hello 9',
                    'date': 'unknown',
                    'view count': 30,
                    'id': '3',
                    'poster': '/resource/img/Hub/New_big_00.png'
                },
                {
                    'title': 'Hello 7',
                    'date': 'unknown',
                    'view count': 20,
                    'id': '4',
                    'poster': '/resource/img/Hub/New_big_02.png'
                },
                {
                    'title': 'Hello 8',
                    'date': 'unknown',
                    'view count': 10,
                    'id': '7',
                    'poster': '/resource/img/Hub/New_big_03.png',
                    'profile': '/resource/img/event-icon/iCon-03.jpeg'
                },
                {
                    'title': 'Hello 9',
                    'date': 'unknown',
                    'view count': 30,
                    'id': '8',
                    'poster': '/resource/img/Hub/New_big_00.png'
                }
            ],
            'imageList_top_carousel': [
                {
                    'url': './resource/img/Carousel/00.jpg',
                    'header': 'Event 1 Name',
                    'description': 'Blah Blah Blah'
                },
                {
                    'url': './resource/img/Carousel/01.jpg',
                    'header': 'Event 2 Name',
                    'description': 'Blah Blah Blah'
                },
                {
                    'url': './resource/img/Carousel/02.jpg',
                    'header': 'Event 3 Name',
                    'description': 'Blah Blah Blah'
                },
                {
                    'url': './resource/img/Carousel/00.jpg',
                    'header': 'Event 4 Name',
                    'description': 'Blah Blah Blah'
                }
            ]
        };

        //this.setState({'cardList': [{...}, {...} {...}] });
        //<BootstrapCarousel imageList={this.state.imageList_top_carousel} />
        //<EventDetail />
        $('.main-container').parent().addClass("background-gray");
    }

    render() {
        return (
            <div>
                <TopNavBar page="home" />
                <div className="mask-all-container"></div>
                <CarouselTop imageList={this.state.imageList_top_carousel} />
                <div className="container">
                    <h1 className="inline margin-right-15">First</h1>
                    <a href="#">
                    View all <span className="glyphicon glyphicon-menu-right"></span>
                    </a>
                    <CardList cards={this.state.cardList_1} isLine={true} />
                    <h1 className="inline margin-right-15">Second</h1>
                    <a href="#">
                    View all <span className="glyphicon glyphicon-menu-right"></span>
                    </a>
                    <CardList cards={this.state.cardList_2} isLine={true} />
                    <h1 className="inline margin-right-15">Third</h1>
                    <a href="#">
                    View all <span className="glyphicon glyphicon-menu-right"></span>
                    </a>
                    <CardList cards={this.state.cardList_3} isLine={true} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.main-container'));

// <div>
//     <TopNavBar page="home" />
//     <div className="mask-all-container"></div>
//     <CarouselTop imageList={this.state.imageList_top_carousel} />
//     <div className="container">
//         <h1 className="inline margin-right-15">First</h1>
//         <a href="#">
//         View all <span className="glyphicon glyphicon-menu-right"></span>
//         </a>
//         <CardList cards={this.state.cardList_1} isLine={true} />
//         <h1 className="inline margin-right-15">Second</h1>
//         <a href="#">
//         View all <span className="glyphicon glyphicon-menu-right"></span>
//         </a>
//         <CardList cards={this.state.cardList_2} isLine={true} />
//         <h1 className="inline margin-right-15">Third</h1>
//         <a href="#">
//         View all <span className="glyphicon glyphicon-menu-right"></span>
//         </a>
//         <CardList cards={this.state.cardList_3} isLine={true} />
//     </div>
// </div>

// <div className="favourite-page-body">
//     <TopNavBar page="favourite" />
//     <div className="container" id="favourite">
//         <h1 className="inline margin-right-15">Favourite</h1>
//         <a href="#">
//         View all <span className="glyphicon glyphicon-menu-right"></span>
//         </a>
//         <CardList cards={this.state.cardList_1} isLine={false}/>
//     </div>
// </div>
