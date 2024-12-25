import React, { useState } from 'react'
import TextEditor from "./TextEditor";
import useLocalStorage from '../Hooks/useLocalStorage';


function App() {
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [screenSize, setScreenSize] = useState(1686);

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

      <div className='settings'>
        <h2>Settings</h2> <hr />
        <h3>Screen Size</h3>
        <label htmlFor="screenSize">Select Screen Size: </label>
        <select name="screenSize" id="screenSize" width="0.5rem"
          onChange={(event) => {
            setScreenSize(Number(event.target.value));
          }}>
          <option value="1686">Select Screen</option>
          <option value="390">Mobile</option>
          <option value="1024">Tablet</option>
          <option value="1750">Desktop</option>
        </select>
        <br />
        <label htmlFor="screenSize">Enter Screen Size: </label>
        <input type="number" placeholder='or enter screen size...' width="0.5rem"
          onChange={(event) => {
            setScreenSize(Number(event.target.value));
          }}
          />
      </div>

      <div className="Bottom-pane" style={{textAlign: 'center', backgroundColor: 'GrayText'}}>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder="0"
          width={screenSize}
          height="100%"
        />
      </div>

    </>
  )
}

export default App
