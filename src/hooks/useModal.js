import { useState } from "react";

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderPrice, setIsOrderPrice] = useState('')
  const [isComponent, setIsComponent] = useState('')


  const openModal = (item, component) => {
    setIsModalOpen(true);
    setIsOrderPrice(item)
    setIsComponent(component)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return {
    isModalOpen,
    openModal,
    closeModal,
    isOrderPrice,
    isComponent
  }
}