import React, { Component } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './Home.css'
import images from '../../ProjectImages/ProjectImages';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return(
            <div>
                <Header />
                    <div className="splash-container">
                        <div className="splash">
                            <h1 className="splash-head">Web Chat App</h1>
                            <p className="splash-subhead">
                                Lets talk with our Loved ones
                            </p>
                            <div className="custom-button-wrapper">
                                <Link to="/login">
                                    <a class="my-super-cool-btn">
                                    <div className="dots-container">
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                    </div>
                                    <span className="buttoncooltext">
                                        Get Started
                                    </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

