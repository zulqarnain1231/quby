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
      title: t("Privacy_Title1"),
      detail: [t("Privacy1_detail1")],
    },
    {
      title: t("Privacy_Title2"),
      detail: [
        t("Privacy2_detail1"),
        t("Privacy2_detail2"),
        t("Privacy2_detail3"),
        t("Privacy2_detail4"),
      ],
    },
    {
      title: t("Privacy_Title3"),
      detail: [
        t("Privacy3_detail1"),
        t("Privacy3_detail2"),
        t("Privacy3_detail3"),
        t("Privacy3_detail4"),
      ],
    },
    {
      title: t("Privacy_Title4"),
      detail: [t("Privacy4_detail1")],
    },
    {
      title: t("Privacy_Title5"),
      detail: [t("Privacy5_detail1")],
    },
    {
      title: t("Privacy_Title6"),
      detail: [t("Privacy6_detail1")],
    },
    {
      title: t("Privacy_Title7"),
      detail: [t("Privacy7_detail1")],
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
