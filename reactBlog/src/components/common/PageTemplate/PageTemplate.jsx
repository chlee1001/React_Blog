import React from 'react';
import styled from 'styled-components';

import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header';
import SplashImage from '../MainSplash';
import PostView from '../../../containers/post/PostContainer';

const TemplateStyle = styled.div`
  h4 {
    margin-bottom: 0;
    text-align: center;
  }
  .renderer-wrapper {
    margin-top: 2rem;
  }
`;

const PageTemplate = () => {
    return (
        <TemplateStyle>
            <div>
                <Header />
                <SplashImage />
                <CssBaseline />
                <h4>최근 글 보기</h4>
                <PostView />
            </div>
        </TemplateStyle>

    );
};

export default PageTemplate;