import { useState } from "react";

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isComponent, setIsComponent] = useState('')


  const openModal = (component) => {
    setIsModalOpen(true);
    setIsComponent(component)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return {
    isModalOpen,
    openModal,
    closeModal,
    isComponent
  }
}