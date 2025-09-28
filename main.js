const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    // nenhuma preload necessária para este app simples
  });

  win.loadFile('index.html');
  // win.webContents.openDevTools(); // descomente se quiser abrir DevTools automaticamente
}

app.whenReady().then(createWindow);

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
