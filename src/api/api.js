import axios from "axios";
import { justGivingAPI } from "./config";
const request = axios.create({
  baseURL: "https://api.justgiving.com"
});

export const getFundraisingPageDetailsById = async pageId => {
  const fundraisingPage = await request.get(
    `/${justGivingAPI}/v1/fundraising/pagebyid/${pageId}`
  );
  return fundraisingPage;
};

const getRandomInteger = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);
