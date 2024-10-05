"use client";

import { useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-70">
      <dialog
        ref={dialogRef}
        className="relative flex h-auto max-h-[500px] w-4/5 max-w-[500px] items-center justify-center rounded-lg border-none bg-white p-5 text-4xl font-medium"
      >
        {children}
        <button
          onClick={onDismiss}
          className="absolute right-2.5 top-2.5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-none bg-transparent text-2xl font-medium hover:bg-gray-200"
        >
          <span className="text-black">x</span>
        </button>
      </dialog>
    </div>,
    document.getElementById("root-modal")!,
  );
}
