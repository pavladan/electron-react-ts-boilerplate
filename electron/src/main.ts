import { BrowserWindow, app, ipcMain } from "electron";
import * as isDev from "electron-is-dev";
import * as path from "path";

let mainWindow: BrowserWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      preload: path.join(__dirname, "../assets/preload.js"),
      nativeWindowOpen: true,
      devTools: isDev,
    },
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "./index.html")}`
  );
  mainWindow.on("closed", () => mainWindow.destroy());
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  ipcMain.handle("channel", async (event, msg) => {
    console.log(msg);
    return { title: "response message", data: 1 };
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
