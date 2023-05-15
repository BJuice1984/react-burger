import { useEffect } from "react";
// import { useSelector } from "react-redux";

function useClose() {

  function useEscClose(closeModal) {
    useEffect(() => {
      function handleEsc(e) {
        if (e.key === "Escape") {
          closeModal()
        }
      };
  
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc) //будет ли удаляться?
    }, [closeModal]);
  } 
  
  function useClickClose(closeModal, openedClass) {
    useEffect(() => {
      function handleClickClose(e) {
        if (e.target.className.includes(openedClass)) {
          closeModal()
        }
      };
      
      document.addEventListener("mousedown", handleClickClose);    
      return () => document.removeEventListener("mousedown", handleClickClose) //будет ли удаляться?
    }, [closeModal, openedClass])
  }

  return {
    useEscClose,
    useClickClose
  }
}

export default useClose;