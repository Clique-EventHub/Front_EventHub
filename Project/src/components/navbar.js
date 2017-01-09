import React, { Component } from 'react';

export default class TopNavBar extends Component {
    constructor(props) {
        super(props);
        //Require page property
    }



    render() {

        var rightNav = <div></div>;

        if(this.props.page == "favourite") {
            rightNav = (
                <ul className="nav navbar-nav">
                    <li><a href="#"><span className="glyphicon glyphicon-home icon-text" aria-hidden="true"></span>Home</a></li>
                    <li className="active navbar-selected"><a href="#"><span className="glyphicon glyphicon-star icon-text" aria-hidden="true"></span>Favourite</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-search icon-text" aria-hidden="true"></span>Search</a></li>
                </ul>
            );
        } else if (this.props.page == "search") {
            rightNav = (
                <ul className="nav navbar-nav">
                    <li><a href="#"><span className="glyphicon glyphicon-home icon-text" aria-hidden="true"></span>Home</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-star icon-text" aria-hidden="true"></span>Favourite</a></li>
                    <li className="active navbar-selected"><a href="#"><span className="glyphicon glyphicon-search icon-text" aria-hidden="true"></span>Search</a></li>
                </ul>
            );
        } else {
            rightNav = (
                <ul className="nav navbar-nav">
                    <li className="active navbar-selected"><a href="#"><span className="glyphicon glyphicon-home icon-text" aria-hidden="true"></span>Home</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-star icon-text" aria-hidden="true"></span>Favourite</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-search icon-text" aria-hidden="true"></span>Search</a></li>
                </ul>
            );
        }


        return (
            <nav className="navbar navbar-fixed-top">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Event Hub</a>
                </div>
                <div id="navbar" className="navbar-collapse navbar-right collapse">
                    {rightNav}
                </div>
              </div>
            </nav>
        );
    }
}
