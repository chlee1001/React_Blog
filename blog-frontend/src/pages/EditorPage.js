import React from 'react';
import EditorTemplate from '../components/editor/EditorTemplate';
import EditorHeader from '../components/editor/EditorHeader';
import EditorPaneContainer from '../container/editor/EditorPaneContainer';
import PreviewPaneContainer from '../container/editor/PreviewPaneContainer';

const EditorPage = () => {
  return (
    <EditorTemplate
      header={<EditorHeader />}
      editor={<EditorPaneContainer />}
      preview={<PreviewPaneContainer />}
    />
  );
};

export default EditorPage;
