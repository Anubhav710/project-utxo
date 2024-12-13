import React from "react";
import Footer from "../package/Footer";
import { myFont } from "@/fonts";

const termsAndConditions = {
  title: "Terms and Conditions of UTXO Web Tech",
  sections: [
    {
      title: "Use of Website",
      subHeading: "",
      content: [
        "The Website is provided for general information purposes only and is not intended to provide specific advice or guidance.",
        "UTXO Web Tech reserves the right to modify or update the Website at any time without notice.",
        "You agree to use the Website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the Website by, any other person.",
      ],
      subContent: [],
    },
    {
      title: "Data Protection",
      subHeading: "",
      content: [
        "UTXO Web Tech will take reasonable steps to securely store and protect your data.",
        "You acknowledge that there are risks associated with the transmission and storage of data, and you agree to hold UTXO Web Tech harmless for any losses or damages resulting from such risks.",
      ],
      subContent: [],
    },
    {
      title: "Links to Other Websites",
      subHeading: "",
      content: [
        "The Website may contain links to other websites that are not under the control of UTXO Web Tech.",
        "UTXO Web Tech is not responsible for the content or accuracy of any linked website.",
      ],
      subContent: [],
    },
    {
      title: "Disclaimer of Warranties",
      subHeading: "",
      content: [
        "The Website is provided on an “as is” and “as available” basis.",
        "UTXO Web Tech disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
      ],
      subContent: [],
    },
    {
      title: "Limitation of Liability",
      subHeading: "",
      content: [
        "UTXO Web Tech will not be liable for any damages, including but not limited to incidental, consequential, or punitive damages, arising out of or related to your use of the Website.",
        "In no event will UTXO Web Tech’s liability exceed the amount of fees paid by you to UTXO Web Tech for the Services.",
      ],
      subContent: [],
    },
    {
      title: "Agreement",
      subHeading: "",
      content: [
        "By entering into an agreement with UTXO Web Tech, the Client acknowledges that they have read, understood, and agreed to be bound by these Terms and Conditions.",
        "UTXO Web Tech reserves the right to modify or update these Terms and Conditions at any time without notice.",
      ],
      subContent: [],
    },
    {
      title: "Definitions",
      subHeading:
        "In these Terms and Conditions, the following definitions apply:",
      content: [
        "“Client” means an individual or organization that enters into an agreement with UTXO Web Tech for the provision of services.",
        "“Content” means any text, images, audio, video, or other materials provided by UTXO Web Tech or its clients.",
        "“Intellectual Property” means any patents, trademarks, copyrights, trade secrets, or other proprietary rights.",
        "“SEO” means Search Engine Optimization, which is the process of improving the visibility and ranking of a website in search engine results pages (SERPs) through various techniques, including but not limited to keyword research, on-page optimization, and link building.",
        "“SMO” means Social Media Optimization, which is the process of creating and implementing a strategy to increase the visibility and engagement of a brand or website on social media platforms.",
        "“PPC” means Pay-Per-Click, which is a form of online advertising in which an advertiser pays each time a user clicks on their ad.",
        "“Graphic Design Services” means the creation of visual elements, such as logos, icons, graphics, and other visual materials, for use in various media, including but not limited to websites, social media, and print materials.",
        "“Digital Services” means any services provided by UTXO Web Tech, including but not limited to web design, development, and maintenance, SEO, SMO, PPC, graphic design, content creation, and other digital marketing services.",
      ],
      subContent: [],
    },
    {
      title: "Services",
      subHeading: "",
      content: [
        "UTXO Web Tech provides a range of Digital Services, including but not limited to web design, development, and maintenance, SEO, SMO, PPC, graphic design, and content creation.",
        "UTXO Web Tech is responsible for generating and delivering qualified leads to its clients through SEO, SMO, and PPC services. However, the conversion of these leads into actual sales, bookings, or other desired outcomes is the sole responsibility of the Client.",
        "The Client acknowledges that UTXO Web Tech's role is limited to providing marketing and advertising services, and that the Client's sales, customer service, and business operations are outside the scope of UTXO Web Tech's services.",
        "For SEO services, UTXO Web Tech does not guarantee a specific ranking or timeline for achieving desired results, as SEO is a dynamic and constantly evolving field. Results may vary and may take time to materialize.",
        "UTXO Web Tech will make reasonable efforts to optimize the Client's website for search engines, but cannot be held responsible for changes in search engine algorithms, competitor activity, or other factors beyond its control that may impact SEO results.",
        "The Client understands that SEO is a long-term strategy and that it may take several months to a year or more to see significant improvements in search engine rankings and organic traffic.",
        "UTXO Web Tech may provide regular progress reports and analytics to the Client, but the Client acknowledges that these reports are for informational purposes only and do not constitute a guarantee of results.",
        "By 'reasonable efforts,' we mean that we will use our professional expertise and resources to deliver high-quality services, but we cannot guarantee specific results or outcomes.",
        "UTXO Web Tech will use reasonable efforts to achieve the desired results, but the outcome is dependent on various factors, including but not limited to the following:",
      ],
      subContent: [
        "The quality of the website, including its design, content, and functionality.",
        "The competitiveness of the industry, including the number of competitors and the level of competition.",
        "Changes to search engine algorithms and their impact on the website's ranking.",
        "The Client's cooperation and provision of necessary information and assets, including timely payment, provision of content, and approval of designs.",
        "The Client's adherence to UTXO Web Tech's recommendations and guidelines, including SEO best practices and social media marketing strategies.",
        "Third-party factors, such as changes to the website's hosting, server, or other technical infrastructure.",
        "External factors, such as changes to the market, industry, or economy.",
      ],
    },
    {
      title: "Payment Terms",
      subHeading: "",
      content: [
        "All prices are exclusive of Goods and Services Tax (GST) and other applicable taxes.",
        "Payment is due on the first day of each month.",
        "Late payments may incur additional fees and penalties.",
      ],
      subContent: [],
    },
    {
      title: "Cancellation and Termination",
      subHeading: "",
      content: [
        "Cancellations must be made in writing (via email or registered mail) at least 15 days before the next billing cycle.",
        "UTXO Web Tech reserves the right to terminate an agreement if the client fails to make timely payments or provide necessary information and assets.",
      ],
      subContent: [],
    },
    {
      title: "Client Responsibilities",
      subHeading: "",
      content: [
        "The client is responsible for providing accurate and timely information to facilitate the project's progress.",
        "Making timely payments in accordance with the payment terms outlined. Failure to fulfill these responsibilities may result in delays and additional costs, which will be borne by the client.",
      ],
      subContent: [],
    },
    {
      title: "Scope of Work",
      subHeading: "",
      content: [
        "The agency reserves the right to modify the scope of work, timelines, and costs if the client's requirements change.",
        "Any changes will be documented and approved in writing by both parties.",
      ],
      subContent: [],
    },
    {
      title: "Intellectual Property Rights",
      subHeading: "",
      content: [
        "The agency will retain the intellectual property rights to all work created, unless otherwise agreed upon in writing.",
        "In the event of termination, the agency will retain ownership of all intellectual property rights.",
      ],
      subContent: [],
    },
    {
      title: "Third-Party Materials",
      subHeading: "",
      content: [
        "The client will be responsible for obtaining all necessary permissions and approvals for the use of any third-party materials, including content, images, videos, and music and other materials.",
      ],
      subContent: [],
    },
    {
      title: "Confidentiality",
      subHeading: "",
      content: [
        "UTXO Web Tech will maintain the confidentiality of your information and will not disclose it to any third party without prior written consent.",
        "The Client shall not disclose any confidential information, including but not limited to business strategies, trade secrets, and proprietary information, to any third party.",
      ],
      subContent: [],
    },
    {
      title: "Indemnification",
      subHeading: "",
      content: [
        "The Client agrees to indemnify and hold harmless UTXO Web Tech, its officers, directors, employees, and agents from and against any and all claims, damages, losses, and expenses (including but not limited to reasonable attorneys’ fees) arising out of or related to the Client’s breach of these Terms and Conditions or the Client’s use of the Services.",
      ],
      subContent: [],
    },
    {
      title: "Limitation of Liability for Consequential Damages",
      subHeading: "",
      content: [
        "UTXO Web Tech will not be liable for any consequential, indirect, special, punitive, or incidental damages arising out of or related to the Services, including but not limited to loss of profits, loss of business, or loss of data.",
      ],
      subContent: [],
    },
    {
      title: "Exclusion of Implied Warranties",
      subHeading: "",
      content: [
        "UTXO Web Tech excludes all implied warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
      ],
      subContent: [],
    },
    {
      title: "Limitation of Liability for Third-Party Claims",
      subHeading: "",
      content: [
        "UTXO Web Tech will not be liable for any claims, damages, losses, or expenses arising out of or related to the actions or omissions of third parties, including but not limited to other users of the Services.",
      ],
      subContent: [],
    },
    {
      title: "Governing Law for Disputes",
      subHeading: "",
      content: [
        "Any disputes arising out of or related to these Terms and Conditions will be governed by and construed in accordance with the laws of India.",
      ],
      subContent: [],
    },
    {
      title: "Jurisdiction for Disputes",
      subHeading: "",
      content: [
        "Any disputes arising out of or related to these Terms and Conditions will be resolved through arbitration in Noida, Uttar Pradesh, India.",
      ],
      subContent: [],
    },
    {
      title: "Entire Agreement for Disputes",
      subHeading: "",
      content: [
        "These Terms and Conditions constitute the entire agreement between UTXO Web Tech and the Client with respect to the Services and supersede all prior or contemporaneous agreements or understandings.",
      ],
      subContent: [],
    },
    {
      title: "No Waiver",
      subHeading: "",
      content: [
        "UTXO Web Tech’s failure to enforce any provision of these Terms and Conditions will not be deemed a waiver of such provision or of any other provision.",
      ],
      subContent: [],
    },
    {
      title: "Severability for Disputes",
      subHeading: "",
      content: [
        "If any provision of these Terms and Conditions is held to be invalid or unenforceable, the remaining provisions will remain in effect.",
      ],
      subContent: [],
    },
    {
      title: "Amendments for Disputes",
      subHeading: "",
      content: [
        "UTXO Web Tech reserves the right to modify or update these Terms and Conditions at any time without notice, and any changes will be effective immediately upon posting on the Website.",
      ],
      subContent: [],
    },
    {
      title: "Notices for Disputes",
      subHeading: "",
      content: [
        "Any notices required or permitted to be given under these Terms and Conditions will be in writing and will be delivered personally, sent by certified mail, or sent by email.",
      ],
      subContent: [],
    },
    {
      title: "Force Majeure",
      subHeading: "",
      content: [
        "UTXO Web Tech will not be liable for any failure or delay in performing its obligations under these Terms and Conditions if such failure or delay is caused by circumstances beyond its reasonable control.",
      ],
      subContent: [],
    },
    {
      title: "Refund Policy",
      subHeading: "",
      content: [
        "UTXO Web Tech does not offer refunds for any services provided.",
        "All payments made to UTXO Web Tech are non-refundable.",
      ],
      subContent: [],
    },
    {
      title: "Cookies Policy",
      subHeading: "",
      content: [
        "UTXO Web Tech uses cookies to improve the user experience on its Website.",
        "By using the Website, you consent to the use of cookies.",
      ],
      subContent: [],
    },
    {
      title: "Hosting Policy",
      subHeading: "",
      content: [
        "UTXO Web Tech uses third-party hosting services to host its Website and provide its Services.",
        "UTXO Web Tech is not responsible for any downtime or technical issues caused by the hosting services.",
      ],
      subContent: [],
    },
    {
      title: "Additional Terms",
      subHeading:
        "For more detailed information, please read our Terms and Conditions page (https://utxotech.com/terms-and-conditions) on our website.",
      content: [
        "This agreement constitutes the entire understanding between the parties and supersedes all prior negotiations, understandings, and agreements.",
      ],
      subContent: [],
    },
    {
      title: "Website Visitor Terms",
      subHeading: "",
      content: [
        "By accessing the Website, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.",
        "You agree to use the Website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the Website by, any other person.",
      ],
      subContent: [],
    },
    {
      title: "Limitation of Liability for Website Use",
      subHeading: "",
      content: [
        "UTXO Web Tech will not be liable for any damages, including but not limited to incidental, consequential, or punitive damages, arising out of or related to your use of the Website.",
      ],
      subContent: [],
    },
  ],
  conclusion:
    "By accessing the Website or using the Services, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.",
};

