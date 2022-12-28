import { useState } from "react";
import { categories } from "../utils/category";
import Card from 'react-bootstrap/Card';

function SideMenu(){

   const [checkedState, setCheckedState] = useState(
     new Array(categories.length).fill(false)
   );

   const handleOnChange=(index)=>{

    }

    

    return <>
     
     <div className="cardcontainer">
      <h5>Categories</h5>
      <Card className="categorycard">
      <Card.Body>
        <Card.Text>
            <ul style={{listStyleType:"none"}}>
            {categories.map((ele,index)=>{
                return(
                    
                    <li key={index}>
                        <input
                            type="checkbox"
                            name={ele.name}
                            value={ele.name}
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                            />{ele.name}
                    </li>
                )
            })}
        </ul>
        </Card.Text>
      </Card.Body>
      </Card>
      </div>

       <div className="cardcontainer">
       <h5>Categories</h5>
        <Card className="categorycard">
        <Card.Body>
            <Card.Text>
            
            </Card.Text>
        </Card.Body>
        </Card>
       </div>


        <div className="cardcontainer">
        <h5>Filter By Brand</h5>
            <Card className="categorycard">
            <Card.Body>
                <Card.Text>
                    <ul style={{listStyleType:"none"}}>
                    {categories.map((ele,index)=>{
                        return(
                            
                            <li key={index}>
                                <input
                                    type="checkbox"
                                    name={ele.name}
                                    value={ele.name}
                                    checked={checkedState[index]}
                                    onChange={() => handleOnChange(index)}
                                    />{ele.name}
                            </li>
                        )
                    })}
                </ul>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    </>
}


export default SideMenu;