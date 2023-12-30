import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar(props: { setCategories: (arg0: string) => void; selectionArr: string[]; }) {
  const [selectedValue, setSelectedValue] = useState('All');
  // const [searchInput, setSearchInput] = useState('');


  const handleSelect = (selectedItem:string) => {
    setSelectedValue(selectedItem);
    props.setCategories(selectedItem);
    
  };

//   const searchItems = (searchValue) => {
//     setSearchInput(searchValue)
//     APIData.filter((item) => {
//         return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
//     })
// }

 

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"></Nav.Link>
            <Nav.Link href="#action2"></Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#" disabled>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <NavDropdown title={selectedValue} id="navbarScrollingDropdown" onSelect={handleSelect}> 
              {props.selectionArr.map((Selection:string, index:number) => (
                <NavDropdown.Item key={index} eventKey={Selection}>
                  {Selection}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
  
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => searchItems(e.target.value)}
            />

            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>  
      </Container>
    </Navbar>
  );
}

export default NavBar;