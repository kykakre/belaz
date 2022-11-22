import React, { useState } from "react";
import { Button, Modal } from "antd";
import style from "./Modal.module.scss";
import ModalRegistr from "./ModalRegistr.jsx";
import ModalAuto from "./ModalAuto.jsx";
const ModalItem = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registr, setRegistr] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const registrathion = () => {
    setRegistr(false);
  };
  const autorize = () => {
    setRegistr(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(isModalOpen);
  return (
    <>
      <div onClick={showModal} className={style.link}>
        Войти
      </div>
      <Modal
        onCancel={handleCancel}
        visible={isModalOpen}
        className={style.modal}
        footer={false}
      >
        {registr ? (
          <ModalRegistr registrathion={registrathion} />
        ) : (
          <ModalAuto autorize={autorize} />
        )}
      </Modal>
    </>
  );
};

export default ModalItem;
