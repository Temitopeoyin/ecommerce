"use client";

import React, { useEffect, useState } from "react";
// import { StoreModal } from "./Store-modal";
import { Modal } from "@/components/ui/Modal";
// import { Button } from "../ui/button";
import { Button } from "@/components/ui/button";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return(
  <>
    <Modal
      title="Are you Sure?"
      description="This Action can not be Undone"
      isOpen={isOpen}
      onClose={onClose}>
      <div className="pt-6 space-x-2 flex item-center justify-end w-full">
        <Button disabled={loading} variant={"outline"}>
          Cancel
        </Button>
        <Button disabled={loading} variant={"destructive"} onClick={onConfirm}>
          {" "}
          Continue
        </Button>
      </div>
    </Modal>
  </>
  )
};
