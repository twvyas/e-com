/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Select from 'react-select';
import DataList from 'react-datalist-field'
import { FaSearch } from "react-icons/fa";


function NavBar(props: {
  searchItems(value: string): unknown;
  setCategories: (arg0: string) => void;
  selectionArr: string[];
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  titlesArr: string[];
}) 
{
  const [selectedValue, setSelectedValue] = useState('All');
  // const [searchProduct, setSearchProduct] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const handleSelect = (selectedItem: string) => {
    setSelectedValue(selectedItem);
    props.setCategories(selectedItem);
    props.setSearchInput('');
    setInputValue('');
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top border-bottom rounded-bottom 
    shadow mb-5 bg-white rounded">
      <Container fluid>
        <Navbar.Brand href="/">Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"></Nav.Link>
            <Nav.Link href="#action2"></Nav.Link>
            <Nav.Link href="#" disabled>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <NavDropdown  title={selectedValue} id="navbarScrollingDropdown" onSelect={handleSelect}>
              {props.selectionArr.map((Selection: string, index: number) => (
                <NavDropdown.Item key={index} eventKey={Selection}>
                  {Selection}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              // options={props.titlesArr}
              aria-label="Search"
              onChange={(e) => {
                props.setSearchInput(e.target.value);
                props.searchItems(e.target.value);
              }}
            /> */}

            {/* <Select
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              options={props.titlesArr.map((title) => ({ value: title, label: title }))}
              value={{ value: inputValue, label: inputValue }}
              onInputChange={(value) => setInputValue(value)}
              onChange={(selectedOption: {value: string,label: string}) => {
                setInputValue(selectedOption.value);
                props.setSearchInput(selectedOption.value);
                props.searchItems(selectedOption.value);
              }}
              styles={{
                control: (provided) => ({
                  ...provided,
                  width: '400px',
                }),
              }}
            /> */}

            <input id="myDIV"
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              list="titlesList"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                props.setSearchInput(e.target.value);
                props.searchItems(e.target.value);
              }}

              style={{
                width: '400px',
              }}
            />
            <datalist id="titlesList">
              {props.titlesArr.map((title) => (
                <option key={title} value={title} />
              ))}
            </datalist>
   




            <Button variant="outline-dark"><FaSearch /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;



