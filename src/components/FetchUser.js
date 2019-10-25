import React, { Component } from 'react';

export default class FetchUser extends React.Component {
        state = {
                loading: true,
                person: null
        }
        async componentDidMount(){
                const url = 'https://api.randomuser.me/';
                const response = await fetch(url);
                const data = await response.json();
                this.setState = { person: data.results[0], loading: false};
                console.log(data);
        }
        render(){
                return(
                        <div className="FetchUser">{(this.state.loading || !this.state.person) ? <div>loading...</div>: <div>{this.state.person.name.first}</div>}</div>
                );
        }
}