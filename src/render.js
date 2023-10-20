const videoElement = document.querySelector('video');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const videoSelectBtn = document.getElementById('videoSelectBtn');
videoSelectBtn.onclick = getVideoSources

const { desktopCapturer, remote } = require('electron');
const { Menu } = remote;

const mainWindow = new BrowserWindow({
  webPreferences: {
    nodeIntegration: true
  }
});

async function getVideoSources () {
  const inputSources = await desktopCapturer.getSources({
    types: ['window', 'screen']
  });
  const videoOptionsMenu = Menu.buildFromTemplate(
    inputSources.map(source => {
      return {
        label: source.name,
        click: () => selectSource(source)
      }
    })
  );
  videoOptionsMenu.popup();
}