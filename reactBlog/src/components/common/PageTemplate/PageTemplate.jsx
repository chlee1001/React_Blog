import React from 'react';
import Header from '../Header';
import SplashImage from '../MainSplash';
import PostList from '../PostList';

const PageTemplate = () => {
    return (
        <div>
            <Header />
            <SplashImage />
            <PostList/>
        </div>
    );
};

export default PageTemplate;