export default class View {
    constructor() {
        this.btsnStart = document.getElementById("btnStart");
        this.btsnStop = document.getElementById("btnStop");
        this.audioElement = document.getElementById("audio");
    }

    onRecordClick(command) {
        return () => {
            command();
            this.toggleAudioElement({ visible: false });
        };
    }

    onStopRecordClick(command) {
        return () => {
            command();
        };
    }

    configureStartRecordingButton(command) {
        this.btsnStart.addEventListener("click", this.onRecordClick(command))
    }

    configureStopRecordingButton(command) {
        this.btsnStop.addEventListener("click", this.onStopRecordClick(command))
    }

    toggleAudioElement({ visible }) {
        const classList = this.audioElement.classList;
        visible ? classList.remove("hidden") : classList.add("hidden");
    }

    playAudio(url) {
        const audio = this.audioElement;
        audio.src = url;
        audio.muted = false;
        this.toggleAudioElement({ visible: true });
        audio.addEventListener("loadedmetadata", _ => audio.play());
    }
}