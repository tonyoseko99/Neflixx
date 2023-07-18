import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const API_KEY = process.env.API_KEY;

export { API_KEY, axios };
