import { Button, Col, Row } from "antd";
import { useState } from "react";

export default function RightSide(props) {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount((count) => {
      props.onStateChange(count + 1);
      return count + 1;
    });
  };
  const decreaseCount = () => {
    if (count > 1) {
      setCount((count) => {
        props.onStateChange(count - 1);
        return count - 1;
      });
    }
  };

  return (
    <div>
      <p>{props.name}</p>
      <p>{props.ability1}</p>
      <p>{props.ability2}</p>
      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col span={12}>
          <Button
            onClick={decreaseCount}
            style={{
              height: "120px",
              width: "12vw",
              borderWidth: "4px",
              borderColor: "#491B21",
            }}
          >
            <img src="../prev.png" alt="my image" />
          </Button>
        </Col>
        <Col span={12}>
          <Button
            style={{
              height: "120px",
              width: "12vw",
              borderWidth: "4px",
              borderColor: "#491B21",
            }}
            onClick={increaseCount}
          >
            <img src="../next.png" alt="my image" />
          </Button>
        </Col>
      </Row>
    </div>
  );
}
