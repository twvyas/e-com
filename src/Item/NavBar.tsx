/* eslint-disable @typescript-eslint/no-unused-vars */
import { Height } from '@material-ui/icons';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Select from 'react-select';


function NavBar(props: {
  searchItems(value: string): unknown;
  setCategories: (arg0: string) => void;
  selectionArr: string[];
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  titlesArr: string[];

}) {
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
    <Navbar expand="lg" className="bg-body-tertiary fixed-top border-bottom rounded-bottom shadow mb-5 bg-white rounded">
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
            <Nav.Link href="#" disabled>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <NavDropdown title={selectedValue} id="navbarScrollingDropdown" onSelect={handleSelect}>
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

            <Select
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              options={props.titlesArr.map((title) => ({ value: title, label: title }))}
              value={{ value: inputValue, label: inputValue }}
              onInputChange={(value) => setInputValue(value)}
              onChange={(selectedOption) => {
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
            />

            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;



// import React, { useState } from 'react';
// import { Navbar, Container, Nav, Form, NavDropdown, Button } from 'react-bootstrap';
// import Select from 'react-select';

// function NavBar({
//   searchItems,
//   setCategories,
//   selectionArr,
//   setSearchInput,
//   titlesArr,
// }) {
//   const [selectedValue, setSelectedValue] = useState('All');
//   const [inputValue, setInputValue] = useState('');

//   const handleSelect = (selectedItem: string) => {
//     setSelectedValue(selectedItem);
//     setCategories(selectedItem);
//     setSearchInput('');
//     setInputValue('');
//   };

//   return (
//     <Navbar expand="lg" className="bg-body-tertiary fixed-top border-bottom rounded-bottom shadow mb-5 bg-white rounded">
//       <Container fluid>
//         <Navbar.Brand href="#">Store</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
//             {/* Condensed Nav.Link elements */}
//             {[1, 2].map((index) => (
//               <Nav.Link key={index} href={`#action${index}`}></Nav.Link>
//             ))}
//           </Nav>
//           <Form className="d-flex">
//             <NavDropdown title={selectedValue} id="navbarScrollingDropdown" onSelect={handleSelect}>
//               {selectionArr.map((Selection, index) => (
//                 <NavDropdown.Item key={index} eventKey={Selection}>
//                   {Selection}
//                 </NavDropdown.Item>
//               ))}
//             </NavDropdown>
//             <Select
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//               options={titlesArr.map((title) => ({ value: title, label: title }))}
//               value={{ value: inputValue, label: inputValue }}
//               onInputChange={(value) => setInputValue(value)}
//               onChange={(selectedOption) => {
//                 setInputValue(selectedOption.value);
//                 setSearchInput(selectedOption.value);
//                 searchItems(selectedOption.value);
//               }}
//               styles={{
//                 control: (provided) => ({
//                   ...provided,
//                   width: '400px',
//                 }),
//               }}
//             />
//             <Button variant="outline-info">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

