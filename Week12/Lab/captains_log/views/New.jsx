const React = require('react')

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Log</h1>
        <form action="/logs" method='POST'>
            Title: <input type="text" name="title"/><br />
            Entry: <input type="textarea" name="entry"/><br />
            Ship Broken?: <input type="checkbox" name="shipIsBroken"/><br />
            <input type="submit" name="" value="Submit"/> {/*submit button*/}
        </form>

      </div>
    )
  }
}

module.exports = New;