import { Row, Col } from "antd";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import "./Home.css";
import { useState } from "react";
import axios from "axios";
export default function Home() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonUrl, setPokemonUrl] = useState("");
  const [pokemonAbility1, setPokemonAbility1] = useState("");
  const [pokemonAbility2, setPokemonAbility2] = useState("");

  function getInfoFromId(id) {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + id, {})
      .then((response) => {
        setPokemonName(response["data"]["name"]);
        setPokemonUrl(
          response["data"]["sprites"]["other"]["official-artwork"][
            "front_default"
          ]
        );
        setPokemonAbility1(response["data"]["abilities"][0]["ability"]["name"]);
        setPokemonAbility2(response["data"]["abilities"][1]["ability"]["name"]);
      });
  }

  return (
    <Row
      style={{
        backgroundColor: "#C42A29",
        height: "80vh",
        width: "80vw",
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: "1vw",
        borderColor: "# ",
      }}
    >
      <Col
        span={8}
        style={{
          backgroundColor: "#ccc",
          height: "60vh",
          marginRight: "4vw",
        }}
      >
        <LeftSide name={pokemonName} url={pokemonUrl} />
      </Col>
      <Col
        span={1}
        style={{
          backgroundColor: "#491B21",
          width: "100vw",
          height: "76vh",
          marginLeft: "2vw",
          marginRight: "2vw",
        }}
      ></Col>
      <Col
        span={8}
        style={{
          backgroundColor: "#ccc",
          height: "60vh",
          marginLeft: "4vw",
        }}
      >
        <RightSide
          name={pokemonName}
          ability1={pokemonAbility1}
          ability2={pokemonAbility2}
          onStateChange={getInfoFromId}
        />
      </Col>
    </Row>
  );
}
