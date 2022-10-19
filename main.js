const { app, BrowserWindow, Menu } = require('electron') // modified

let mainWindow;
const createMainWindow = () => {
  	mainWindow = new BrowserWindow({
    	width: 1500,
    	height: 1000
  	})
  	 mainWindow.loadFile('mainWindow.html') 
}

//newly added

let mainMenuHash = [ 
	{ 
		label: 'File', 
		submenu: [ 
			{
				label: 'New',
				accelerator: 'ctrl + shift + n',
				click(){
					console.log("need to trigger newItemWindow from here.")
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

//modified

app.on('ready', () => { 
	createMainWindow()
	let mainMenu = Menu.buildFromTemplate(mainMenuHash)
	Menu.setApplicationMenu(mainMenu) 
})