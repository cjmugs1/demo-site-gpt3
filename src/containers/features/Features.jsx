import React from "react";
import { Feature } from '../../components';
import './Features.css';


const featuresData = [
    {
        title: 'Generate human-like responses to queries.',
        text: 'GPT-3 is the most powerful language model ever. Trained on trillions of words, GPT-3 is capable of generating astonishingly human-like text.'
    },
    {
        title: 'Remember context and past conversations.',
        text: 'GPT-3 will \'remember\' up to 10,000 words so that the model can follow along with your users in conversation.'
    },
    {
        title: 'Read and interpret 10 different file types including csv, pdf, and docx.',
        text: 'Give GPT-3 a file and it will read and interpret the contents. Your users can even ask questions about the contents of the file.'
    },
    {
        title: 'Provide responses based on up to the minute information.',
        text: 'GPT-3 can browse the internet for real-time information, providing an unparalleled search experience which gets right to the heart of your users questions.'
    }
]

const Features = () => {
    return (
        <div className='gpt3__features section__padding' id='features'>
         <div className='gpt3__features-heading'>
            <h1 className="gradient__text">The Future is Now! Sign up for access to GPT3 at openai.com and take a step into the future with us.</h1>
            <p>Request early access today!</p>
         </div>
         <div className="gpt3__features-container">
            {featuresData.map((feature, index) => (
                <Feature title={feature.title} text={feature.text} key={feature.title + index} />
            ))}
         </div>
        </div>
    );
}

export default Features;