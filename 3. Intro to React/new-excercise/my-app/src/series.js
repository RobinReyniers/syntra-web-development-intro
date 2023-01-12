import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

export default function Series() {
  const [heroes, setHeroes] = useState([]);
  const ts = 1;
  const publicKey = "b8239b826dc6d752ed091a392c276a78";
  const hash = "ff5ce42447571e197fae4fd3e9308d3c";

  useEffect(() => {
    fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    )
      .then((res) => res.json())
      .then((data) => data.data.results)
      .then((data) => {
        setHeroes(data);
        console.log(heroes);
      });
  }, []);

  const showCharacters = (resourceURI) => {
    console.log(resourceURI);
    fetch(`${resourceURI}/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      {/* /* {heroes.map((hero) => {
        return (
          <div>
            <h2>${hero.name}</h2>
            <p>
              {hero.series.items.map((serie) => {
                return (
                  <p onClick={() => showCharacters(serie.resourceURI)}>
                    ${serie.name}
                  </p>
                );
              })}
            </p>
          </div>
        );
      })}  */}
      return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      */
    </div>
  );
}
