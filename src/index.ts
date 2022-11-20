require('dotenv').config()
import { server } from "./config/server";

const port = process.env.PORT;

server(port);
