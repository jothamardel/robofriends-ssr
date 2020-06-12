
const Card = ({ name, username, email }) => (
  <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 pointer'>
    <img src={`https://robohash.org/set_set5/${name}?size=200x200`} />
    <div>
      <h2 className='f5'>{ name }</h2>
      <p>{ username }</p>
      <p>{ email }</p>
    </div>
  </div>
);

export default Card;