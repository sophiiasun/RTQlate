import React from "react";
import vmsg from "vmsg";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const backendRootUrl = "http://127.0.0.1:5000"

const recorder = new vmsg.Recorder({
  wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm"
});

const download = (dataurl, filename) => {
  const link = document.createElement("a");
  link.href = dataurl;
  link.download = filename;
  link.click();
}

class Record extends React.Component {
  state = {
    isLoading: false,
    isRecording: false,
    recordings: [],
    eyeContact: ""
  };

  // componentDidUpdate(prevState) {
  //   while (this.state.isRecording && !prevState.isRecording) {
  //     setTimeout(async () => {
  //       const response = await axios.get(`${backendRootUrl}/analyze-frame`);
  //       console.log(response);
  //     }, 2000);
  //   }
  // }

  record = async () => {
    this.setState({ isLoading: true });

    if (this.state.isRecording) {
      const blob = await recorder.stopRecording();
      this.setState({
        isLoading: false,
        isRecording: false,
        recordings: this.state.recordings.concat(URL.createObjectURL(blob))
      });
      await axios.post(`${backendRootUrl}/stop-gaze-tracking`);
      const filename = `RTQlit_recording_${uuidv4()}.mp3`;
      download(URL.createObjectURL(blob), filename);
      const response = await axios.post(`${backendRootUrl}/submit`, {filename});
      console.log(response);
    } else {
      try {
        await recorder.initAudio();
        await recorder.initWorker();
        recorder.startRecording();
        await axios.post(`${backendRootUrl}/start-gaze-tracking`);
        this.setState({ isLoading: false, isRecording: true });
        const analyzeFrames = async () => {
          if (this.state.isRecording) {
            const response = await axios.get(`${backendRootUrl}/analyze-frame`);
            this.setState({
              eyeContact: response.data.direction
            });
          }
          setTimeout(analyzeFrames, 500);
        }
        analyzeFrames();
      } catch (e) {
        console.error(e);
        this.setState({ isLoading: false });
      }
    }
  };
  render() {
    const { isLoading, isRecording, recordings } = this.state;
    return (
      <>
        <React.Fragment>
          <button disabled={isLoading} onClick={this.record} className="border rounded-full p-2 px-5 border-black my-4">
            {isRecording ? "Stop" : "Record"}
          </button>
          {/* <ul style={{ listStyle: "none", padding: 0 }}>
            {recordings.map((url) => (
              <li key={url}>
                <audio src={url} controls />
              </li>
            ))}
          </ul> */}
        </React.Fragment>
        <p>Eye Contact Status: {this.state.eyeContact}</p>
      </>
    );
  }
}

export default Record;
