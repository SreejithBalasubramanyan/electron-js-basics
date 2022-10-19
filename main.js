const { app, BrowserWindow, Menu, ipcMain } = require('electron') 

let mainWindow;
const createMainWindow = () => {
  	mainWindow = new BrowserWindow({
    	width: 1500,
    	height: 1000,
    	webPreferences: {
      		nodeIntegration: true,
      		contextIsolation: false,
    	}
  	})
  	 mainWindow.loadFile('mainWindow.html') 
}


const createNewItemWindow = () => {
  newItemWindow = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })
  newItemWindow.loadFile('newItemWindow.html')
}

let mainMenuHash = [ 
	{ 
		label: 'File', 
		submenu: [ 
			{
				label: 'New',
				accelerator: 'ctrl + shift + n',
				click(){
					createNewItemWindow() 
				}
			},
			{
				type: 'separator'
			},
			{
				role: 'quit'
			},
			
		] 
	},
	{
		label: 'view',
		submenu:[
			{
				role: 'toggleDevTools',
				label: 'open console'
			}
		]
	}
]



app.on('ready', () => { 
	createMainWindow()
	let mainMenu = Menu.buildFromTemplate(mainMenuHash)
	Menu.setApplicationMenu(mainMenu) 
})



app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('request_add_img', (event, arg) => {
  console.log(arg);
  newItemWindow.close()
  newItemWindow = null
  mainWindow.webContents.send('update_list', arg)
});