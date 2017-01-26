import React, { Component } from 'react';
import DatePicker from '../components/datePicker';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postChannel, postEvent, fetchChannel, fetchEvent, deleteChannel, deleteEvent } from '../actions/index';

const channelInitial = {
    'name': '',
    'picture': '',
    'picture_large': ''
};

const eventInitial = {
    'title': '',
    'about': '',
    'channel': '',
    'picture': '',
    'picture_large': [],
    'video': '',
    'faculty_require': [],
    'year_require': [],
    'location': '',
    'date_start': '',
    'date_end': '',
    'contact_information': '',
    'tag': []
};

const initialState = {
    'term': '',
    'channel': channelInitial,
    'event': eventInitial,
};

export class SubmitForm extends Component {
    constructor(props) {
        super(props);

        this.state = initialState;

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmitChannel = this.onFormSubmitChannel.bind(this);
        this.onFormSubmitEvent = this.onFormSubmitEvent.bind(this);
        this.setDateStart = this.setDateStart.bind(this);
        this.setDateEnd = this.setDateEnd.bind(this);
        this.refreshChannel = this.refreshChannel.bind(this);
        this.refreshEvent = this.refreshEvent.bind(this);
        this.onFormSubmitDeleteChannel = this.onFormSubmitDeleteChannel.bind(this);
        this.onFormSubmitDeleteEvent = this.onFormSubmitDeleteEvent.bind(this);

    }

    componentDidMount() {
        document.title = "Create Dummy";
    }

    onFormSubmitDeleteChannel(event) {
        event.preventDefault();
        if(confirm("ID: " + document.getElementById("deleteChannelID").value +"\nAre you sure?")) {
            this.props.deleteChannel(document.getElementById("deleteChannelID").value);
            document.getElementById("deleteChannelID").value = "";
        }
    }

    onFormSubmitDeleteEvent(event) {
        event.preventDefault();
        if(confirm("ID: " + document.getElementById("deleteEventID").value +"\nAre you sure?")) {
            this.props.deleteEvent(document.getElementById("deleteEventID").value);
            document.getElementById("deleteEventID").value = "";
        }
    }

    refreshChannel() {
        this.props.fetchChannel();
        //console.log(this.props.fetch.channel);
    }

    refreshEvent() {
        this.props.fetchEvent();
        //console.log(this.props.fetch.event);
    }

    componentWillMount() {
        this.props.fetchChannel();
        this.props.fetchEvent();
    }

    setDateStart(dateStart) {
        let newEvent = {
            ...(this.state).event,
            date_start: dateStart
        }
        this.setState({...(this.state), event: newEvent })
    }

    setDateEnd(dateEnd) {
        let newEvent = {
            ...(this.state).event,
            date_end: dateEnd
        }
        this.setState({...(this.state), event: newEvent })
    }

    onInputChange(event) {
        var newEvent = {
            'title': document.getElementById("eventTitle").value,
            'about': document.getElementById("eventAbout").value,
            'channel': document.getElementById("eventChannel").value,
            'picture': document.getElementById("eventPicture").value,
            'picture_large': [document.getElementById("eventPictureLarge1").value, document.getElementById("eventPictureLarge2").value, document.getElementById("eventPictureLarge3").value],
            'video': document.getElementById("eventVideo").value,
            'faculty_require': [document.getElementById("eventFacultyRequire").value],
            'year_require': [document.getElementById("eventYearRequire").value],
            'location': document.getElementById("eventLocation").value,
            'date_start': document.getElementById("eventDateStart").value,
            'date_end': document.getElementById("eventDateEnd").value,
            'contact_information': document.getElementById("eventContact").value,
            'tag': [document.getElementById("eventTag1").value, document.getElementById("eventTag2").value, document.getElementById("eventTag3").value]
        };

        newEvent.picture_large = newEvent.picture_large.filter((item) => {
            if(item.length > 0) return item
        });

        newEvent.tag = newEvent.tag.filter((item) => {
            if(item.length > 0) return item
        });

        this.setState({
            ...(this.state),
            'term': event.target.value,
            'channel': {
                'name': document.getElementById("channelName").value,
                'picture': document.getElementById("channelPicture").value,
                'picture_large': document.getElementById("channelPictureLarge").value
            },
            'event': newEvent
        });
    }

    onFormSubmitChannel(event) {
        event.preventDefault();
        console.log("submit!!!\nObject sent: ", this.state.channel);
        if(confirm("Are you sure?")) {
            this.props.postChannel(this.state.channel);
            this.setState({ ...initialState, channelInitial });
        }
    }

