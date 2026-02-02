import { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface ImageGalleryModalProps {
  images: { src: string; alt: string }[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

const ImageGalleryModal = ({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}: ImageGalleryModalProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  // Handle ESC key to close
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      // Reset to initial index when opening
      if (mainSwiper) {
        mainSwiper.slideTo(initialIndex, 0);
      }
      setActiveIndex(initialIndex);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown, initialIndex, mainSwiper]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 flex flex-col bg-black/95">
      {/* Header with counter and close button */}
      <div className="flex items-center justify-between p-2 sm:p-4 text-white">
        <span className="text-sm sm:text-lg font-medium">
          {activeIndex + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close gallery"
        >
          <IoClose className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      {/* Main Image Swiper */}
      <div className="flex-1 relative flex items-center justify-center px-2 sm:px-8 md:px-16">
        {/* Custom Prev Button */}
        <button
          className="gallery-prev absolute left-1 sm:left-4 z-10 p-1.5 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Previous image"
        >
          <IoChevronBack className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
        </button>

        <Swiper
          modules={[Navigation, Thumbs, Keyboard]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            prevEl: ".gallery-prev",
            nextEl: ".gallery-next",
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          keyboard={{ enabled: true }}
          onSwiper={setMainSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          initialSlide={initialIndex}
          className="w-full h-full max-w-6xl"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-[70vh] max-w-full object-contain mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Next Button */}
        <button
          className="gallery-next absolute right-1 sm:right-4 z-10 p-1.5 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Next image"
        >
          <IoChevronForward className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
        </button>
      </div>

      {/* Thumbnail Swiper */}
      <div className="px-2 sm:px-4 py-2 sm:py-4 bg-black/50">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={4}
          slidesPerView="auto"
          watchSlidesProgress
          centerInsufficientSlides
          className="thumbs-swiper max-w-6xl mx-auto"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="w-14! h-12! sm:w-20! sm:h-16! cursor-pointer"
            >
              <div
                className={`w-full h-full border-2 transition-colors ${
                  activeIndex === index
                    ? "border-red-500"
                    : "border-transparent hover:border-white/50"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageGalleryModal;
