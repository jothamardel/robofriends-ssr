import Card from '../card/card';
import { robots } from '../../utils/data';

const CardList = () => (
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