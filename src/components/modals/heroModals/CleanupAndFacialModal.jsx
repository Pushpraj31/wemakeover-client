/* eslint-disable react/prop-types */
import ServiceModal from "../ServiceModal";

const CleanupAndFacialModal = ({ onClose, services = [], currentServiceId = null, onServiceChange = null }) => {
  const card = [
    {
      title: "Regular",
      data: [
        {
          img: "/images/modals/cleanup and facical/regular/VitaminCBrighteningFacial.png",
          cardHeader: "Vit C Brightening Facial",
          description:
            "Restores luminosity and evens skin tone with the power of Vitamin C",
          price: "799",
          taxIncluded: true,
          duration: "1hr 10mins",
          button: "Add +",
          service_id: "vitamin_c_brightening_facial_regular",
        },
        {
          img: "/images/modals/cleanup and facical/regular/FruitFacial.png",
          cardHeader: "Fruit Facial",
          description:
            "Indulge in a fruity rejuvenation for instantly fresh skin",
          price: "649",
          taxIncluded: true,
          duration: "45mins",
          button: "Add +",
          service_id: "fruit_facial_regular",
        },
        {
          img: "/images/modals/cleanup and facical/regular/Cleanup.png",
          cardHeader: "Face & Neck Cleanup",
          description:
            "Indulge in a fruity rejuvenation for instantly fresh skin",
          price: "599",
          taxIncluded: true,
          duration: "45mins",
          button: "Add +",
          service_id: "cleanup_regular",
        },
        {
          img: "/images/modals/cleanup and facical/regular/DeTanFacial.png",
          cardHeader: "De-Tan Facial",
          description:
            "Combat early signs of ageing with a deeply nourishing facial experience",
          price: "799",
          taxIncluded: true,
          duration: "1hr 10mins",
          button: "Add +",
          service_id: "detan_facial_regular",
        },
        {
          img: "/images/modals/cleanup and facical/premium/MamaEarthUbtanFacial.png",
          cardHeader: "Mamma Earth Ubtan Facial",
          description:
            "Brighten and revive your skin with the natural goodness of ubtan and turmeric",
          price: "699",
          taxIncluded: true,
          duration: "1hr 10mins",
          button: "Add +",
          service_id: "mamma_earth_ubtan_facial_regular",
        },
      ],
    },
    {
      title: "Premium",
      data: [
        {
          img: "/images/modals/cleanup and facical/premium/RaagaRejuvenatingFacial.png",
          cardHeader: "Raaga Rejuvenating Facial",
          description:
            "Experience a serene skincare journey with Raaga's signature rejuvenating facial",
          price: "1199",
          taxIncluded: true,
          duration: "1hr 10mins",
          button: "Add +",
          service_id: "o3_plus_cleanup_premium",
        },
        {
          img: "/images/modals/cleanup and facical/regular/AntiAgeing.png",
          cardHeader: "Raaga Anti-Ageing Facial",
          description:
            "Combat early signs of ageing with a deeply nourishing facial experience",
          price: "1199",
          taxIncluded: true,
          duration: "1hr 10mins",
          button: "Add +",
          service_id: "anti_ageing_30_plus_premium",
        },
        {
          img: "/images/modals/cleanup and facical/premium/O3+ Shine & Glow Facial.png",
          cardHeader: "O3+ Shine & Glow Facial",
          description:
            "Restores luminosity and evens skin tone with the power of Vitamin C",
          price: "1499",
          taxIncluded: true,
          duration: "1hr 10mins",
          button: "Add +",
          service_id: "o3_stay_young_facial_premium",
        },
      ],
    },
    {
      title: "Bridal",
      data: [
        {
          img: "/images/modals/cleanup and facical/bridal/O3+BridalFacial.png",
          cardHeader: "O3+ Bridal Facial",
          description:
            "Get wedding-ready with the O3+ Bridal Facial-crafted for an instant bridal glow",
          price: "1999",
          taxIncluded: true,
          duration: "1hr 45mins",
          button: "Add +",
          service_id: "o3_bridal_facial_bridal",
        },
        {
          img: "/images/modals/cleanup and facical/bridal/Kanpeki Bridal Facial.png",
          cardHeader: "Kanpeki Bridal Facial",
          description:
            "Get the best glow & sparkling experience by Kanpeki's bridal facial kit",
          price: "1999",
          taxIncluded: true,
          duration: "1hr 45mins",
          button: "Add +",
          service_id: "aroma_magic_bridal_facial_bridal",
        },
      ],
    },
  ];

  return (
    <ServiceModal
      title="Cleanup & Facial"
      gridCard={card}
      onClose={onClose}
      services={services}
      currentServiceId={currentServiceId}
      onServiceChange={onServiceChange}
      onConfirm={() => alert("Cleanup & Facial Booking Confirmed!")}
    />
  );
};

export default CleanupAndFacialModal;
