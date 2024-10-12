"use client";
import React from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ModalAlertProps } from "@/utils/common";

const ModalAlert = ({
  title,
  message,
  btnLabel,
  isOpen,
  onClose,
}: ModalAlertProps) => {
  return (
    <Dialog className="relative z-10" open={isOpen} onClose={onClose}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-start mt-[220px] justify-center p-4 text-center sm:items-start sm:p-0">
          {" "}
          {/* Changed items-end to items-start */}
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="text-start sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-semibold leading-6 text-red-700"
                  >
                    {title}
                  </DialogTitle>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">{message}</p>
                  </div>

                  <div className="mt-4 w-full flex justify-center">
                    <button
                      type="button"
                      className="w-3/12 h-[40px] rounded-md bg-buttonPrimary px-3 py-2 text-sm font-semibold text-white hover:bg-buttonPrimaryHover"
                      onClick={onClose}
                      data-autofocus
                    >
                      {btnLabel}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ModalAlert;
