import React from "react";
import './Header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className='gpt3__header-content'>
                <h1 className='gradient__text'>
                    Let's Build Something Amazing with Chat-GPT3
                </h1>
                <p>Chat-GPT3 is the newest large language model from Open AI. Chapt-GPT3 employs the most powerful algorithm yet to answer any of queries with lightning speed and high precision. How can your customers benefit from Chat-GPT3?</p>
                <div className='gpt3__header-content__input'>
                    <input type='email' placeholder="Enter your email" />
                    <button type='button'>Get Started</button>
                </div>
                <div className='gpt3__header-content__people'>
                    <img src={people} alt='People who like this'/>
                    <p>1,600 people requested access</p>
                </div>
            </div>
            <div className='gpt3__header-image'>
                <img src={ai} alt='Ai face'/>
            </div>
        </div>
    );
}

export default Header;