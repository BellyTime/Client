import { Subject } from "./modal/Subject";
import { ModalButton } from ".";
import { useEffect } from "react";
export const Modal = ({ setModal, subject, content,close }) => {
  
  return (
    <div
      className={
        "overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full"
      }
      id="medium-modal"
      aria-hidden="true"
    >
      <div className="relative px-4 w-full max-w-lg h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
            {subject && <Subject subject={subject} />}

            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="medium-modal"
              onClick={close}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="p-6 space-y-6"></div>
          {content}
          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <ModalButton
              onClick={() => {
                setModal(false);
                //확인 눌르면 friendid 리스트 서버에 보내기.
              }}
              label={"확인"}
              modal={"medium-modal"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
