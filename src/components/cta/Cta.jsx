import React from "react";
import './Cta.css';

const Cta = () => {
    return (
        <div className='gpt3__cta'>
            <div className='gpt3__cta-content'>
                <p>What are you waiting for?</p>
                <h3>Register today to see what GPT3 can do for you!</h3>
            </div>
            <div className="gpt3__cta-btn">
                <button type='button'>Register</button>
            </div>
        </div>
    );
}

export default Cta;