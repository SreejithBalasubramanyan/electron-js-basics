const { app, BrowserWindow } = require('electron')

const createMainWindow = () => {
  	const win = new BrowserWindow({
    width: 1500,
    height: 1000
  })
}

app.on('ready', () => { createMainWindow() })