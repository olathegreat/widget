import React ,{useState} from "react";
import Accordion from "./Accordion";
import Button from "./Button";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const items =[
    {
        title : "what is react",
        content : "React is basically a javascript framework"
    },
    {
        title : "who uses react",
        content : "majorly front end developers"
    },
    {
        title : "Do you like using react",
        content : "yes, i do a lot"
    },
]

const options = [
    {
      label: "This is red color" , 
      value: "red"
    },
    {
        label: "This is green color" , 
        value: "green"
    },
   {
        label: "This is blue color" , 
        value: "blue"
   },
]
const App = ()=> {
//     const [selected,setSelected] = useState(options[0]);
//     const [showDropdown,setShowDropdown]=useState(false);
//    return(
//        <div>
//             {/* <Accordion  items = {items}/>
//             <Button/>
//             <Search/> */}
//             <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>

//             { showDropdown?
//                  <Dropdown
//                  options ={options}
//                  selected={selected}
//                  onSelectedChange={setSelected}
    
                 
                 
//                  />: null
    
//             }
            
//        </div>
    
    
//    );
           const [selected,setSelected] = useState(options[0]);
           const [showDropdown,setShowDropdown]=useState(false);


   return(
   

       <div>
           <Header/>
           <Route path='/'>
              <Accordion  items = {items}/>

           </Route>
           <Route path='/search'>
               <Search/> 

           </Route>
           <Route path='/dropdown'>
           <Dropdown
                options ={options}
                 selected={selected}
                onSelectedChange={setSelected}
    
                 
                                 />

           </Route>
           <Route path='/translate'>
               <Translate/> 

           </Route>
           {/* <Translate/> */}
       </div>
      
   )
};

export default App;

