import { app, Menu } from 'electron';
import serveNextAt from "next-electron-server";
import { createWindow } from './helpers';

serveNextAt("next://app", {
  outputDir: "./app",
  port: 8888,
});

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
  });

  await mainWindow.loadURL("next://app/home");
  Menu.setApplicationMenu(null);
  mainWindow.webContents.openDevTools();
})();

app.on('window-all-closed', () => {
  app.quit();
});
