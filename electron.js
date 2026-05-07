const { app, BrowserWindow } = require('electron');
const path = require('path');


function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Load the React URL in dev or the local HTML file in production
  win.loadURL(
    process.env.ELECTRON_START_URL || 'http://localhost:3000'
  );

  // In development, open the DevTools by default.
  // if (process.env.ELECTRON_START_URL) {
  //   win.webContents.openDevTools();
  // }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
