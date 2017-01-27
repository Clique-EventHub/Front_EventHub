import axios from 'axios';

export const POST_CHANNEL = 'POST_CHANNEL';
export const POST_EVENT = 'POST_EVENT';
export const FETCH_CHANNEL = 'FETCH_CHANNEL';
export const FETCH_EVENT = 'FETCH_EVENT';
export const DELETE_CHANNEL = 'DELETE_CHANNEL';
export const DELETE_EVENT = 'DELETE_EVENT';

const baseUrl ="http://188.166.241.104:1111/";
const urlEvent = "http://188.166.241.104:1111/event/";
const urlChannel = "http://188.166.241.104:1111/channel/";

export function postEvent(props) {
    console.log("props: ", props);
    const request = axios.post(urlEvent, props); //promise
    return {
        type: POST_EVENT,
        payload: request,
    };
}

export function postChannel(props) {
    console.log("props: ", props);
    const request = axios.post(urlChannel, props); //promise
    return {
        type: POST_CHANNEL,
        payload: request
    };
}

export function fetchChannel(props) {
    console.log(props);
    const request = axios.get(`${urlChannel}listAll`);
    return {
        type: FETCH_CHANNEL,
        payload: request
    }
}

export function fetchEvent(props) {
    console.log(props);
    const request = axios.get(`${baseUrl}listAll`);
    return {
        type: FETCH_EVENT,
        payload: request
    }
}

export function deleteChannel(props) {
    console.log(props); //props is id
    const request = axios.delete(`${baseUrl}channel?id=${props}`);
    return {
        type: DELETE_CHANNEL,
        payload: request
    }
}

export function deleteEvent(props) {
    console.log(props); //props is id
    const request = axios.delete(`${baseUrl}event?id=${props}`);
    return {
        type: DELETE_EVENT,
        payload: request
    }
}
