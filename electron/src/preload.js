const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ipc", ipcRenderer);
