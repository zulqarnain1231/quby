import React from "react";
import DialogueWrapper from "../../Shared/Wrappers/DialogueWrapper";
import { useTranslation } from "react-i18next";

type Props = {
  isOpen: boolean;
  setIsOpen: () => void;
};

const TermsModal: React.FC<Props> = ({ isOpen, setIsOpen }: Props) => {
  const { t } = useTranslation();
  return (
    <DialogueWrapper Open={isOpen} CloseEvent={setIsOpen}>
      <div className="w-full h-full flex flex-col items-start justify-start gap-4">
        <h2 className="text-white-main sm:text-2xl text-xl text-center font-semibold">
          {t("Terms_and_Conditions")}
        </h2>
        <p className="text-white-main text-base font-medium">
          {t("Terms_Conditions_Detail")}
        </p>
      </div>
    </DialogueWrapper>
  );
};

export default TermsModal;
