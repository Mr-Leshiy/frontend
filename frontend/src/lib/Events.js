import axiosInstance from "./Axios";
import { blobToData } from "./Utils";

export const postEventImage = async (image) => {
  image = await blobToData(image);
  try {
    const res = await axiosInstance.post(
      "/events/image",
      {
        image: image,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    let { id } = res.data;
    return id;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getEventImage = async (id) => {
  try {
    const res = await axiosInstance.get(`/events/image/${id}`);
    let { image } = res.data;
    return image;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const publishEvent = async (stakeAddress, event) => {
  try {
    const res = await axiosInstance.post(
      "/events/event/publish",
      {
        stakeAddress: stakeAddress,
        event: event,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return res.status;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getEvents = async (stakeAddress) => {
  try {
    const res = await axiosInstance.get(`/events/event/${stakeAddress}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const generateTickets = async (stakeAddress, ticketsAmount, event) => {
  try {
    const res = await axiosInstance.post(
      "/events/tickets/generate",
      {
        stakeAddress: stakeAddress,
        ticketsAmount: ticketsAmount,
        event: event,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
