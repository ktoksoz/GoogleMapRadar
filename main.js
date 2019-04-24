const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;



let mainWindow;

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({width: 600, height: 600});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:', 
        slashes: true
    }));
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
    //mainWindow.webContents.openDevTools();

});

const mainMenuTemplate = [
    {
        label: 'File', 
        submenu: [
            {
                label: 'Quit',
                accelerator: process.platform =='darwin'? 'Command+Q':'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
];

