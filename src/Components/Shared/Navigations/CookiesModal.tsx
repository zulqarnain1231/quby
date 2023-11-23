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
      detail: [t("Cookies1_detail1")],
    },
    {
      title: t("Cookies_Title2"),
      detail: [t("Cookies2_detail1")],
    },
    {
      title: t("Cookies_Title3"),
      detail: [
        t("Cookies3_detail1"),
        t("Cookies3_detail2"),
        t("Cookies3_detail3"),
        t("Cookies3_detail4"),
      ],
    },
    {
      title: t("Cookies_Title4"),
      detail: [t("Cookies4_detail1")],
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
