import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav className="navbar">
            <h2 className="primary-color">Notes app</h2>
          <div>

               <Link to="/" className="ml-3">Home</Link>
            <Link to="/addnote" className="ml-3">New Note</Link>
          </div>

        

        </nav>
    );
}
 
export default Nav;