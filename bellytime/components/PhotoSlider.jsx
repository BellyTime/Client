import { Transition } from "@headlessui/react";
import { useState, useRef, useEffect } from "react";
import { v4 } from "uuid";
export const PhotoSlider = ({ images }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [moving, setMoving] = useState("right");
  const [steps, setSteps] = useState([
    "current",
    ...new Array(images.length - 1).fill("upcoming"),
  ]);

  const prevStep = () => {
    setMoving("left");
    setSteps((old) =>
      old.map((v, i) => {
        if (i === currentStep) {
          v = "upcoming";
        } else if (i === currentStep - 1) {
          v = "current";
        }
        return v;
      })
    );
    setCurrentStep(currentStep - 1);
    return false;
  };

  const nextStep = async () => {
    setMoving("right");

    if (true) {
      setSteps((old) =>
        old.map((v, i) => {
          if (i === currentStep) {
            v = "complete";
          } else if (i === currentStep + 1) {
            v = "current";
          }
          return v;
        })
      );
      setCurrentStep(currentStep + 1);
    }
    return false;
  };

  const wrapper = useRef(null);
  const [wrapperWidth, setWrapperWidth] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (wrapper.current !== null) {
        setWrapperWidth(wrapper.current.offsetWidth);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative bg-white flex">
      <div className="flex-1 flex flex-col justify-top py-12 px-4 sm:px-6 ">
        <div
          className="flex items-start overflow-hidden w-96 sm:w-full"
          ref={wrapper}
        >
          <div className="flex flex-nowrap ">
            {images.map((el, index) => (
              <div>
                <Transition
                  appear={false}
                  unmount={false}
                  show={currentStep === index}
                  enter="transform transition ease-in-out duration-500"
                  enterFrom={
                    moving === "right"
                      ? `translate-x-96 opacity-0`
                      : `-translate-x-96 opacity-0`
                  }
                  enterTo={`translate-x-0 opacity-100`}
                  leave="transform transition ease-in-out duration-500 "
                  leaveFrom={`translate-x-0 opacity-100`}
                  leaveTo={
                    moving === "right"
                      ? `-translate-x-full opacity-0`
                      : `translate-x-full opacity-0`
                  }
                  className="w-0 bg-green-200 overflow-visible"
                  as="div"
                >
                  <div
                    className="bg-green-200"
                    style={{ width: `${wrapperWidth}px` }}
                  >
                    <img src={el} />
                  </div>
                </Transition>
              </div>
            ))}
          </div>
        </div>
        <div className={`mt-2`}>
          <nav
            className="flex items-center justify-center"
            aria-label="Progress"
          >
            <button
              type="button"
              disabled={currentStep === 0}
              onClick={() => prevStep()}
            >
              Prev
            </button>
            <ol className="mx-8 flex items-center space-x-5">
              {steps.map((step, i) => (
                <li key={`step_${i}`}>
                  {step === "complete" ? (
                    <div className="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900">
                      <span className="sr-only"></span>
                    </div>
                  ) : step === "current" ? (
                    <div
                      className="relative flex items-center justify-center"
                      aria-current="step"
                    >
                      <span
                        className="absolute w-5 h-5 p-px flex"
                        aria-hidden="true"
                      >
                        <span className="w-full h-full rounded-full bg-indigo-200" />
                      </span>
                      <span
                        className="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full"
                        aria-hidden="true"
                      />
                      <span className="sr-only"></span>
                    </div>
                  ) : (
                    <div className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400">
                      <span className="sr-only"></span>
                    </div>
                  )}
                </li>
              ))}
            </ol>
            <button
              type="button"
              disabled={currentStep === images.length - 1}
              onClick={() => nextStep()}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

//https://github.com/tailwindlabs/headlessui/discussions/732
//https://codesandbox.io/s/8gw92?file=/src/components/app.js:259-1692
//https://headlessui.dev/react/transition