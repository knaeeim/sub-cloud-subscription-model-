import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Loading from './Loading';
import Banner from './Banner';
import Categories from './Categories';
import PopulerProducts from './PopulerProducts';

const Home = () => {
    const { loading } = useContext(AuthContext);

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <PopulerProducts></PopulerProducts>
        </div>
    );
};

export default Home;