const TermsCondition = () => {
  return (
    <div className="min-h-screen bg-black padding-top padding-x">
      <div className="max-w-screen-lg mx-auto space-y-12 text-white">
        <h1
          className={`font-bold text-center term-condition-heading  ${myFont.className}`}
        >
          {termsAndConditions.title}
        </h1>
        {termsAndConditions.sections.map((section, index) => (
          <div key={index} className="space-y-2 ">
            <h2 className="text-3xl  flex gap-4 font-bold">
              <h3>{section.title}</h3>
            </h2>
            {section.subHeading && (
              <h4 className="text-xl">{section.subHeading}</h4>
            )}
            {section.content.length === 1 ? (
              <p className="text-lg">{section.content[0]}</p>
            ) : (
              <ul className="pl-7">
                {section.content.map((paragraph, idx) => (
                  <li key={idx} className="list-disc text-xl">
                    {paragraph}
                  </li>
                ))}
              </ul>
            )}
            {section.subContent.length === 1 ? (
              <p className="text-lg">{section.subContent[0]}</p>
            ) : (
              <ul className="pl-14">
                {section.subContent.map((paragraph, idx) => (
                  <li key={idx} className="list-[circle] text-xl">
                    {paragraph}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <p>{termsAndConditions.conclusion}</p>
      </div>
      <div className="pt-16">
        <Footer />
      </div>
    </div>
  );
};

export default TermsCondition;
