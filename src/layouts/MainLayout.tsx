import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
    return (
        <div>
            <Navbar/>
           <div className='px-0 md:px-10 py-10 md:py-20'>
           <Outlet/>
           </div>
        </div>
    );
};

export default MainLayout;