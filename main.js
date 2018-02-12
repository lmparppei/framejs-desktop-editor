/*

Frame.js Desktop Editor

Desktop version of @mrdoob's marvellous Frame.js editor
by KAPITAN! / Lauri-Matti Parppei

*/

const devMode = false;
const electron = require('electron')
const {dialog} = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {

  mainWindow = new BrowserWindow({width: 1200, height: 850})

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))


  if (devMode) mainWindow.webContents.openDevTools()


  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  app.quit()
  
  if (process.platform !== 'darwin') {
    app.quit()
  }
  
})

/*
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
*/