import React, { Component } from 'react';

export default class BootstrapCarousel extends Component {
    constructor(props) {
        super(props);
        //Require imageList property
        console.log(this.props.imageList);
    }

    test() {
        var child = '<div class="mask-all-active">'
        + '<div class="text-right" onclick="hideDetail()">'
            + '<span class="glyphicon glyphicon-remove custom-text" aria-hidden="true"></span>'
        + '</div>'
        + '<div class="detail-pane text-left">'
            + '<div class="row">'
                + '<div class="col-xs-8">'
                    + '<img src="./resource/img/event-icon/iCon-09.jpeg" class="profile-image" />'
                    + 'Channel name'
                + '</div>'
                + '<div class="col-xs-4 text-right">'
                    + '<span class="glyphicon glyphicon-star text-larger favourite-text" aria-hidden="true"></span>'
                + '</div>'
            + '</div>'
            + '<div class="row">'
                + '<div class="col-sm-6">'
                    + '<img src="./resource/img/test-poster/00.jpg" class="poster-image" />'
                + '</div>'
                + '<div class="col-sm-6 description">'
                    + '<p>Event name</p>'
                    + '<p>Date time</p>'
                    + '<p>Something</p>'
                + '</div>'
            + '</div>'
        + '</div>'
        + '</div>';
        $('.mask-all-container').append(child);
    }

    render() {
        var index = 0;
        const carousel_indicator = this.props.imageList.map((item, index) => {
            if(index == 0) {
                return <li data-target="#myCarousel" data-slide-to={index} className="active" key={index} ></li>;
            }
            return <li data-target="#myCarousel" data-slide-to={index} key={index} ></li>;
        });

        const carousel_item = this.props.imageList.map((item, index) => {
            if(index == 0) {
                return(
                    <div className="item active" key={index} onClick={this.test}>
                        <img src={item.url} alt="Poster0" />
                        <div className="carousel-caption">
                            <h3>{item.header}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                );
            }
            var name = "Poster" + index;

            return (
                <div className="item" key={index} onClick={this.test}>
                    <img src={item.url} alt={name} />
                    <div className="carousel-caption">
                        <h3>{item.header}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            );
        });

        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="5000">
                <ol className="carousel-indicators">
                    {carousel_indicator}
                </ol>
                <div className="carousel-inner" role="listbox">
                    {carousel_item}
                </div>

                <a className="left carousel-control carousel-control-custom" href="#myCarousel" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control carousel-control-custom" href="#myCarousel" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}
