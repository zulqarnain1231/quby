import React from "react";
import DialogueWrapper from "../Wrappers/DialogueWrapper";
import { useTranslation } from "react-i18next";

type Props = {
  isOpen: boolean;
  setIsOpen: () => void;
};

const PrivacyModal: React.FC<Props> = ({ isOpen, setIsOpen }: Props) => {
  const { t } = useTranslation();
  const terms = [
    {
      title: "Introduction Privacy Policy",
      detail: [
        "At QuByAiGame.com, QuByAi.com, QuByChain.com, we value your privacy.This privacy policy explains what information we collect from you and how we use it. We will never release your private information to third parties.",
      ],
    },
    {
      title: "What Data We Collect",
      detail: [
        "We might collect some information to help us improve our services:",
        "Your Name and Email: if you choose to provide them.",
        "Technical Information: like your IP address and browser type.",
        "Crypto Information: such as your wallet addresses.",
      ],
    },
    {
      title: "How We Use Your Data",
      detail: [
        "We use this information to:",
        "Make our website work for you.",
        "Keep everything safe and secure.",
        "Help us understand what you need so we can make our website better.",
      ],
    },
    {
      title: "Keeping Your Data Safe",
      detail: ["We take special care to keep your information safe:"],
    },
    {
      title: "Holding onto Your Data",
      detail: [
        "We only keep your information for as long as we need it. After that, we delete it.",
      ],
    },
    {
      title: "No Third Parties",
      detail: [
        "We promise not to give your information to any third-party companies. Your privacy is important to us.",
      ],
    },
    {
      title: "Talk to Us",
      detail: [
        "If you have any questions or need help with anything, you can email us atContact@qubyai.com.",
      ],
    },
  ];

  return (
    <DialogueWrapper Open={isOpen} CloseEvent={setIsOpen}>
      <div className="w-full h-full flex flex-col items-start justify-start gap-4">
        <h2 className="text-white-main sm:text-2xl text-xl text-center font-semibold">
          {t("Privacy_Policy")}
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

export default PrivacyModal;
