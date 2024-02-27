"use client";
import { useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
import Link from "next/link";

type Props = {
  title: string;

  children: React.ReactNode;
};

export default function IroModal({ title, children }: Props) {
  const searchParams = useSearchParams();
  const modalRef = useRef<null | HTMLDialogElement>(null);
  const showModal = searchParams.get("showModal");

  useEffect(() => {
    if (showModal === "2") {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [showModal]);

  const closeModal = () => {
    modalRef.current?.close();
  };

  const modal: JSX.Element | null =
    showModal == "2" ? (
      <dialog
        ref={modalRef}
        className="top-50 left-50 -translate-x-50 -translate-y-50 fixed z-10  rounded-xl backdrop:bg-gray-800/50"
      >
        <div className="max-w-fullbg-gray-200 flex w-[500px] flex-col">
          <div className="mb-4 flex flex-row justify-between bg-gray-400 px-5 pt-2 dark:bg-slate-600">
            <h1 className="text-2xl">{title}</h1>
            <Link href="/skills" scroll={false}>
              <button
                onClick={closeModal}
                className="mb-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded border-none bg-red-600 px-2 py-1 font-bold text-white dark:text-gray-700"
              >
                x
              </button>
            </Link>
          </div>
          <div className="px-5 pb-6">
            {children}
            <div className="mt-2 flex flex-row justify-end">
              <Link
                href="https://github.com/rsw359/Iro-Iro"
                className="text-blue-500"
              >
                Github Link
              </Link>
            </div>
          </div>
        </div>
      </dialog>
    ) : null;

  return modal;
}
