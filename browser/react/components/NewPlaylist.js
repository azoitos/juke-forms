/**
 * Created by kieranderfus on 7/6/17.
 */
import React, { Component } from 'react';
import axios from 'axios';
import Main from './Main';

export default class NewPlaylist extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            inputValue: '',
            edited: false
        };
    }
    
    handleChange(event) {
        this.setState({ inputValue: event.target.value, edited: true })
    }
    handleSubmit(event) {
        event.preventDefault();

        const addNewPlaylist = this.props.addNewPlaylist;
        addNewPlaylist(this.state.inputValue);

        this.setState({ inputValue: '', edited: false })
    }

    render() {
        return (
            <div className="well">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>New Playlist</legend>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Name</label>
                            <div className="col-xs-10">
                                <input className="form-control" type="text"
                                    onChange={this.handleChange}
                                    value={this.state.inputValue}
                                />
                                {this.state.edited && !this.state.inputValue ? <div className="alert alert-warning">Please enter a name</div> : false}
                                {this.state.edited && this.state.inputValue.length > 16 ? <div className="alert alert-warning">Name is too long</div> : false}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button type="submit" className="btn btn-success"
                                    disabled={
                                        !this.state.inputValue || this.state.inputValue.length > 16
                                    }>Create Playlist
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
