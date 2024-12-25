import React, { useState } from 'react'
import TextEditor from "./TextEditor";
import useLocalStorage from '../Hooks/useLocalStorage';


function App() {
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [screenSize, setScreenSize] = useState();

  const srcDoc = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `

  return (
    <>
      <div className="pane top-pane">
        <TextEditor 
          language="xml" 
          title="HTML" 
          value={html} 
          onChange={setHtml} 
        />  
        <TextEditor 
          language="css" 
          title="CSS" 
          value={css} 
          onChange={setCss} 
        />  
        <TextEditor 
          language="javascript" 
          title="JS" 
          value={js} 
          onChange={setJs} 
        />
      </div>
      <label htmlFor="screenSize">Screen Size: </label>
      <select name="screenSize" id="screenSize" 
        onChange={() => {
          setScreenSize(value);
        }}>
        <option value="">Select Screen</option>
        <option value="390">Mobile</option>
        <option value="1024">Tablet</option>
        <option value="1750">Desktop</option>
      </select>
      <div className="Bottom-pane">
        <iframe
         srcDoc={srcDoc}
         title='output'
         sandbox='allow-scripts'   
         frameBorder="0"
         width="100%"
         height="100%"
         />
      </div>
      
    </>
  )
}

export default App
