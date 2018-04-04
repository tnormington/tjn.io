import React from 'react';
import Slide from './Slide';

const bg = require('../../../assets/slide/slide1.jpg');

export default () => {
    return (
        <Slide
            bg={bg}
            title="Welcome"
            content="I am a Designer / Developer living in Denver, Colorado. I enjoy building websites, music, and the great outdoors. This is my personal website showcasing my work." />
    )
}