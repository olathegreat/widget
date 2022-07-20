// Google translate API key AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label : "Afrikaan",
        value : "af"
    },
    {
        label : "Arabic",
        value : "ar"
    },
    {
        label : "Hindi",
        value : "hi"
    },
    {
        label : "french",
        value : "fr"
    },
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText]= useState("");
  return (
    <div>
        <div className='ui form'>
            <div className='field'>
                <label>Enter a text</label>
            </div>

            <input value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        
        
        <Dropdown 
        label="select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}/>

        <h1>Output</h1>

        <Convert 
           text={text}
           language={language}
        />
    </div>

    
  );
}

export default Translate;
