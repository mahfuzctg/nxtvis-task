import React from "react";
import {
  FaAmazon,
  FaApple,
  FaDropbox,
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaMicrosoft,
  FaPaypal,
  FaSlack,
  FaSpotify,
  FaTwitter,
  FaUber,
} from "react-icons/fa";
import Animation from "../reuseables/Animation";
import Title from "../reuseables/Title";

const partners = [
  { id: 1, name: "Apple", icon: <FaApple size={50} /> },
  { id: 2, name: "Google", icon: <FaGoogle size={50} /> },
  { id: 3, name: "Microsoft", icon: <FaMicrosoft size={50} /> },
  { id: 4, name: "Amazon", icon: <FaAmazon size={50} /> },
  { id: 5, name: "Facebook", icon: <FaFacebook size={50} /> },
  { id: 6, name: "Twitter", icon: <FaTwitter size={50} /> },
  { id: 7, name: "LinkedIn", icon: <FaLinkedin size={50} /> },
  { id: 8, name: "Slack", icon: <FaSlack size={50} /> },
  { id: 9, name: "Spotify", icon: <FaSpotify size={50} /> },
  { id: 10, name: "Uber", icon: <FaUber size={50} /> },
  { id: 11, name: "Dropbox", icon: <FaDropbox size={50} /> },
  { id: 12, name: "PayPal", icon: <FaPaypal size={50} /> },
];

const PartnerSection = () => {
  return (
    <Animation>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Title
            title="Global Partners"
            subtitle="Collaborating with Industry Leaders to Drive Innovation and Excellence"
            color="blue-600"
          />
          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="relative w-20 h-20 mx-auto bg-[#6366F1] text-white flex items-center justify-center clip-hexagon shadow-md transition-transform duration-300 transform hover:scale-110 hover:shadow-lg hover:rotate-3"
              >
                <div className="text-white">{partner.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Animation>
  );
};

export default PartnerSection;
