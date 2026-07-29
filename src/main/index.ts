import { join } from 'path';
import { app, shell, BrowserWindow, ipcMain, nativeTheme } from 'electron';

// electron-vite exposes the dev renderer URL via this env var; in a packaged
// app it is absent and we load the built HTML from disk instead.
const rendererDevUrl = process.env['ELECTRON_RENDERER_URL'];

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 940,
    minHeight: 600,
    show: false,
    autoHideMenuBar: true,
    title: 'CFEngine Policy Builder',
    backgroundColor: nativeTheme.shouldUseDarkColors ? '#21262A' : '#ffffff',
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: true,
      contextIsolation: true
    }
  });

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });

  // Open external links in the user's browser, never in-app.
  mainWindow.webContents.setWindowOpenHandler(details => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });

  // The app never navigates after load; anything else (dragged links, a
  // compromised renderer setting location.href) goes to the browser instead.
  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (url !== mainWindow.webContents.getURL()) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });

  if (rendererDevUrl) {
    mainWindow.loadURL(rendererDevUrl);
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
  }
}

app.whenReady().then(() => {
  app.setAppUserModelId('com.northerntech.cfengine-policy-builder');

  ipcMain.handle('theme:should-use-dark', () => nativeTheme.shouldUseDarkColors);

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
