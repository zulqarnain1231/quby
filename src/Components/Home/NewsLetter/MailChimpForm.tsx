import React from "react";
import NewsLetterForm from "./NewsLetterForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";
const MailChimpForm = () => {
  const mailchimpUrl = process.env.Mailchimp_Url;
  return (
    <MailchimpSubscribe
      url={mailchimpUrl}
      render={(props: any) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsLetterForm
            status={status}
            message={message}
            onValidated={(formData: any) => subscribe(formData)}
          />
        );
      }}
    />
  );
};

export default MailChimpForm;
