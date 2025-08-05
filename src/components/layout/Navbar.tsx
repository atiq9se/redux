
import { Link } from 'react-router';
import { ModeToggle } from '../mode-toggler';

const Navbar = () => {
    return (
        <nav className='max-w-7xl mx-auto h-16 flex items-center gap-3 px-5'>
            <div className='flex items-center'>
                Logo
            </div>
            <div className='flex gap-5'>
                <Link to="/">Tasks</Link>
                <Link to="/users">Users</Link>
            </div>
            <div className='ml-auto'>
                <ModeToggle></ModeToggle>
            </div>
        </nav>
    );
};

export default Navbar;