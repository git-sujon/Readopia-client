import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
    return (
        <div>
            <Navbar/>
           <div className='px-10 py-20'>
           <Outlet/>
           </div>
        </div>
    );
};

export default MainLayout;