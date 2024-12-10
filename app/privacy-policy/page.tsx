import React from "react";
import Footer from "../package/Footer";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-black padding-top ">
      <div className="max-w-screen-lg mx-auto space-y-12 padding-x">
        <h1
          className={`text-center  text-white font-bold term-condition-heading`}
        >
          Privacy Policy
        </h1>
        <div>
          <p className="text-white text-xl leading-8">
            UTXO Web Tech, is the data controller of your personal data. We have
            adopted this Privacy Policy, which determines how we process the
            information collected by our website, and provides the reasons why
            we must collect certain personal data about you. Therefore, you must
            read this Privacy Policy before using our website. We take care of
            your personal data and undertake to guarantee its confidentiality
            and security.
          </p>
          <p className="text-white text-xl leading-8">
            Personal information we collect: We collect personal data that you
            provide to us through our website's contact form, including but not
            limited to Name, email, phone number, and other information that you
            choose to provide. We refer to this information as “Personal
            Information.
          </p>
          <div className="pt-5">
            <h1 className="text-white text-3xl font-bold ">
              Why do we process your data?
            </h1>
            <p className="text-white text-xl leading-8 pt-5">
              Our top priority is customer data security, and, as such, we may
              process only minimal user data, only as much as it is absolutely
              necessary to respond to your inquiries and provide the services
              you request. We use the Personal Information you provide to us to
              respond to your inquiries, provide customer support, and fulfill
              your requests. You can choose not to provide us with your Personal
              Information, but then we may not be able to respond to your
              inquiries or provide the services you request.
            </p>
          </div>
          <div className="pt-5">
            <h1 className="text-white text-3xl font-bold ">Your rights</h1>
            <p className="text-white text-xl leading-8 pt-5">
              If you are a resident of a region with applicable data protection
              laws, you have the following rights related to your personal data:
              <ul className="list-disc pl-[1rem]">
                <li>The right to be informed.</li>
                <li>The right of access.</li>
                <li>The right to rectification.</li>
                <li>The right to erasure.</li>
                <li>The right to restrict processing.</li>
                <li>The right to data portability.</li>
                <li>The right to object.</li>
                <li>
                  Rights in relation to automated decision-making and profiling.
                </li>
              </ul>
            </p>
            <p className="text-white text-xl leading-8 pt-5">
              If you would like to exercise this right, please contact us
              through the contact information below.
            </p>
            <p className="text-white text-xl leading-8 pt-5">
              Additionally, if you are a resident of a region with applicable
              data protection laws, we note that we are processing your
              information in order to fulfill contracts we might have with you
              (for example, if you request a service through our website), or
              otherwise to pursue our legitimate business interests listed
              above. Additionally, please note that your information might be
              transferred outside of your region, including to countries with
              different data protection laws.
            </p>
          </div>
          <div className="pt-5">
            <h1 className="text-white text-3xl font-bold ">
              Information security
            </h1>
            <p className="text-white text-xl leading-8 pt-5">
              We secure information you provide on computer servers in a
              controlled, secure environment, protected from unauthorized
              access, use, or disclosure. We keep reasonable administrative,
              technical, and physical safeguards to protect against unauthorized
              access, use, modification, and personal data disclosure in its
              control and custody. However, no data transmission over the
              Internet or wireless network can be guaranteed.
            </p>
          </div>
          <div className="pt-5">
            <h1 className="text-white text-3xl font-bold ">Legal disclosure</h1>
            <p className="text-white text-xl leading-8 pt-5">
              We will disclose any information we collect, use or receive if
              required or permitted by law, such as to comply with a subpoena or
              similar legal process, and when we believe in good faith that
              disclosure is necessary to protect our rights, protect your safety
              or the safety of others, investigate fraud, or respond to a
              government request.
            </p>
          </div>
          <div className="pt-5">
            <h1 className="text-white text-3xl font-bold ">
              Contact information
            </h1>
            <p className="text-white text-xl leading-8 pt-5">
              If you would like to contact us to understand more about this
              Policy or wish to contact us concerning any matter relating to
              individual rights and your Personal Information, you may send an
              email to info@utxotech.com.
            </p>
          </div>
          <div className="pt-5">
            <h1 className="text-white text-3xl font-bold ">Address</h1>
            <p className="text-white text-xl leading-8 pt-5">
              B-64, B Block, Sector 63, Noida, Uttar Pradesh 201301
            </p>
          </div>
        </div>
      </div>
      <div className="pt-16">
        <Footer />
      </div>
    </section>
  );
};

export default PrivacyPolicy;
