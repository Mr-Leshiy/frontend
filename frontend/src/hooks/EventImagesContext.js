import React, { createContext, useContext, useState } from "react";

import { getEventImage } from "../lib/Events";

const EventImagesContext = createContext(null);

const EventImagesContextProvider = ({ children }) => {
  const [eventImages, setEventImages] = useState({});

  const fetchEventImage = async (image_id) => {
    if (image_id && !eventImages[image_id]) {
      const image = await getEventImage(image_id);
      if (image) {
        setEventImages((prevEventImages) => ({
          ...prevEventImages,
          [image_id]: image,
        }));
      }
    }
  };

  return (
    <EventImagesContext.Provider value={{ eventImages, fetchEventImage }}>
      {children}
    </EventImagesContext.Provider>
  );
};

export const useEventImagesContext = () => {
  const context = useContext(EventImagesContext);
  if (!context) {
    throw new Error(
      "useEventImagesContext must be used within a EventImagesContextProvider",
    );
  }
  return context;
};

export default EventImagesContextProvider;
