import services from "../data/services.json";
import { Col, Row } from "react-bootstrap";
import { Service } from "../components/Service";
import "./CSS/home.css";
export function Home() {
  return (
    <div className="p-4">
        <Row md={1} xs={1} lg={2} className="g-5">
          {services.map((item) => (
            <Col key={item.id}>
              <Service {...item} />
            </Col>
          ))}
        </Row>
    </div>
  );
}  