import React, { Component } from 'react';

export default class SlickCarousel extends Component {
    constructor(props) {
        super(props);
        //Require imageList property
        // console.log(this.props.imageList);
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

        const carousel_item_slick = this.props.imageList.map((item, index) => {
            var name = "carousel" + index;

            return (
                <div key={name} onClick={this.test}>
                    <div className="slide-inner">
                        <a>
                            <img src={item.url} />
                            <p className="carousel-description">
                                <span className="text-large text-bold">{item.header}</span><br />
                                {item.description}
                            </p>
                        </a>
                    </div>
                </div>
            );
        });


        return (
            <section id="slick-content">
                <div className="slider-super-container">
                    <div className="slider-container">
                        <div className="slider-top">
                            {carousel_item_slick}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
