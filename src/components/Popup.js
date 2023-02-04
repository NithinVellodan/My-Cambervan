import React, { useState } from "react";
import styled from "styled-components";

function Popup() {
  const [images, setImages] = useState([
    {
      id: 1,
      image: require("../assets/caravan/image1.jpg"),
    },
    {
      id: 2,
      image: require("../assets/caravan/image2.jpg"),
    },
    {
      id: 3,
      image: require("../assets/caravan/image3.jpg"),
    },
    {
      id: 4,
      image: require("../assets/caravan/image4.jpg"),
    },
    {
      id: 5,
      image: require("../assets/caravan/image5.jpg"),
    },
    {
      id: 6,
      image: require("../assets/caravan/image6.jpg"),
    },
    {
      id: 7,
      image: require("../assets/caravan/image7.jpg"),
    },
    {
      id: 8,
      image: require("../assets/caravan/image8.jpg"),
    },
    {
      id: 9,
      image: require("../assets/caravan/image9.jpg"),
    },
    {
      id: 10,
      image: require("../assets/caravan/image10.jpg"),
    },
  ]);

  const renderImg = () => {
    return images.map((image) => (
      <Items>
        <Img src={image.image} />
      </Items>
    ));
  };

  return (
    <Div>
      <List>{renderImg()}</List>
    </Div>
  );
}

export default Popup;

const Div = styled.div`
  width: 1300px;
  height: 800px;
  border: 2px solid #fff;
  background: #4b4b4ba8;
  border-radius: 20px;
  overflow: scroll;
  padding: 50px;
  ::-webkit-scrollbar {
    display: none;
  }
  @media all and (max-width: 1080px) {
    height: 300px;
  }
  @media all and (max-width: 640px) {
    width: 400px;
  }
  @media all and (max-width: 480px) {
    width: 300px;
    height: 230px;
  }
`;
const Items = styled.li`
  width: 32%;
  margin-bottom: 20px;
`;
const Img = styled.img`
  display: block;
  width: 100%;
  height: 250px;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 500px;
  flex-wrap: wrap;
`;
