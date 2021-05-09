import { io } from "socket.io-client";
import generalConfig from "../../configs/index";

export const socket = io(generalConfig.server_address);
