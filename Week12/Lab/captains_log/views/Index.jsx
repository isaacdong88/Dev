const React = require('react')

class Index extends React.Component {
  render() {
    return (
      <div>
        <nav>
            <a href="/logs/new">Create New Log</a>
        </nav>
        <ul>
            {this.props.logs.map((log,i)=>{
                return(
                    <div key={i}>
                        <li>
                            <a href={`/logs/${log.id}`}>{log.title}</a>
                        </li>

                        <form action={`/logs/${log.id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/>
                        </form>
                    </div>

                )
            })}
        </ul>
      </div>
    )
  }
}

module.exports = Index;