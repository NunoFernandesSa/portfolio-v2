//----- Curstom components -----
import { ModalProps } from "@/types/ModalProps";

//----- Types -----
import ModalContent from "./ModalContent";

export function Modal({ isOpen, onClose, title }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center p-4 z-50">
      <div className=" text-white rounded-lg max-w-6xl w-full p-6 max-h-[80vh] overflow-y-auto">
        {/* ----- background fixed ----- */}
        <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-primary">{title}</h2>
          <button
            onClick={onClose}
            className="text-[#7922f2] hover:text-purple-900 text-2xl cursor-pointer"
          >
            ×
          </button>
        </div>

        <ModalContent />

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#7922f2] hover:bg-purple-900 text-white rounded cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
