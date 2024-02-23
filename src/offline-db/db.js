// db.js
import Dexie from "dexie";

export const db = new Dexie("offlineUsers");
db.version(1).stores({
  users:
    "++id, username, password",
});
