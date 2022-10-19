const { app, BrowserWindow } = require('electron')

let mainWindow;
const createMainWindow = () => {
  	mainWindow = new BrowserWindow({
    	width: 1500,
    	height: 1000
  	})
  	 mainWindow.loadFile('mainWindow.html') // newly added
}

app.on('ready', () => { createMainWindow() })