import React from 'react';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser'; 

const Preview = ({txt}) => {
    return (
       <div id="preview" className="preview">
           <h3 className="preview-heading">Previewer</h3>
           <div id="content" className="previewer">{ReactHtmlParser(marked(txt))}</div>
       </div> 
    );
}

export default Preview;