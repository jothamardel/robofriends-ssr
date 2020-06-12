import Card from '../card/card';


const CardList = ({ robots }) => (
  robots.map((robot) => (
    <Card 
      key={robot.id}
      name={robot.name}
      username={robot.username}
      email={robot.email}
    />
  ))
);

export default CardList;