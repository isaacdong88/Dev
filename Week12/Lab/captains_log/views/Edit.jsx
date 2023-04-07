const React = require('react');
// As you can see we are using the app layout

class Edit extends React.Component{
  render() {
    return (
      <div>      
     {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complete we will do that below*/}
      <form action={`/logs/${this.props.log.id}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" defaultValue={this.props.log.title}/><br/>
          Entry: <input type="text" name="entry"  defaultValue={this.props.log.entry}/><br/>
          Is Ship Broken:
              { this.props.log.shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type="checkbox" name="readyToEat"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </div>
    )
  }
}
module.exports= Edit;