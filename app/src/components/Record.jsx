import React from "react";
import vmsg from "vmsg";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Webcam from "react-webcam";

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
    recording: null,
    eyeContact: "",
    gotResponse: false,
    numGoodEyeContact: 0,
    numBadEyeContact: 0,
  };

  horizontalRatio = [];
  verticalRatio = [];

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
        recording: URL.createObjectURL(blob)
      });
      await axios.post(`${backendRootUrl}/stop-gaze-tracking`);
      const filename = `RTQlit_recording_${uuidv4()}.mp3`;
      localStorage.setItem("recorderFileName", filename);
      download(URL.createObjectURL(blob), filename);
      const response = await axios.post(`${backendRootUrl}/submit`, {filename});
      this.setState({ gotResponse: true })
      localStorage.setItem("recording_content_analysis", JSON.stringify(await response.data));
      localStorage.setItem("horizontalRatios", this.horizontalRatio);
      localStorage.setItem("verticalRatios", this.verticalRatio);
      localStorage.setItem("numGoodEyeContact", this.state.numGoodEyeContact);
      localStorage.setItem("numBadEyeContact", this.state.numBadEyeContact);
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
            if (response.data.direction === "Looking center") {
              this.setState(prevState => {
                return { numGoodEyeContact: prevState.numGoodEyeContact + 1 };
              });
            }
            else {
              this.setState(prevState => {
                return { numBadEyeContact: prevState.numBadEyeContact + 1 };
              });
            }
            this.horizontalRatio.push(response.data.horizontal_ratio);
            this.verticalRatio.push(response.data.vertical_ratio);
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

  handleNextPage() {
    window.location.href = "/results";
  }

  render() {
    const { isLoading, isRecording, recording, gotResponse } = this.state;
    return (
      <>
        <div className="flex justify-center">
          <Webcam width={480} height={360} className="rounded-lg"/>
        </div>
        <div className="flex justify-center">
          <button disabled={isLoading} onClick={this.record} 
                  className="border rounded-full p-2 px-5 border-black my-4">
            {isRecording ? "Stop" : "Record"}
          </button>
        </div>
        <div className="text-center">
          <br/>
          {gotResponse && 
            <>
              <div className="text-center">
                <div className="flex justify-center">
                  <audio src={recording} controls />
                </div>
                <br/>
                <div className="flex justify-center">
                  <button onClick={this.handleNextPage} className="flex justify-center underline">
                    See Results →
                  </button>
                </div>
              </div>
            </>
            }
          {isRecording && <p>Eye Contact Status: {this.state.eyeContact === "Looking center" ? "Good eye contact!" : "Face the camera :("}</p>}
        </div>
      </>
    );
  }
}

export default Record;
