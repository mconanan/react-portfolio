import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Project = ({img, text, title, url}) => {

  return (
    <div>
      <Card style={{ height: "32rem", width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <a target="_blank" href={url}><Button variant="primary">See for Yourself!</Button></a>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default Project;
