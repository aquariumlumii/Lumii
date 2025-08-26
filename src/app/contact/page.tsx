'use client';

import Image from 'next/image';
import { Mail, MapPin, Phone } from "lucide-react";

const ContactUsPage: React.FC = () => {
  return (
    <div className="bg-[#0A0A10] text-gray-200 pt-8 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We are here to support our partners and clients worldwide. Whether you are interested in importing our freshwater 
            ornamental fish, exploring a long-term partnership, or have specific inquiries about export arrangements, 
            we welcome your message. Reach out today—we look forward to connecting with you.
          </p>
        </div>

        <div className="bg-[#181820] p-8 rounded-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            <div className="rounded-xl">
              <Image
                src="/images/sample-10.jpg"
                alt="Aquatic Farming Facility"
                width={1200}
                height={600}
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>

            <div className="bg-[#181820] p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center mr-4">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Email</h3>
                    <a
                      href="mailto:lumii.go2@gmail.com"
                      className="text-gray-400 hover:text-cyan-500"
                    >
                      lumii.go2@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center mr-4">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">WhatsApp</h3>
                    <a
                      href="https://wa.me/94765304602"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-500"
                    >
                      +94 76 530 4602
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center mr-4">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Address</h3>
                    <p className="text-gray-400">
                      No. 40/1, <br />
                      Mahavidana Watta, <br />
                      Kalapugama, <br />
                      Moronthuduwa, <br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
