"use client";
import { Modal } from "@/components/ui/Modal";
import { useStoreModal } from "@/hooks/Use-store-modal";
import { useEffect } from "react";
import { useStore } from "zustand";

const SetupPage = () => {
const onOpen = useStoreModal((state)=> state. onOpen);
const isOpen = useStoreModal((state)=> state.isOpen );

useEffect (() => {
  if(!isOpen){
    onOpen()
  }
}, [isOpen,onOpen]);

  return null
   
  
};
export default SetupPage;
