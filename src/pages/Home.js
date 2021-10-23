import React from 'react';
import SearchBar from '../components/SearchBar';

import NavigationBar from '../components/NavigationBar';
import Jumbotron from '../components/Jumbotron';
import Stats from '../components/Stats';
import Boostlinks from '../components/Boostlinks';
import Footer from '../components/Footer';


const Home = () => {

    return (
        <>
                    <NavigationBar />
                    <Jumbotron />
                    <SearchBar />
                    <Stats />
                    <Boostlinks />
                    <Footer />
        </>
    )
}


export default Home;