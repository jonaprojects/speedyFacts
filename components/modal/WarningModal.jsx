import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Modal from "./Modal";

export default function WarningModal(props) {
  const [warningModalOpen, setWarningModalOpen] = useState(false);
  const router = useRouter();

  const openModal = useCallback(() => {
    setWarningModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setWarningModalOpen(false);
  }, []);

  useEffect(() => {
    openModal();
  }, []);

  return (
    <Modal
      isOpen={warningModalOpen}
      openModal={openModal}
      closeModal={closeModal}
      primaryText="I understand"
      secondaryText="Go Back"
      primaryAction={closeModal}
      secondaryAction={() => router.push("/")}
    >
      <h1 className="text-3xl md:text-5xl font-bold">Warning!</h1>
      <p className="md:text-xl text-slate-500 mt-4">
        This page contains Graphic description and imagery, including extreme
        violance and death. Viewer discresion advised.
      </p>
    </Modal>
  );
}
