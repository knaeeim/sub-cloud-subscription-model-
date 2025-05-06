import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Loading from './Loading';
import Banner from './Banner';
import Categories from './Categories';
import PopulerProducts from './PopulerProducts';
import Counting from './Counting';

const Home = () => {
    const { loading } = useContext(AuthContext);

    useEffect(() => {
        document.title = 'SubCloud || Home';
    }, [])

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <PopulerProducts></PopulerProducts>
            <Counting></Counting>
        </div>
    );
};

export default Home;