    onFormSubmitEvent(event) {
        event.preventDefault();
        console.log("submit!!!\nObject sent: ", this.state.event);
        if(confirm("Are you sure?")) {
            this.props.postEvent(this.state.event);
            document.getElementById("eventPictureLarge1").value = "";
            document.getElementById("eventPictureLarge2").value = "";
            document.getElementById("eventPictureLarge3").value = "";
            document.getElementById("eventTag1").value = "";
            document.getElementById("eventTag2").value = "";
            document.getElementById("eventTag3").value = "";
            this.setState({ ...initialState, eventInitial });
        }
    }

    render() {
        return (
            <div>
                <h2>Channel</h2>
                <form onSubmit={this.onFormSubmitChannel} className="input-group">
                    <input
                        placeholder="name"
                        className="form-control"
                        value={this.state.channel.name}
                        id="channelName"
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder="picture"
                        className="form-control"
                        value={this.state.channel.picture}
                        id="channelPicture"
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder="picture_large"
                        className="form-control"
                        value={this.state.channel.picture_large}
                        id="channelPictureLarge"
                        onChange={this.onInputChange}
                    />
                    <span className="btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
                <hr />
                <h2>Event</h2>
                <form onSubmit={this.onFormSubmitEvent} className="input-group">
                    <input
                        placeholder="title - (require)"
                        className="form-control"
                        value={this.state.event.title}
                        id="eventTitle"
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder="channel (id) - (require)"
                        className="form-control"
                        value={this.state.event.channel}
                        id="eventChannel"
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder="about"
                        className="form-control"
                        value={this.state.event.about}
                        id="eventAbout"
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder="picture"
                        className="form-control"
                        value={this.state.event.picture}
                        id="eventPicture"
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder="picture_large 1"
                        className="form-control"
                        id="eventPictureLarge1"
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder="picture_large 2"
                        className="form-control"
                        id="eventPictureLarge2"
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder="picture_large 3"
                        className="form-control"
                        id="eventPictureLarge3"
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder="video"
                        className="form-control"
                        value={this.state.event.video}
                        id="eventVideo"
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder="faculty require"
                        className="form-control"
                        value={this.state.event.faculty_require}
                        id="eventFacultyRequire"
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder="year require"
                        className="form-control"
                        value={this.state.event.year_require}
                        id="eventYearRequire"
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder="location"
                        className="form-control"
                        value={this.state.event.location}
                        id="eventLocation"
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder="date_start"
                        className="form-control"
                        value={this.state.event.date_start}
                        id="eventDateStart"
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder="date_end"
                        className="form-control"
                        value={this.state.event.date_end}
                        id="eventDateEnd"
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder="contact_information"
                        className="form-control"
                        value={this.state.event.contact_information}
                        id="eventContact"
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder="tag 1"
                        className="form-control"
                        id="eventTag1"
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder="tag 2"
                        className="form-control"
                        id="eventTag2"
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder="tag 3"
                        className="form-control"
                        id="eventTag3"
                        onChange={this.onInputChange}
                    />
                    <DatePicker onDateStart={this.setDateStart} onDateEnd={this.setDateEnd} />
                    <span className="btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
                <hr />
                <div>
                    <h3>Channel ids</h3>
                    {(this.props.fetch.fetching) ? "Loading..." : this.props.fetch.channel.map((item, index) => { return (<p key={index} >name: {item.name}&nbsp;&nbsp;&nbsp;id: {item._id}&nbsp;&nbsp;&nbsp;tokenDelete: {(item.tokenDelete) ? 'true': 'false'}</p>); } )}
                    <span className="btn">
                        <button onClick={this.refreshChannel} className="btn btn-secondary">Refresh Channel</button>
                    </span>
                    <hr />
                    <h3>Event ids</h3>
                    {(this.props.fetch.fetching) ? "Loading..." : this.props.fetch.event.map((item, index) => { return (<p key={index} >name: {item.title}&nbsp;&nbsp;&nbsp;id: {item._id}&nbsp;&nbsp;&nbsp;owner: {item.channel}&nbsp;&nbsp;&nbsp;tokenDelete: {(item.tokenDelete) ? 'true': 'false'}</p>); } )}
                    <span className="btn">
                        <button onClick={this.refreshEvent} className="btn btn-secondary">Refresh Event</button>
                    </span>
                </div>
                <hr />
                <div>
                    <h3>Channel delete</h3>
                    <form onSubmit={this.onFormSubmitDeleteChannel} className="input-group">
                        <input
                            placeholder="channel id"
                            className="form-control"
                            id="deleteChannelID"
                        />
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-secondary">Delete Channel</button>
                        </span>
                    </form>

                    <hr />
                    <h3>Event delete</h3>
                    <form onSubmit={this.onFormSubmitDeleteEvent} className="input-group">
                        <input
                            placeholder="event id"
                            className="form-control"
                            id="deleteEventID"
                        />
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-secondary">Delete Event</button>
                        </span>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.post, fetch: state.fetch };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ postEvent, postChannel, fetchChannel, fetchEvent, deleteChannel, deleteEvent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm);
