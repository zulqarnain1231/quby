import React, { useState } from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import FilledBtn from "../../Shared/Buttons/FilledBtn";
import { BsPerson } from "react-icons/bs";
import { useTranslation } from "react-i18next";

type Props = {
  status: any;
  message: any;
  onValidated: any;
};
const NewsLetterForm: React.FC<Props> = ({
  status,
  message,
  onValidated,
}: Props) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onValidated({
      EMAIL: email,
    });
    setIsSubmitted(true);
    setEmail("");
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };
  return (
    <ComponentWrapper style="lg:py-20 py-12">
      <div className="w-full flex lg:flex-row flex-col items-center lg:justify-between lg:gap-0 justify-start gap-10">
        <h2 className="text-white-main text-xl sm:text-2xl font-semibold lg:w-[397px]">
          {t("Newsletter_Heading")}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="lg:w-auto w-full flex items-center justify-start sm:flex-row flex-col gap-3"
        >
          <div className="bg-transparent flex items-center justify-start gap-4 border border-white-main lg:w-[360px] w-full h-[56px] rounded-[30px] pl-6">
            <BsPerson className="text-2xl text-white-main" />
            <input
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              placeholder={
                isSubmitted ? t("Subsribed_Messege") : t("Email_Placeholder")
              }
              className="w-full h-full bg-transparent rounded-[30px] focus:outline-none text-sm text-white-main font-normal placeholder:text-white-main"
              name=""
              id=""
              required
            />
          </div>

          <FilledBtn
            type="submit"
            text={isSubmitted ? t("Subscribed") : t("Subscribe")}
          />
        </form>
      </div>
    </ComponentWrapper>
  );
};

export default NewsLetterForm;
