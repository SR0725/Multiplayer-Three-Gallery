import { setupHttpServer } from "./api";
import { setupWebSocket } from "./websocket";

// 取得環境變數
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

// 建立 HTTP Server
const httpServer = setupHttpServer(PORT);

// 建立 WebSocket Server
setupWebSocket(httpServer);
