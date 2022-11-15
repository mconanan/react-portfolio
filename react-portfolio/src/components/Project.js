import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Project = ({img, text, title}) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <Button variant="primary">See for Yourself!</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Project;
