const React = require('react');
const myStyle = {
    color: 'black',
    // backgroundColor: '#000000'
    'text-transform': 'capitalize'
};

class Index extends React.Component {
  render() {
    const {pokemon} = this.props;
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon</h1>
        <ul>
            {pokemon.map((poke,i)=>{
                return(
                    <li key={i}>
                    {poke.name} <br />
                    <img src={poke.img} alt="Poke" />
                </li>
                )
            })}
        </ul>
      </div>
    )
  }
}

module.exports = Index;