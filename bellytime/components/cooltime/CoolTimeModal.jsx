import { Subject } from "../modal/Subject";
import { ModalButton } from "..";
import { DurationModify } from "..";
const CoolTimeModal = ({
  setShowModal,
  subject,
  content,
  setModify,
  setModalContent,
  modify,
}) => {
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
              onClick={() => setShowModal(false)}
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

          <div className="p-6 space-y-6">
            {!modify ?
              content.map((el) => (
              <p
                key={el}
                className="text-base leading-relaxed text-gray-500 dark:text-gray-400"
              >
                {el}
              </p>
            )):<DurationModify/>}
          </div>

          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            {!modify ? (
              <>
                <ModalButton
                  onClick={() => {
                    setModify((modify) => !modify);
                    
                  }}
                  label={"쿨타임수정"}
                  modal={"medium-modal"}
                />
                <ModalButton
                  onClick={() => setShowModal((modal) => !modal)}
                  label={"쿨타임 삭제"}
                  modal={"medium-modal"}
                />
              </>
            ) : (
              <ModalButton
                onClick={() => console.log("수정 완료")}
                label={"확인"}
                modal={"medium-modal"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { CoolTimeModal };
