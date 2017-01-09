import React, { Component } from 'react';

export default class EventDetail extends Component {

    //require onExit from props

    render() {
        var tmpObj;
        if(typeof(this.props.eventData.profile) != "undefined") {
            tmpObj = (
                <div className="col-xs-8">
                    <img src={this.props.eventData.profile} className="profile-image" />
                    Channel name
                </div>
            );
        } else {
            tmpObj = (
                <div className="col-xs-8">
                    <img src="./resource/img/event-icon/iCon-09.jpeg" className="profile-image" />
                    Channel name
                </div>
            );
        }

        return (
            <div className="mask-all-active">
                <div className="text-right" onClick={this.props.onExit}>
                    <span className="glyphicon glyphicon-remove custom-text" aria-hidden="true"></span>
                </div>
                <div className="detail-pane text-left">
                    <div className="row">
                        {tmpObj}
                        <div className="col-xs-4 text-right">
                            <span className="glyphicon glyphicon-star text-larger favourite-text" aria-hidden="true"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={this.props.eventData.poster} className="poster-image" />
                        </div>
                        <div className="col-sm-6 description">
                            <p>{this.props.eventData.title}</p>
                            <p>{this.props.eventData.date}</p>
                            <p>Something</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
