import { useState } from "react";
import React from "react";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/duotone-light.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';
    
function TextEditor (props){
    const [active, setActive] = useState(true);
    const {
        language,
        title,
        value,
        onChange,
        darkmode
    } = props

    function handleChange(editor, data, value){
        onChange(value);
    }
                                          
    return (
        <>
            <div className={`codeContainer ${active? '' : 'collapse'}`}>
                <div className="containerTitle">
                    {title}
                    <button
                        onClick={() => setActive(prevActive => !prevActive)}
                        className="codeContainerButton"
                    >`{active? 'Minimize' : 'Maximize'}`</button>
                </div>

                <ControlledEditor 
                    key={title}
                    onBeforeChange={handleChange}
                    value={value} 
                    className="codeMirrorWrapper"
                    options={{
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        theme: darkmode? 'material': 'duotone-light',
                        lineNumbers: true
                    }}               
                />

            </div>
        </>
    );
}
export default TextEditor;