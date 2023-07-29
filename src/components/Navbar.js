import { Link } from "react-router-dom";




const Navbar = () => {
    return (
        <nav className='m-0 bg-red z-40 w-full fixed top-0 py-6'>
            <div className="flex items-center justify-between">
                <h4 className="text-3xl font-bold p-8">TK</h4>
                <div className="flex items-center p-2">
                    <Link to='/' className=''><a className="p-2">About</a></Link>
                    <Link to='/skills' className=''><a className="p-2">Skills</a></Link>
                    <Link to='/projects' className=''><a className="p-2">Projects</a></Link>
                    <Link to='/contact' className=''><a className="p-2">Contact</a></Link>
                    <a href="" className="p-2">Resume</a>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;
