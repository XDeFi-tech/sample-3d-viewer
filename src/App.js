import React, { useState } from 'react';
import '@google/model-viewer/dist/model-viewer';
import Dropzone from 'react-dropzone';

import './App.css';

function App() {
    const [model, setModel] = useState(null);

    const onDrop = (acceptedFiles) => {
        setModel(URL.createObjectURL(acceptedFiles[0]));
    };

    return (
        <div className="App">
            {
                model
                    ? <model-viewer
                        className="viewer"
                        alt="Alt Text"
                        ar
                        ar-modes="webxr scene-viewer quick-look"
                        src={model}
                        powerPreference="default"
                        camera-controls
                        shadow-intensity="0"
                        shadow-softness="0.25"
                        animation-name="KeyAction"
                        autoplay
                        // skybox-image={Background}
                        exposure="5"
                        // environment-image={Background}
                    />
                    : <Dropzone onDrop={onDrop}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>Drag 'n' drop a model file here or click here to open file explorer</p>
                                </div>
                            </section>
                        )}
                </Dropzone>
            }
        </div>
    );
}

export default App;
