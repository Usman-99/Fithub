import { useState } from "react";
import { AudioRecorder } from "react-audio-voice-recorder";
import AudioRecorderPolyfill from "audio-recorder-polyfill";
import image from "../Images/back.png";
// Adding MP3 support
AudioRecorderPolyfill.mimeType = "audio/mpeg";
window.MediaRecorder = AudioRecorderPolyfill;

const VoiceRecorder = () => {
  const [blobURL, setBlobURL] = useState("");
  const [prediction, setPrediction] = useState(null);

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    setBlobURL(url);
    sendAudioToAPI(blob);
  };

  const handleAudioUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setBlobURL(url);
      sendAudioToAPI(file);
    }
  };

  const sendAudioToAPI = async (blob) => {
    const formData = new FormData();
    formData.append("file", blob, "audio.mp3");

    try {
      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      setPrediction(result.prediction);
    } catch (error) {
      console.error("Error sending audio to API:", error);
    }
  };
  return (
    <>
      <div
        className="mt-5 w3-container w3-margin"
        style={{
          backgroundImage: image,
        }}
      >
        <div className="w3-center">
          <h3 className="mb-4 w3-center w3-xlarge">Predict Confidence Level</h3>
          <p className="w3-center w3-xlarge align-items-center mb-5 center-recorder">
            Start Recording
            <br />
            <br />
            <span>
              <AudioRecorder
                onRecordingComplete={addAudioElement}
                mimeType="audio/mpeg"
                audioTrackConstraints={{
                  noiseSuppression: true,
                  echoCancellation: true,
                }}
              />
            </span>
          </p>
        </div>
        <div className="w3-justify mb-5">
          {blobURL && (
            <div className="audio-container">
              <h2 className="text-center w3-center w3-xlarge">
                Recorded Audio
              </h2>
              <audio className="audio-element" controls src={blobURL}></audio>
              <button className="btn btn-lg btn-danger my-9">
                <a href={blobURL} download="recording.mp3">
                  Download Audio in MP3
                </a>
              </button>
            </div>
          )}

          <br />
          <div>
            <h2 className="text-center w3-xlarge audio-container">
              Upload Audio for Prediction
            </h2>
            <div className="w3-center my-4">
              <input
                className="bttn btn btn-lg btn-warning"
                type="file"
                accept="audio/*"
                onChange={handleAudioUpload}
              />
            </div>

            <br />
            <br />
            {prediction !== null && (
              <div>
                <h2 className="w3-xlarge mb-3 w3-center text-danger">
                  <b> Prediction Result</b>
                </h2>
                <p className="w3-center w3-large text-secondary">
                  <b>{prediction}</b>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
export default VoiceRecorder;
