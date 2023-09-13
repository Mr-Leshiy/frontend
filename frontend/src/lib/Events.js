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
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getEventImage = async (id) => {
  try {
    const res = await axiosInstance.get(`/events/image/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
