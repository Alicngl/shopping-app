import { Button, Col, Image } from "antd";

function CardPage({ prd }) {
  return (
    <div>
      <Col
        // key={index}
        className="bg-white p-5 m-2 shadow-xl rounded-xl border w-60">
        <div align="center">
          <Image src={prd.image} width="70px" height={"70px"} />
          <div className="h-9 my-3">{prd.title.substring(0, 25)}...</div>
          <div>{prd.price}$</div>
          <Button justify="bottom">Satın Al</Button>
        </div>
      </Col>
    </div>
  );
}

export default CardPage;
