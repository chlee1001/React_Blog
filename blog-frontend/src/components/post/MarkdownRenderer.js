import React, { Component } from 'react';
import marked from 'marked';
import 'github-markdown-css';
import highlight from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';

import 'highlight.js/styles/github.css';

highlight.registerLanguage('javascript', javascript);
highlight.registerLanguage('bash', bash);
highlight.registerLanguage('css', css);
highlight.registerLanguage('xml', xml);

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    const highlighted = highlight.highlightAuto(code).value;
    return highlighted;
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

class MarkdownRenderer extends Component {
  state = {
    html: ''
  };
  constructor(props) {
    super(props);
    if (props.body) {
      this.state.html = marked(props.body);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.body !== this.props.body) {
      this.setState({
        html: marked(this.props.body)
      });
    }
  }

  render() {
    return (
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: this.state.html }}
      />
    );
  }
}

export default MarkdownRenderer;
