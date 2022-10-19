const { app, BrowserWindow, Menu } = require('electron') 

let mainWindow;
const createMainWindow = () => {
  	mainWindow = new BrowserWindow({
    	width: 1500,
    	height: 1000
  	})
  	 mainWindow.loadFile('mainWindow.html') 
}

// newly added

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
					createNewItemWindow() //newly added
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