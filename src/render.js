const {app , BrowserWindow} = require('electron');
const path = require('path')

const videoElement = document.querySelector('video');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const videoSelectBtn = document.getElementById('videoSelectBtn');
videoSelectBtn.onclick = getVideoSources;

const { desktopCapture , remote} = require('electron'); // import the node.js module in the browser
const {Menu} = remote;
// get available video sources
async function getVideoSources(){
    const inputSources = await desktopCapture.getSources({
        types: ['window' , 'screen']
    });

    const videoOptionsMenu = Menu.buildFromTemplate(
        inputSources.map( source => {
            return {
                lable : source.name,
                click : () => selectSorce(source)
            };
        })
    )

    videoOptionsMenu.popup();
}
