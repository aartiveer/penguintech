import React from 'react';

import { FaGithub, FaLinkedin, FaGoogle} from 'react-icons/fa';
import './SocialIcons.css';

const SocialIcons = () => (
    <div className='social-icons'>
        <FaGithub />
        <FaLinkedin />
        <FaGoogle />
    </div>
);

export default SocialIcons;