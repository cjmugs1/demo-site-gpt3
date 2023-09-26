import React from "react";
import Article from "../../components/article/Article";
import './Blog.css';

// Image imports
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';

const Blog = () => {
    return (
        <div className='gpt3__blog section__padding' id='blog'>
            <div className='gpt3__blog-heading'>
                <h1 className="gradient__text">A lot is happening, We're Blogging About It.</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className='gpt3__blog-container_groupA'>
                    <Article imgUrl={blog01} date="September 21, 2023" title="GPT3 in School; How your Kids are Learning with AI"/>
                </div>
                <div className='gpt3__blog-container_groupB'>
                    <Article imgUrl={blog02} date="August 18, 2023" title="Breakthrough in Cancer Research Made with the Help of GPT3"/>
                    <Article imgUrl={blog03} date="August 16, 2023" title="Will AI Take your Coding Job?"/>
                    <Article imgUrl={blog04} date="September 12, 2023" title="An AI Chef? A Look at a Bold New Restaurant"/>
                    <Article imgUrl={blog05} date="July 29, 2023" title="Will GPT3 Kill us All?"/>
                </div>
            </div>
        </div>
    );
}

export default Blog;