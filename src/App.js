import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  // const [color, setColor] = useState('white')

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const colorChange = (value) => {
    //setColor(value);
    document.body.style.backgroundColor = value;
    // setColor(event.target.value);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      // document.body.style.backgroundColor = '#42778b';
      colorChange('#42778b');
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

    } else {
      setMode('light');
      // document.body.style.backgroundColor = 'white';
      colorChange('white');
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} colorChange={colorChange} />
      <Alert alert={alert} />
      {/* <Navbar/> */}
      <div className='container my-3'>
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        {/* <About /> */}
      </div>

    </>
  );
}

export default App;
