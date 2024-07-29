import React,{ useEffect ,useState,useRef  } from "react";
import { Check, X } from "lucide-react";

const FinalApp = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCancel = () => {
      setShowModal(false);
    };
     // Handle escape key press to close the modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
    return(
        <>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
        {showModal && <GoogleTranslate  cancel={handleCancel} />}
        </>
    )
}

export default FinalApp

const GoogleTranslate = ({cancel }) => {

    const [language, setLanguage] = useState("eng");
    const modalRef = useRef();

    const IS_ENG = language === "eng";

    const languageConfig = {
        title: IS_ENG ? "How it works/Steps to follow" : "नीचे दिए गए निर्देश फ़ॉलो करें",
        step1: IS_ENG ? "Step 1: Enter Store Name (e.g., Mahalaxmi Traders/ Saravana Stores)" : "स्टेप 1: स्टोर का नाम दर्ज करें (उदाहरणः महालक्ष्मी ट्रेडर्स / सरावना स्टोर्स )",
        step2: IS_ENG ? "Step 2: Select the language of your video" : "स्टेप 2: अपने वीडियो की भाषा चुनें",
        step3: IS_ENG ? "Step 3: Upload image of store owner/ manager. Please upload a vertical image only" : "स्टेप 3: स्टोर के मालिक / मैनेजर की फोटो अपलोड करें. कृपया फोटो सीधी दिशा में ही अपलोड करें.",
        warning: IS_ENG ? "DO NOT SHOW ANY OTHER BRAND IN THE BACKGROUND" : "बैकग्राउंड में कोई और ब्रांड न दिखाएं. कोई भी अनुचित नाम या चित्र को रद्द किया जाएगा.",
        step4: IS_ENG ? "Step 4: Click Submit" : "स्टेप 4: सबमिट पर क्लिक करें",
        step5: IS_ENG ? "Step 5: You will receive your customised video within 24 hours via WhatsApp on your registered mobile number from Kellogg's" : "स्टेप 5: आप अपना कस्टमाइज़्ड वीडियो केलॉग्स द्वारा अपने रजिस्टर्ड मोबाइल नंबर के वॉट्सऐप पर 24 घंटे के अंदर प्राप्त करेंगे.",
      };

       // Close the modal if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        cancel();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cancel]);
    

    
  return (
    <>
     <ModalContainer   ref={modalRef}>
      <div className="bg-primaryBrown max-h-[90vh] overflow-auto w-[90vw] py-12 grid gap-4 items-center justify-start rounded-[18px] text-primaryYellow px-[12px]">
        <div className="flex w-full items-center font-semibold overflow-hidden border border-primaryYellow rounded-full">
          <button
            onClick={() => setLanguage("eng")}
            className={`w-full duration-200 py-1 text-[12px] ${
              language === "eng"
                ? "bg-primaryYellow bg-active text-primaryBrown"
                : "bg-primaryBrown bg-inactive text-primaryYellow"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("hin")}
            className={`w-full duration-200 py-1 text-[12px] ${
              language === "hin"
                ? "bg-primaryYellow bg-active text-primaryBrown"
                : "bg-primaryBrown bg-inactive  text-primaryYellow"
            }`}
          >
            Hindi
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-center">{languageConfig.title}</h1>
          <ul className="flex flex-col gap-2">
            <li>{languageConfig.step1}</li>
            <li>{languageConfig.step2}</li>
            <li>{languageConfig.step3}</li>
            <li className="flex w-full max-h-[100px] gap-4 justify-center items-start">
              <div className="flex justify-center items-start gap-2">
                <span className="bg-green-400">
                  <Check className="text-black" />
                </span>
                <img
                  src={`${import.meta.env.VITE_ASSETS_URL}/img/uncle-wo-bg.jpg`}
                  alt=""
                  className="max-h-[100px] object-contain"
                />
              </div>
              <div className="flex justify-center items-start gap-2">
                <span className="bg-red-500">
                  <X className="text-black" />
                </span>
                <img
                  src={`${import.meta.env.VITE_ASSETS_URL}/img/how-it-works-store.jpg`}
                  alt=""
                  className="max-h-[100px] object-contain"
                />
              </div>
            </li>
            <li className="py-5 font-bold">{languageConfig.warning}</li>
            <li>{languageConfig.step4}</li>
            <li>{languageConfig.step5}</li>
          </ul>
        </div>
      </div>

      <button
        onClick={cancel}
        className="text-white h-[44px] aspect-square flex justify-center items-center bg-primaryBrown absolute top-[-12px] right-[-12px] rounded-full shadow-xl shadow-black/40"
      >
        <X />
      </button>
    </ModalContainer>
    </>
  )
}

const ModalContainer = ({children}) => {
    return(
        <>
         <div  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-4 max-w-full max-h-full overflow-auto">
                {children}
            </div>
            </div>
        </>
    )
}