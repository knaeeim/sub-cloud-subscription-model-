import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';

const HomeLayout = () => {

    const { state } = useNavigation();

    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='bg-[#90C2E7]'>
                {state === 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;