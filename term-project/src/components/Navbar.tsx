import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-lg mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/documents" as={NavLink}>
            Documents
          </Nav.Link>
          <Nav.Link to="/tutorials" as={NavLink}>
            Tutorials
          </Nav.Link>
          <Nav.Link to="/links" as={NavLink}>
            Links
          </Nav.Link>
          <Nav.Link to="/reminders" as={NavLink}>
            Reminders
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          
          <Nav.Link to="/logIn" as={NavLink}>
            LogIn
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem" }}
          variant="outline-primary"
          className="rounded-square"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M11 3C11 2.44772 10.5523 2 10 2C9.44771 2 9 2.44772 9 3V4C9 4.55228 9.44771 5 10 5C10.5523 5 11 4.55228 11 4V3Z"
              fill="#4A5568"
            />{" "}
            <path
              d="M15.6568 5.75731C16.0473 5.36678 16.0473 4.73362 15.6568 4.34309C15.2663 3.95257 14.6331 3.95257 14.2426 4.34309L13.5355 5.0502C13.145 5.44072 13.145 6.07389 13.5355 6.46441C13.926 6.85494 14.5592 6.85494 14.9497 6.46441L15.6568 5.75731Z"
              fill="#4A5568"
            />{" "}
            <path
              d="M18 10C18 10.5523 17.5523 11 17 11H16C15.4477 11 15 10.5523 15 10C15 9.44771 15.4477 9 16 9H17C17.5523 9 18 9.44771 18 10Z"
              fill="#4A5568"
            />{" "}
            <path
              d="M5.05019 6.46443C5.44071 6.85496 6.07388 6.85496 6.4644 6.46443C6.85493 6.07391 6.85493 5.44074 6.4644 5.05022L5.7573 4.34311C5.36677 3.95259 4.73361 3.95259 4.34308 4.34311C3.95256 4.73363 3.95256 5.3668 4.34308 5.75732L5.05019 6.46443Z"
              fill="#4A5568"
            />{" "}
            <path
              d="M5 10C5 10.5523 4.55228 11 4 11H3C2.44772 11 2 10.5523 2 10C2 9.44771 2.44772 9 3 9H4C4.55228 9 5 9.44771 5 10Z"
              fill="#4A5568"
            />{" "}
            <path
              d="M8 16V15H12V16C12 17.1046 11.1046 18 10 18C8.89543 18 8 17.1046 8 16Z"
              fill="#4A5568"
            />{" "}
            <path
              d="M12.0009 14C12.0155 13.6597 12.2076 13.3537 12.4768 13.1411C13.4046 12.4086 14 11.2738 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 11.2738 6.59545 12.4086 7.52319 13.1411C7.79241 13.3537 7.98451 13.6597 7.99911 14H12.0009Z"
              fill="#4A5568"
            />{" "}
          </svg>
        </Button>
      </Container>
    </NavbarBs>
  );
}