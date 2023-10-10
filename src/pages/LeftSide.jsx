import { Image } from "antd";

export default function LeftSide(props) {
  return (
    <div>
      <Image src={props.url}></Image>
      <p>{props.name}</p>
    </div>
  );
}
