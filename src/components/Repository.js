import React from 'react';

export default class Repository extends React.Component {
    render() {
        return (
            <div className="col-sm-6 col-lg-3 col-12 my-3 repo">
                <div className="card p-3 bg-white radius">
                    <h3 className="card-title cursive text-theme text-right">{this.props.name}</h3>
                    <a href={this.props.url} target="blank"><h6 className="card-text text-right">{this.props.full_name}</h6></a>
                    <h6 className="card-text text-right last_push text-secondary">Last push: {this.props.pushed_at}</h6>
                    <span className="language radius cursive mt-1">{this.props.language}</span>
                </div>
            </div>
        );
    }
}