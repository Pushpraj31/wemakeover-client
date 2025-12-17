/* eslint-disable react/prop-types */
import ServiceModal from "../ServiceModal";

const ProfessionalMehendiModal = ({ onClose, services = [], currentServiceId = null, onServiceChange = null }) => {
  const mehendiCard = [
    {
      img: "/images/modals/Professional Mehendi/BridalMehendi.png",
      cardHeader: "Bridal Mehendi",
      serviceCategory: "Professional Mehendi",
      description:
        "Let your hands tell a love story with our bespoke Bridal Mehendi designs",
      Price: null,
      PriceEstimate: "2.5k-11k",
      includingTax: true,
      service: "Both Hands & Legs",
      button: "Add +",
      service_id: "bridal_mehendi",
    },
    {
      img: "/images/modals/Professional Mehendi/MehendiForAll.png",
      cardHeader: "Mehendi For All",
      serviceCategory: "Professional Mehendi",
      description:
        "From casual charm to festive flair—mehendi that suits every style",
      Price: "499",
      PriceEstimate: null,
      includingTax: true,
      service: "Both Hands",
      button: "Enquiry Now",
      service_id: "mehendi_for_all",
    },
    {
      img: "/images/modals/Professional Mehendi/CustomDesigns.png",
      cardHeader: "Custom Designs",
      serviceCategory: "Professional Mehendi",
      description:
        "From names to motifs—custom mehendi that's as unique as you are ",
      pricingNote: "Get in touch for pricing",
      button: "Add +",
      service_id: "custom_designs_mehendi",
    },
  ];
  return (
    <ServiceModal
      title="Professional Mehendi"
      cards={mehendiCard}
      onClose={onClose}
      services={services}
      currentServiceId={currentServiceId}
      onServiceChange={onServiceChange}
      onConfirm={() => alert("Professional Mehendi Booking Confirmed!")}
      source="professional-mehendi"
    />
  );
};

export default ProfessionalMehendiModal;
