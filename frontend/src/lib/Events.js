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

export const publishEvent = async (event) => {
    try {
        const res = await axiosInstance.post(
          "/events/publish",
          {
            ...event,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        console.log(res.status);
        return res.status;
      } catch (err) {
        console.log(err);
        return null;
      }
}
