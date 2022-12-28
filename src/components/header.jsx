import Dropdown from 'react-bootstrap/Dropdown';
import '../App.css';
import {Form,Nav} from 'react-bootstrap';


function Header(){
    return <>
    <div className='header'>
        <div><img className='logo' src="/logo.png" alt="logo"/></div>
        
        <div className="pl-30">
        <div>
            <p className='mb-0 category'>All Categories</p>
           <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                Departments
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Menu 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Menu 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Menu 3</Dropdown.Item>
            </Dropdown.Menu>
       </Dropdown>
       </div>

       <div className='p-15'>
       <Form.Group  controlId="formBasicEmail">
        <Form.Control className='search' type="text" placeholder="Search" />
      </Form.Group>
       </div>

       <div className='pr-30'>
            <p className='mb-0 category'>Hello, Sign In</p>
           <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
               My Account
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Menu 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Menu 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Menu 3</Dropdown.Item>
            </Dropdown.Menu>
       </Dropdown>
       </div>

       <div>
            <p className='mb-0 category'>My Cart</p>
           <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
             € 23.880
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Menu 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Menu 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Menu 3</Dropdown.Item>
            </Dropdown.Menu>
       </Dropdown>
       </div>
    </div>
   



    <div>
         <div className='main-nav'>
                <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item> { '|' }
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Shop</Nav.Link>
                </Nav.Item> { '|' }
                <Nav.Item>
                    <Nav.Link eventKey="link-2">About</Nav.Link>
                </Nav.Item> { '|' }
                <Nav.Item>
                    <Nav.Link eventKey="link-3" > Contact </Nav.Link>
                </Nav.Item> { '|' }
                <Nav.Item>
                    <Nav.Link eventKey="link-4" > Order Tracking </Nav.Link>
                </Nav.Item>
                </Nav>
         </div>


         <div className='side--nav'>
                <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                <Nav.Item>
                    <Nav.Link href="/home">For Sales & Support (+91)1234-5670</Nav.Link>
                </Nav.Item> { '|' }
                <Nav.Item>
                    <Nav.Link eventKey="link-1"> support@comnxt.com</Nav.Link>
                </Nav.Item> 
                </Nav>
         </div>
    </div>

       </div>
    </>
}

export default Header;