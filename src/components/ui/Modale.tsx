
import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import 'react-responsive-modal/styles.css';

interface SimpleModalProps {
  children: React.ReactNode;
}

export default function SimpleModal({ children }: SimpleModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="test-modal">
        <button onClick={() => setOpen(true)}>Ouvrir</button>
        <Modal open={open} onClose={() => setOpen(false)}>
          {children}
        </Modal>
      </div>
    </>
  );
}