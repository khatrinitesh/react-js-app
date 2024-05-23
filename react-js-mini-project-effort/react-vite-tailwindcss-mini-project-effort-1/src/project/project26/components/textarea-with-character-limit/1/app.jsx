import React,{useState,useCallback} from 'react'

export default function TextAreaApp() {
  return (
    <>
        <Example limit={32} value="Hello!" />
    </>
  )
}


function Example({ rows, cols, value, limit }){
    const [content, setContent] = useState(value.slice(0, limit));

    const setFormattedContent = useCallback(
        text => {
          setContent(text.slice(0, limit));
        },
        [limit, setContent]
    );
    return (
        <div>
            <textarea rows={rows} cols={cols} value={content} onChange={e => setFormattedContent(e.target.value)}></textarea>
            <p>
                {content.length}/{limit}
            </p>
        </div>
      )
}