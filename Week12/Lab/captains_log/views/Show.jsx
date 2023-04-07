const React = require('react')

class Show extends React.Component {
    render() {
        return (
            <div>
                <h1>Log Show Page</h1>
                Title: {this.props.log.title} <br />
                Entry: {this.props.log.entry} <br />
                {this.props.log.shipIsBroken ? `The ship is broken`:`The ship is sailing`} <br />
                Created: {this.props.log.createdAt.toLocaleString()} <br />
                <a href="/logs">Back to Logs</a>

            </div>
        )
    }
}

module.exports = Show