import { useState } from "react";

export const useModalHandler = (modalTypes) => {
  const [modalsIsOpen, setModalsIsOpen] = useState(
    Object.keys(modalTypes).reduce((obj, key) => {
      obj[modalTypes[key]] = false;
      return obj;
    }, {}),
  );
  const openModal = (modalType) => () =>
    setModalsIsOpen((prev) => ({ ...prev, [modalType]: true }));
  const closeModal = (modalType) => () =>
    setModalsIsOpen((prev) => ({ ...prev, [modalType]: false }));
  return { modalsIsOpen, openModal, closeModal };
};
