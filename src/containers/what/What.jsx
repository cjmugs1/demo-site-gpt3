import React from "react";
import { Feature } from '../../components';
import './What.css';

const What = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='what'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title='What is GPT3?' text='Chat-GPT3 is the newest large language model from Open AI. Chapt-GPT3 employs the most powerful algorithm yet to answer any of queries with lightning speed and high precision' />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'> Endless Possibilities</h1>
                <p>Explore the library</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title='Chatbots' text='Use GPT3 to build chat bots that feel like talking with a human. Connect to our servers via an API and provide powerful customer support, sales funnels, or help lines.'/>
                <Feature title='Knowledgebase' text ='AI models use decision-making algorithms to learn from their training. They collect and review data points, and then apply their learning to achieve their goals. The more diverse and high-quality the data, the better the AI will learn'/>
                <Feature title='Education' text='Want to learn more about how GPT3 works? Visit openai.com to read and watch videos about the newest large language model.'/>
            </div>
        </div>
    );
}

export default What;