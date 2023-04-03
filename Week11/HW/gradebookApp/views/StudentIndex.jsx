const React = require('react')
const style = {
  height: '30vh',
  width: '30vh'
}

class StudentIndex extends React.Component {
  render() {
    const {student, studentIndex} = this.props
    return (
      <div>
        <h1>{student.name}</h1> <br />
        <img style={style} src={student.img} alt="" /> <br />
        <ul><h2>Math</h2>
          <h4>Homework</h4>
          {student.grades?.math?.homeworks?.map((hw,i)=>{
            return(
              <li key={i}>{hw.lesson}, Score {hw.score}</li>
            )
          })}
          <h4>Tests</h4>
          {student.grades?.math?.tests?.map((test,i)=>{
            return (
              <li key={i}>{test.test}, Score {test.score}</li>
            )
          })}
        </ul>
          <br />
        <ul><h2>Reading</h2>
          <h4>Homework</h4>
          {student.grades?.reading?.homeworks?.map((hw,i)=>{
            return(
              <li key={i}>{hw.lesson}, Score {hw.score}</li>
            )
          })}
          <h4>Tests</h4>
          {student.grades?.reading?.tests?.map((test,i)=>{
            return (
              <li key={i}>{test.test}, Score {test.score}</li>
            )
          })}
        </ul>


        <div>
            <h2>Add Grades</h2>
            <form action={`/students/${studentIndex}`} method='POST'>
                <label htmlFor="subject">Subject: </label> 
                <select name="subject" id="subject">
                  <option value="math">Math</option>
                  <option value="reading">Reading</option>
                </select> <br />

                <label htmlFor="type">Type: </label> 
                <select name="type" id="type">
                  <option value="homeworks">Homework</option>
                  <option value="tests">Test</option>
                </select> <br />

                Assignment Name: <input type="text" name="lesson"/><br />
                Score: <input type="text" name="score"/><br />

                <input type="submit" name="" value="Add Grade" />
            </form><br />
            <a href="/"><button>GradeBook</button></a>

        </div>

        
      </div>
    )
  }
}

module.exports = StudentIndex