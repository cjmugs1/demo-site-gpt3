import React from "react";
import possibilityImage from '../../assets/possibility.png';
import './Possibility.css';

const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id='possibilities'>
            <div className='gpt3__possibility-image'>
                <img src={possibilityImage} alt='possibility'/>
            </div>
            <div className='gpt3__possibility-content'>
                <h4>We have the skills to help you develop your application.</h4>
                <h1 className='gradient__text'> Checkout some of the awesome projects that have been made using GPT3!</h1>
                <h4>Request early access today!</h4>
            </div>
        </div>
    );
}

export default Possibility;