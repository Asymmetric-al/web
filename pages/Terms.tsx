import React from 'react';
import { Section, Container, DitherGrid } from '../components/UI';

const Terms: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <DitherGrid className="opacity-10 fixed inset-0 z-0" />
      <Container className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-12 tracking-tighter">Terms of Service</h1>
        
        <div className="prose prose-invert prose-lg max-w-3xl pb-24">
            <p className="font-mono text-xs text-coral uppercase tracking-widest mb-8">Effective Date: November 14, 2025</p>
            
            <p className="lead text-xl text-gray-300">
                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Asymmetric.al website and Mission Control platform (the "Service") operated by Global Fellowship Inc. ("us", "we", or "our").
            </p>

            <h3>1. Acceptance of Terms</h3>
            <p>
                By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. Global Fellowship Inc. is the Merchant of Record for all transactions on this platform.
            </p>

            <h3>2. Description of Service</h3>
            <p>
                Asymmetric.al provides a comprehensive operations platform ("Mission Control") for missionary sending organizations, including CRM, financial processing, website management, and communication tools.
            </p>

            <h3>3. Accounts</h3>
            <p>
                When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            <p>
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
            </p>

            <h3>4. Acceptable Use</h3>
            <p>
                You agree not to use the Service to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
                <li>Violate any laws or regulations.</li>
                <li>Infringe the rights of any third party, including intellectual property, privacy, or publicity rights.</li>
                <li>Transmit any material that is abusive, harassing, tortious, defamatory, vulgar, pornographic, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.</li>
                <li>Transmit any unsolicited or unauthorized advertising, promotional materials, "junk mail," "spam," "chain letters," "pyramid schemes," or any other form of solicitation.</li>
            </ul>

            <h3>5. Intellectual Property</h3>
            <p>
                The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Global Fellowship Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
            <p>
                <strong>Open Source Components:</strong> Certain components of the Service are released under open source licenses. Your use of those components is governed by the applicable open source license.
            </p>

            <h3>6. Payment, Billing, and Donations</h3>
            <p>
                <strong>6.1 SaaS Subscriptions:</strong> Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis. Your subscription will automatically renew at the end of each Billing Cycle unless you cancel it.
            </p>
            <p>
                <strong>6.2 Donations:</strong> Donations made through the "Give" page are processed as charitable contributions to Global Fellowship Inc., a 501(c)(3) nonprofit organization.
            </p>
            <p>
                <strong>6.3 Currency:</strong> All transactions are processed in United States Dollars (USD) unless otherwise explicitly stated.
            </p>

            <h3>7. Refund and Cancellation Policy</h3>
            <p>
                <strong>7.1 Subscription Cancellation:</strong> You may cancel your Subscription renewal either through your online account management page or by contacting our customer support team. Cancellation takes effect at the end of the current billing period.
            </p>
            <p>
                <strong>7.2 Subscription Refunds:</strong> Payments are non-refundable and there are no refunds or credits for partially used periods.
            </p>
            <p>
                <strong>7.3 Donation Refunds:</strong> Donations are generally non-refundable. If you have made an error in making your donation or change your mind about contributing, please contact us at info@asymmetric.al within 7 days. Refunds are granted at our discretion or in the event of a proven technical error.
            </p>

            <h3>8. Delivery Policy</h3>
            <p>
                <strong>8.1 Digital Goods:</strong> Upon successful payment for a Subscription, access to the Service is granted immediately. Login credentials and access instructions are provided electronically via the email address associated with your account.
            </p>
            <p>
                <strong>8.2 Donation Receipts:</strong> Tax-deductible receipts for donations are delivered electronically immediately upon successful processing of the gift.
            </p>

            <h3>9. Termination</h3>
            <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
            </p>

            <h3>10. Limitation of Liability</h3>
            <p>
                In no event shall Global Fellowship Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
            </p>

            <h3>11. Disclaimer</h3>
            <p>
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
            </p>

            <h3>12. Governing Law</h3>
            <p>
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>

            <h3>13. Changes</h3>
            <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>

            <div className="mt-12 pt-12 border-t border-white/10">
                <p className="text-sm text-gray-500">
                    <strong>Contact Us</strong><br/>
                    If you have any questions about these Terms, please contact us:<br/>
                    <span className="text-white">info@asymmetric.al</span><br/><br/>
                    <strong>Mailing Address:</strong><br/>
                    Global Fellowship Inc.<br/>
                    Attn: Asymmetric.al<br/>
                    [Physical Address Redacted for Demo]
                </p>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Terms;