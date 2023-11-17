import React from "react";
import NewsLetterForm from "./NewsLetterForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";
const MailChimpForm = () => {
  const mailchimpUrl =
    "https://gmail.us9.list-manage.com/subscribe/post?u=3b21c562912eb3d61a363a6ac&amp;id=f9028cb8a5&amp;f_id=004d25e1f0";
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
