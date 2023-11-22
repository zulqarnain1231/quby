import React from "react";
import DialogueWrapper from "../Wrappers/DialogueWrapper";
import { useTranslation } from "react-i18next";

type Props = {
  isOpen: boolean;
  setIsOpen: () => void;
};

const CookiesModal: React.FC<Props> = ({ isOpen, setIsOpen }: Props) => {
  const { t } = useTranslation();
  const terms = [
    {
      title: "",
      detail: [
        "At QuByAiGame.com, QuByAi.com, QuByChain.com, we are committed to enhancing your experience within the decentralized and crypto-centric environment of our website. By continuing to navigate our site, you consent to our use of cookies.",
      ],
    },
    {
      title: "What are cookies?",
      detail: [
        "Cookies are tiny text files stored on your device when you access our website. They allow us to remember specific information about your visit, like your preferred settings, and enable us to optimize your experience within the crypto space.",
      ],
    },
    {
      title: "How we use cookies",
      detail: [
        "Essential Cookies: These cookies ensure that our website fun interact with our crypto features, enabling us to make improvements to the site’s functionality.",
        "Performance Cookies: cookies.para4",
        "Third-Party Cookies: We may use third-party cookies to offer additional crypto-related services, such as embedded exchange widgets or social media plugins. These cookies are controlled by respective third-party providers and may track your activity across other sites.",
        "Crypto Cookies: These cookies enable us to provide personalized cryptocurrency experiences, such as remembering your wallet address or preferred tokens.",
      ],
    },
    {
      title: "Managing Cookies",
      detail: [
        "You can manage or delete cookies using your browser settings. Disabling essential cookies may affect the functionality of certain crypto-related features on the site. If you have any questions or concerns about our use of cookies or this policy within the crypto context, please contact us at Contact@QuByAi.com By engaging with MemeKombatToken.com, you agree to our use of cookies in accordance with this Cookies Policy.",
      ],
    },
  ];
  return (
    <DialogueWrapper Open={isOpen} CloseEvent={setIsOpen}>
      <div className="w-full h-full flex flex-col items-start justify-start gap-4">
        <h2 className="text-white-main sm:text-2xl text-xl text-center font-semibold">
          {t("Cookies")}
        </h2>
        {terms.map((item: any, index: number) => (
          <div
            key={index}
            className="w-full flex flex-col items-start justify-start gap-2"
          >
            <h2 className="text-white-main sm:text-xl text-lg text-center font-semibold">
              {item.title}
            </h2>
            {item.detail.map((el: string, index: number) => (
              <p key={index} className="text-white-main text-base font-medium">
                {el}
              </p>
            ))}
          </div>
        ))}
      </div>
    </DialogueWrapper>
  );
};

export default CookiesModal;
