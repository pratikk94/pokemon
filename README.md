Install antd

Make UI for pokedex:

import { Row, Col } from "antd";
export default function Home() {
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
        borderColor: "#491B21",
      }} >

<Col
span={8}
style={{
          backgroundColor: "#7C0001",
          height: "60vh",
          marginRight: "4vw",
        }} ></Col>
<Col
span={1}
style={{
          backgroundColor: "#491B21",
          width: "100vw",
          height: "78vh",
          marginLeft: "2vw",
          marginRight: "2vw",
        }} ></Col>
<Col
span={8}
style={{
          backgroundColor: "#7C0001",
          height: "60vh",
          marginLeft: "4vw",
        }} ></Col>
</Row>
);
}

Make left side and right side

Install axios
npm i axios
