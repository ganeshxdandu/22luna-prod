import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Privacy Policy | 22Luna Sanctuary',
  description: 'How we collect, store, and protect your personal and medical information at 22Luna.',
  alternates: {
    canonical: 'https://22luna.in/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | 22Luna Sanctuary',
    description: 'How we collect, store, and protect your personal and medical information at 22Luna.',
    url: 'https://22luna.in/privacy-policy',
    images: [
      {
        url: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785397953/bedding_qudetj.png',
        width: 1200,
        height: 630,
        alt: '22Luna Privacy Policy',
      },
    ],
  },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', item: '/' },
  { name: 'Privacy Policy', item: '/privacy-policy' },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col bg-moon-ivory">
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />
      {/* Light navigation header */}
      <Header variant="light" />

      {/* ── Content Section ── */}
      <section className="w-full max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-[104px] md:pt-[128px] pb-24 md:pb-32 flex flex-col items-center select-text">
        <div className="w-full max-w-[700px] flex flex-col items-start">
          
          {/* Eyebrow */}
          <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-4">
            Legal & Privacy
          </span>

          {/* Title */}
          <h1 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[2.2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-normal mb-3">
            Privacy Policy
          </h1>

          <p className="font-sans text-stone-gray text-[0.8rem] tracking-wider uppercase font-light mb-8">
            Last Updated: August 4, 2026
          </p>

          <div className="h-[1px] w-full bg-charcoal/10 mb-10" />

          {/* Content paragraphs */}
          <div className="space-y-8 text-stone-gray font-sans font-light text-[0.92rem] sm:text-[0.98rem] leading-[1.8] tracking-wide w-full">
            
            <p>
              This Privacy Policy describes how 22 Luna collects, uses, and discloses your personal information when you visit, use our services, or book appointments from https://22luna.in/ or otherwise communicate with us. For purposes of this Privacy Policy, &quot;you&quot; and &quot;your&quot; means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected under this Privacy Policy.
            </p>

            <p>
              Please read this Privacy Policy carefully. By using and accessing any of our Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use or access any of the Services.
            </p>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Patient Confidentiality
              </h2>
              <p>
                Your privacy is of utmost importance to us. All personal and medical information collected during your visit is kept confidential and secure.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Data Protection
              </h2>
              <p>
                We implement stringent data protection measures to ensure your information is safeguarded.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Consent to Treatment
              </h2>
              <p>
                By receiving treatment at 22Luna, you consent to the collection and use of your data as outlined in our privacy policy. Before any treatment, we will provide detailed information about the procedure, including potential risks and benefits. Your informed consent is required before proceeding with any treatment.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Medical Disclaimer
              </h2>
              <p>
                The information provided on our website is for general informational purposes only and is not a substitute for professional medical advice. Always seek the advice of your healthcare provider with any questions regarding a medical condition.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Patient Responsibilities
              </h2>
              <p>
                As a patient at 22Luna, you are expected to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide accurate and complete medical history.</li>
                <li>Follow the treatment plan prescribed by your healthcare provider.</li>
                <li>Attend all scheduled appointments and follow-up visits.</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Emergency Protocols
              </h2>
              <p>
                In case of a medical emergency, please contact emergency services immediately by calling <a href="tel:8971724422" className="text-botanical hover:text-charcoal underline transition-colors font-medium">8971724422</a>. For urgent concerns related to treatments received at our clinic, please call <a href="tel:8971725522" className="text-botanical hover:text-charcoal underline transition-colors font-medium">8971725522</a>.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Accessibility
              </h2>
              <p className="font-semibold text-charcoal">Clinic Accessibility</p>
              <p>
                22Luna is committed to providing accessible care to all patients. Our clinic is wheelchair accessible, and we offer accommodations for patients with disabilities. Please inform us of any special needs when booking your appointment.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site, update the &quot;Last updated&quot; date and take any other steps required by applicable law.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                How We Collect and Use Your Personal Information
              </h2>
              <p>
                To provide the Services, we collect and have collected over the past 12 months personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us.
              </p>
              <p>
                In addition to the specific uses set out below, we may use the information we collect about you to communicate with you, provide the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and protect or defend the Services, our rights, and the rights of our users or others.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                What Personal Information We Collect
              </h2>
              <p>
                The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term &quot;personal information&quot;, we are referring to information that identifies, relates to, describes or can be associated with you. The following sections describe the categories and specific types of personal information we collect.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="font-sans text-[1.05rem] text-charcoal font-semibold tracking-tight uppercase">
                Information We Collect Directly from You
              </h3>
              <p>
                Information that you directly submit to us through our Services may include:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Basic contact details including your name, address, phone number, email.</li>
                <li>Information including your name, address, payment confirmation, email address, phone number.</li>
                <li>Customer support information including the information you choose to include in communications with us, for example, when sending a message through the Services.</li>
              </ul>
              
              <p className="mt-4">
                22Luna may collect the following categories of Personal Information from users:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name</li>
                <li>User ID</li>
                <li>Email address</li>
                <li>Address (including country and ZIP/postal code)</li>
                <li>Gender</li>
                <li>Age</li>
                <li>Phone number</li>
                <li>Password chosen by the user</li>
                <li>Valid financial account information</li>
                <li>Any other details voluntarily provided by the user</li>
              </ul>

              <p className="mt-4">
                Some features of the Services may require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="font-sans text-[1.05rem] text-charcoal font-semibold tracking-tight uppercase">
                Information We Collect Through Cookies
              </h3>
              <p>
                We also automatically collect certain information about your interaction with the Services (&quot;Usage Data&quot;). To do this, we may use cookies, pixels and similar technologies (&quot;Cookies&quot;). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address and other information regarding your interaction with the Services.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="font-sans text-[1.05rem] text-charcoal font-semibold tracking-tight uppercase">
                Information We Obtain from Third Parties
              </h3>
              <p>
                Finally, we may obtain information about you from third parties, including from vendors and service providers who may collect information on our behalf, such as:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="font-semibold text-charcoal">Companies who support our Site and Services:</span> Our payment processors collect payment information (e.g., bank account, credit or debit card information, address) to process your payment to fulfil your services and provide you with services you have requested, to perform our contract with you.
                </li>
                <li>
                  When you visit our Site, open or click on emails we send you, or interact with our Services or advertisements, we, or third parties we work with, may automatically collect certain information using online tracking technologies such as pixels, web beacons, software developer kits, third-party libraries, and cookies.
                </li>
              </ul>
              <p>
                Any information we obtain from third parties will be treated following this Privacy Policy. We are not responsible or liable for the accuracy of the information provided to us by third parties and are not responsible for any third party&apos;s policies or practices. For more information, see the section below, Third Party Websites and Links.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                How We Use Your Personal Information
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold text-charcoal">Providing Products and Services:</span> We use your personal information to provide you with the Services to perform our contract with you, including processing your payments, sending notifications to you related to your account, or other transactions, creating, maintaining and otherwise managing your account.
                </li>
                <li>
                  <span className="font-semibold text-charcoal">Marketing and Advertising:</span> We use your personal information for marketing and promotional purposes, such as to send marketing, advertising and promotional communications by email, text message or postal mail, and to show you advertisements for services. This may include using your personal information to better tailor the Services and advertising on our Site and other websites.
                </li>
                <li>
                  <span className="font-semibold text-charcoal">Security and Fraud Prevention:</span> We use your personal information to detect, investigate or take action regarding possible fraudulent, illegal or malicious activity. If you choose to use the Services and register an account, you are responsible for keeping your account credentials safe. We highly recommend that you do not share your username, password, or other access details with anyone else. If you believe your account has been compromised, please contact us immediately.
                </li>
                <li>
                  <span className="font-semibold text-charcoal">Communicating with you:</span> We use your personal information to provide you with customer support and improve our Services. This is in our legitimate interests to be responsive to you, to provide effective services to you, and to maintain our business relationship with you.
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Banking Partner Privacy Policy
              </h2>
              <p>
                We are committed to ensuring the privacy and security of your personal and financial information. When you use our services, you may be required to provide payment through our trusted banking partners. This Banking Partner Privacy Policy outlines how your information is handled in conjunction with these partners.
              </p>
              
              <p className="font-semibold text-charcoal mt-2">Data Collection and Use:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>We collect and securely transmit your payment information to our banking partners solely for the purpose of processing transactions related to our services.</li>
                <li>Our banking partners adhere to stringent data protection regulations and employ advanced security measures to safeguard your information.</li>
              </ul>

              <p className="font-semibold text-charcoal mt-2">Information Sharing:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your personal and financial information is shared with our banking partners only to the extent necessary to complete the transaction.</li>
                <li>We do not sell, trade, or otherwise transfer your information to outside parties except as required for transaction processing or by law.</li>
              </ul>

              <p className="font-semibold text-charcoal mt-2">Data Security:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Both our clinic and our banking partners utilize encryption technologies to protect your data during transmission and storage.</li>
                <li>Regular security assessments and compliance checks are conducted to maintain the highest standards of data protection.</li>
              </ul>

              <p className="font-semibold text-charcoal mt-2">Your Rights:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>You have the right to access and review your financial transaction history with our clinic.</li>
                <li>If you have any concerns about how your information is handled, you can contact us or our banking partners for more details.</li>
              </ul>

              <p className="font-semibold text-charcoal mt-2">Updates to This Policy:</p>
              <p>
                We may update this policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on our website.
              </p>
              <p>
                By using our services, you agree to the terms outlined in this Banking Partner Privacy Policy. If you have any questions or concerns, please do not hesitate to contact us.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Cookies
              </h2>
              <p>
                Like many websites, we use Cookies on our Site. For specific information about the Cookies that we use related to powering our website, We use Cookies to power and improve our Site and our Services (including to remember your actions and preferences), to run analytics and to better understand user interaction with the Services (in our legitimate interests to administer, improve and optimize the Services). We may also permit third parties and service providers to use Cookies on our Site to better tailor the services, products and advertising on our Site and other websites.
              </p>
              <p>
                Most browsers automatically accept Cookies by default, but you can choose to set your browser to remove or reject Cookies through your browser controls. Please keep in mind that removing or blocking Cookies can negatively impact your user experience and may cause some of the Services, including certain features and general functionality, to work incorrectly or no longer be available. Additionally, blocking Cookies may not completely prevent how we share information with third parties such as our advertising partners.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                How We Disclose Personal Information
              </h2>
              <p>
                In certain circumstances, we may disclose your personal information to third parties for legitimate purposes subject to this Privacy Policy. Such circumstances may include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>With vendors or other third parties who perform services on our behalf (e.g., IT management, payment processing, data analytics, customer support, cloud storage, fulfilment).</li>
                <li>Our business and marketing partners will use your information for their privacy notices.</li>
                <li>When you direct, request us or otherwise consent to our disclosure of certain information to third parties, such as to ship your products or through your use of social media widgets or login integrations, with your consent.</li>
                <li>With our affiliates or otherwise within our corporate group, in our legitimate interests to run a successful business.</li>
                <li>In connection with a business transaction such as a merger or bankruptcy, to comply with any applicable legal obligations (including responding to subpoenas, search warrants and similar requests), to enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.</li>
              </ul>
              
              <p className="mt-4">
                We have, in the past 12 months disclosed the following categories of personal information and sensitive personal information (denoted by *) about users for the purposes set out above in &quot;How we Collect and Use your Personal Information&quot; and &quot;How we Disclose Personal Information&quot;:
              </p>

              <div className="overflow-x-auto my-6 border border-charcoal/10 rounded-sm w-full">
                <table className="min-w-full divide-y divide-charcoal/10 text-[0.88rem]">
                  <thead>
                    <tr className="bg-charcoal/5 text-left font-semibold text-charcoal">
                      <th className="px-4 py-3">Category</th>
                      <th className="px-4 py-3">Categories of Recipient</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal/10 align-top">
                    <tr>
                      <td className="px-4 py-3 font-medium text-charcoal">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Identifiers such as basic contact details and certain order and account information</li>
                          <li>Commercial information such as appointment information and customer support information</li>
                          <li>Internet or other similar network activity, such as Usage Data</li>
                        </ul>
                      </td>
                      <td className="px-4 py-3">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Vendors and third parties who perform services on our behalf (such as Internet service providers, payment processors, fulfilment partners, customer support partners and data analytics providers)</li>
                          <li>Business and marketing partners</li>
                          <li>Affiliates</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                We do not use or disclose sensitive personal information for the purposes of inferring characteristics about you.
              </p>
              <p>
                We are committed to ensuring transparency in how we handle personal information. We may engage in activities that involve sharing certain categories of personal information with our business and marketing partners to enhance our services and marketing efforts. Below is a breakdown of the categories of personal information we may share and the categories of recipients:
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                User Generated Content
              </h2>
              <p>
                The Services may enable you to post product reviews and other user-generated content. If you choose to submit user-generated content to any public area of the Services, this content will be public and accessible by anyone.
              </p>
              <p>
                We do not control who will have access to the information that you choose to make available to others, and cannot ensure that parties who have access to such information will respect your privacy or keep it secure. We are not responsible for the privacy or security of any information that you make publicly available, or for the accuracy, use or misuse of any information that you disclose or receive from third parties.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Children&apos;s Data
              </h2>
              <p>
                The Services are not intended to be used by children, and we do not knowingly collect any personal information about children. If you are the parent or guardian of a child who has provided us with their personal information, you may contact us using the contact details set out below to request that it be deleted.
              </p>
              <p>
                As of the Effective Date of this Privacy Policy, we do not have actual knowledge that we &quot;share&quot; or &quot;sell&quot; (as those terms are defined in applicable law) personal information of individuals under 16 years of age.
              </p>
              <p>
                We take compliance with regulations seriously, especially when it comes to sites that are child-focused or directed. If our site falls into this category, we encourage you to consult with legal counsel to ensure that our disclosures meet specific legal requirements for handling personal information of children.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Security and Retention of Your Information
              </h2>
              <p>
                Please be aware that no security measures are perfect or impenetrable, and we cannot guarantee &quot;perfect security.&quot; In addition, any information you send to us may not be secure while in transit. We recommend that you do not use unsecure channels to communicate sensitive or confidential information to us.
              </p>
              <p>
                How long we retain your personal information depends on different factors, such as whether we need the information to maintain your account, to provide the Services, comply with legal obligations, resolve disputes or enforce other applicable contracts and policies.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Security Practices and Procedures
              </h2>
              <p>
                At 22Luna, we implement robust security practices and procedures, encompassing technical, operational, managerial, and physical security measures, in compliance with applicable Indian laws. These measures are designed to protect your personal information from loss, misuse, unauthorized access, disclosure, alteration, and destruction.
              </p>
              <p>
                We ensure that any third parties to whom your sensitive personal data or information may be transferred also adhere to a reasonable level of security practices and procedures to safeguard your personal information.
              </p>
              <p>
                Please note that while we strive to protect your data, we are not responsible for any information intercepted during transmission over the internet. By using our services, you release us from any claims related to the unauthorized use of intercepted information.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Your Rights and Choices
              </h2>
              <p>
                Depending on where you live, you may have some or all of the rights listed below in relation to your personal information. However, these rights are not absolute, may apply only in certain circumstances and, in certain cases, we may decline your request as permitted by law.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold text-charcoal">Right to Access / Know:</span> You may have a right to request access to personal information that we hold about you, including details relating to how we use and share your information.</li>
                <li><span className="font-semibold text-charcoal">Right to Delete:</span> You may have a right to request that we delete the personal information we maintain about you.</li>
                <li><span className="font-semibold text-charcoal">Right to Correct:</span> You may have a right to request that we correct the inaccurate personal information we maintain about you.</li>
                <li><span className="font-semibold text-charcoal">Right of Portability:</span> You may have a right to receive a copy of the personal information we hold about you and to request that we transfer it to a third party, in certain circumstances and with certain exceptions.</li>
                <li><span className="font-semibold text-charcoal">Restriction of Processing:</span> You may have the right to ask us to stop or restrict our processing of personal information.</li>
                <li><span className="font-semibold text-charcoal">Withdrawal of Consent:</span> Where we rely on consent to process your personal information, you may have the right to withdraw this consent.</li>
                <li><span className="font-semibold text-charcoal">Appeal:</span> You may have a right to appeal our decision if we decline to process your request. You can do so by replying directly to our denial.</li>
                <li><span className="font-semibold text-charcoal">Managing Communication Preferences:</span> We may send you promotional emails, and you may opt out of receiving these at any time by using the unsubscribe option displayed in our emails to you. If you opt out, we may still send you non-promotional emails, such as those about your account or orders that you have made.</li>
              </ul>
              
              <p className="mt-4">
                You may exercise any of these rights where indicated on our Site or by contacting us using the contact details provided below.
              </p>
              <p>
                We will not discriminate against you for exercising any of these rights. We may need to collect information from you to verify your identity, such as your email address or account information, before providing a substantive response to the request. In accordance with applicable laws, You may designate an authorized agent to make requests on your behalf to exercise your rights. Before accepting such a request from an agent, we will require that the agent provide proof you have authorized them to act on your behalf, and we may need you to verify your identity directly with us. We will respond to your request in a timely manner as required under applicable law.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Complaints
              </h2>
              <p>
                If you have complaints about how we process your personal information, please contact us using the contact details provided below. If you are not satisfied with our response to your complaint, depending on where you live you may have the right to appeal our decision by contacting us using the contact details set out below, or lodge your complaint with your local data protection authority.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                International Users
              </h2>
              <p>
                Please note that we may transfer, store and process your personal information outside the country you live in, including the United States. Your personal information is also processed by staff and third party service providers and partners in these countries.
              </p>
              <p>
                If we transfer your personal information out of Europe, we will rely on recognized transfer mechanisms like the European Commission&apos;s Standard Contractual Clauses, or any equivalent contracts issued by the relevant competent authority of the UK, as relevant, unless the data transfer is to a country that has been determined to provide an adequate level of protection.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Contact
              </h2>
              <p>
                Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights available to you, please call [<a href="tel:89717824422" className="text-botanical hover:text-charcoal underline transition-colors font-medium">89717824422</a> or <a href="tel:897172552" className="text-botanical hover:text-charcoal underline transition-colors font-medium">897172552</a>] or email us at{' '}
                <a href="mailto:22lunaskin@gmail.com" className="text-botanical hover:text-charcoal underline transition-colors">
                  22lunaskin@gmail.com
                </a>
                . or 5, Rest House, Kasturba Cross Road, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Shared Footer */}
      <Footer />
    </main>
  );
}
