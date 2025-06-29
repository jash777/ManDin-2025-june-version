import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with back button */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-orange hover:text-white transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} />
          <span className="font-['Gilroy-Medium']">Back to Home</span>
        </button>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 lg:p-12">
          <h1 className="font-['Denton-Bold'] text-3xl lg:text-4xl text-orange mb-2">
            Terms & Conditions
          </h1>
          
          <p className="font-['Gilroy-Regular'] text-gray-400 mb-8">
            Last updated on 10-05-2025 20:49:26
          </p>
          
          <div className="space-y-6 font-['Gilroy-Regular'] text-gray-300 leading-relaxed">
            <p className="text-lg">
              These Terms and Conditions, along with privacy policy or other terms ("Terms") constitute a binding
              agreement by and between MANDIN STUDIOS LLP, ("Website Owner" or "we" or "us" or "our") and
              you ("you" or "your") and relate to your use of our website, goods (as applicable) or services (as
              applicable) (collectively, "Services").
            </p>

            <p>
              By using our website and availing the Services, you agree that you have read and accepted these Terms
              (including the Privacy Policy). We reserve the right to modify these Terms at any time and without
              assigning any reason. It is your responsibility to periodically review these Terms to stay informed of
              updates.
            </p>

            <p>The use of this website or availing of our Services is subject to the following terms of use:</p>

            <div className="space-y-4">
              <div className="flex flex-col space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>
                    To access and use the Services, you agree to provide true, accurate and complete information to us
                    during and after registration, and you shall be responsible for all acts done through the use of your
                    registered account.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>
                    Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness,
                    performance, completeness or suitability of the information and materials offered on this website
                    or through the Services, for any specific purpose. You acknowledge that such information and
                    materials may contain inaccuracies or errors and we expressly exclude liability for any such
                    inaccuracies or errors to the fullest extent permitted by law.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>
                    Your use of our Services and the website is solely at your own risk and discretion. You are
                    required to independently assess and ensure that the Services meet your requirements.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>
                    The contents of the Website and the Services are proprietary to Us and you will not have any
                    authority to claim any intellectual property rights, title, or interest in its contents.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>
                    You acknowledge that unauthorized use of the Website or the Services may lead to action against
                    you as per these Terms or applicable laws.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>
                    You agree to pay us the charges associated with availing the Services.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>
                    You agree not to use the website and/or Services for any purpose that is unlawful, illegal or
                    forbidden by these Terms, or Indian or local laws that might apply to you.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>
                    You agree and acknowledge that website and the Services may contain links to other third party
                    websites. On accessing these links, you will be governed by the terms of use, privacy policy and
                    such other policies of such third party websites.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>
                    You understand that upon initiating a transaction for availing the Services you are entering into a
                    legally binding and enforceable contract with the us for the Services.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>
                    You shall be entitled to claim a refund of the payment made by you in case we are not able to
                    provide the Service. The timelines for such return and refund will be according to the specific
                    Service you have availed or within the time period provided in our policies (as applicable). In case
                    you do not raise a refund claim within the stipulated time, than this would make you ineligible for
                    a refund.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>
                    Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to
                    perform an obligation under these Terms if performance is prevented or delayed by a force majeure
                    event.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>
                    These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and
                    construed in accordance with the laws of India.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>
                    All disputes arising out of or in connection with these Terms shall be subject to the exclusive
                    jurisdiction of the courts in Hyderabad, TELANGANA.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>
                    All concerns or communications relating to these Terms must be communicated to us using the
                    contact information provided on this website.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="font-['Denton-Bold'] text-xl text-orange mb-4">Contact Us</h3>
              <p className="text-gray-400">
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <div className="mt-3 space-y-1">
                <p><span className="text-orange">Email:</span> info@mandinstudios.com</p>
                <p><span className="text-orange">Phone:</span> +91-9115962222</p>
                <p><span className="text-orange">Address:</span> Hyderabad, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;