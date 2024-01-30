import React from 'react';
import './App.css'
// import { SiBlockchaindotcom } from "react-icons/si";
// import blockchain from '../public/blockchain.png'
// import logo from '../public/blockchain.png'

// import logo from '../public/images/blockchain.png'

// import blockChain from '../public/blockchain.jpg'
// import {block} from '../images/blockchain.png';
import block from './images/blockchain.png'
// import blockTo from '../public/images/blockchain.png'

const Home = () => {
    return (
        <div>
            <img src={block} className="logo react" alt='' />
            {/* <img src={blockTo} alt='' /> */}
        </div>
    );
};

export default Home;
