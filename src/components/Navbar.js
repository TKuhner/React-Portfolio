import { Link } from "react-router-dom";




const Navbar = () => {
    return (
        <nav className='bg-red z-40 w-full fixed top-0 py-6'>
            <div className="bg-red-500 justify-between">
                <h4 className="flex">TK</h4>
                <div className="flex">
                    <Link to='/' className=''><a>About</a></Link>
                    <Link to='/skills' className=''><a>Skills</a></Link>
                    <Link to='/projects' className=''><a>Projects</a></Link>
                    <Link to='/contact' className=''><a>Contact</a></Link>
                    <a href="">Resume</a>
                </div>
            </div>
            
        </nav>

    )
};
export default Navbar;
