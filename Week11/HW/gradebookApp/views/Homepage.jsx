const React = require('react')

class Homepage extends React.Component {
  render() {
    const {students} = this.props
    return (
      <div>
        <h1>GradeBook</h1>
        <h2>Students</h2>
        <ul>
            {students.map((students,i)=>{
                return (
                    <li key={i}>
                        <a href={`/students/${i}`}>{students.name}</a>
                    </li>
                )
            })}
        </ul>
        <div>
            <h2>New Student</h2>
            <form action="/" method='POST'>
                Name: <input type="text" name="name"/> <br />
                Photo: <input type="text" name="img" /> <br />
                <input type="submit" name="" value="Add Student" />
            </form>
        </div>
      </div>
    )
  }
}

module.exports = Homepage