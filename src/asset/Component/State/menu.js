import { useState } from "react"
// import {FaBars} from 'react-icons/fa'

 const MobileMenu =()=> {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
        <nav>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
          </ul>
        </nav>
      </div>
    );
  }

  export default MobileMenu;
