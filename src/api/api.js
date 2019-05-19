import axios from "axios";
import { justGivingAPI } from "./config";
const request = axios.create({
  baseURL: "https://api.justgiving.com"
});

export const getParticipantsById = async participantId => {
  const participants = await axios.all([
    request.get(
      `/${justGivingAPI}/v1/fundraising/pagebyid/${participantId[0]}`
    ),
    request.get(
      `/${justGivingAPI}/v1/fundraising/pagebyid/${participantId[1]}`
    ),
    request.get(
      `/${justGivingAPI}/v1/fundraising/pagebyid/${participantId[2]}`
    ),
    request.get(
      `/${justGivingAPI}/v1/fundraising/pagebyid/${participantId[3]}`
    ),
    request.get(`/${justGivingAPI}/v1/fundraising/pagebyid/${participantId[4]}`)
  ]);
  return participants;
};

export const getRandomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const buildParticipantArray = data => {
  return data.map(participant => participant["data"]);
};

export const pageId = [
  2546738,
  2546740,
  2546765,
  2646765,
  2746765,
  2846765,
  2856765,
  2876765,
  2886765,
  2887765,
  2889765,
  2889465,
  2889265,
  2889165,
  2889115,
  2889112,
  2689112,
  2589112,
  2079112,
  2059112
];
