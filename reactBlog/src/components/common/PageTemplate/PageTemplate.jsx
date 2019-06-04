import React from 'react';
import Header from '../Header';
import SplashImage from '../MainSplash';
import PostView from '../../../containers/post/PostContainer';

const PageTemplate = () => {
    return (
        <div>
            <Header />
            <SplashImage />
            <PostView/>
        </div>
    );
};

export default PageTemplate;