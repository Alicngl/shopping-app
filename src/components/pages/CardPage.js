import { Button, Col, Image, Row } from "antd";
import axios from "axios";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";

function CardPage() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  return (
    <div>
      <Row
        gutter={[48, 16]}
        className="p-5 "
        justify="center"
        align="bottom"
        height="full">
        {data &&
          data.map((x, index) => {
            return (
              <Col span={4} key={index} className="bg-white p-5 m-2 shadow-xl">
                <div align="center">
                  <Image src={x.image} width="70px" height={"70px"} />
                  <div>{x.title.substring(0, 30)}...</div>
                  <div>{x.price}$</div>
                  <Button justify="bottom">Satın Al</Button>
                </div>
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default observer(CardPage);
