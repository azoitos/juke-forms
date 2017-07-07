/**
 * Created by kieranderfus on 7/6/17.
 */
import React, {Component} from 'react';

export default class NewPlaylist extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            inputValue: ''
        };
    }

    handleChange (event) {
        this.setState({ inputValue: event.target.value })
    }
    handleSubmit (event) {
        // this.setState({ inputValue: event.target.value })
        event.preventDefault();
        console.log(this.state.inputValue);
        this.setState({inputValue: ''})
    }

    render() {
        return (
            <div className="well">
                <form className="form-horizontal" onSubmit={ this.handleSubmit }>
                    <fieldset>
                        <legend>New Playlist</legend>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Name</label>
                            <div className="col-xs-10">
                                <input className="form-control" type="text"
                                       onChange = { this.handleChange }
                                       value={this.state.inputValue}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button type="submit" className="btn btn-success">Create Playlist</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    };
}
