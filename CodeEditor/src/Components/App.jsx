import React, { useState } from 'react'
import TextEditor from "./TextEditor";
import useLocalStorage from '../Hooks/useLocalStorage';


function App() {
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [screenSize, setScreenSize] = useState(1686);
  const [darkMode, setDarkMode] = useState(true);

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
          darkmode={darkMode}
        />
        <TextEditor
          language="css"
          title="CSS"
          value={css}
          onChange={setCss}
          darkmode={darkMode}
        />
        <TextEditor
          language="javascript"
          title="JS"
          value={js}
          onChange={setJs}
          darkmode={darkMode}
        />
      </div>

      <div className='settings'>
        <h2>Settings</h2> <hr />
        <div className="scrSize">
          <h3>Screen Size</h3>
          <label htmlFor="screenSize">Select Screen Size: </label>
          <select name="screenSize" id="screenSize" width="0.5rem"
            onChange={(event) => {
              setScreenSize(Number(event.target.value));
            }}>
            <option value="1686">Select Screen</option>
            <option value="390">Mobile</option>
            <option value="1024">Tablet</option>
            <option value="1686">Desktop</option>
          </select>
          <br />
          <label htmlFor="screenSize">Enter Screen Size: </label>
          <input type="number" placeholder='or enter screen size...' width="0.5rem"
            onChange={(event) => {
              setScreenSize(Number(event.target.value));
            }}
          />
        </div>
        <div className='mode'>
            <select 
              onChange={(event) => {
              setDarkMode(Boolean(event.target.value === "1"));  
            }}>
              <option value="1">Dark Mode</option>
              <option value="0">Light Mode</option>

            </select>
        </div>

      </div>

      <div className="Bottom-pane" style={{ textAlign: 'center', backgroundColor: 'GrayText' }}>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          width={screenSize}
          height="100%"
        />
      </div>

    </>
  )
}

export default App
