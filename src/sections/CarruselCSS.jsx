const AdaptiveGallery = () => {
  const images = [
    { id: 1, title: 'Image 1', description: 'Description 1' },
    { id: 2, title: 'Image 2', description: 'Description 2' },
    { id: 3, title: 'Image 3', description: 'Description 3' },
    { id: 4, title: 'Image 4', description: 'Description 4' },
    { id: 5, title: 'Image 5', description: 'Description 5' },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Adaptive Gallery</h2>

      {/*
        En desktop: grid con 3 columnas
        En tablet: grid con 2 columnas
        En mobile: scroll horizontal
      */}
      <div className={`
        lg:grid lg:grid-cols-3 lg:gap-6  /* Desktop: 3 columnas */
        md:grid md:grid-cols-2 md:gap-4   /* Tablet: 2 columnas */
        max-md:flex max-md:overflow-x-auto max-md:scroll-hide max-md:gap-4 /* Mobile: scroll horizontal */
      `}>
        {images.map((image) => (
          <div
            key={image.id}
            className={`
              bg-gray-800 rounded-lg overflow-hidden
              max-md:flex-none max-md:w-[300px] /* Solo en mobile: tamaño fijo */
              md:w-full /* En tablet/desktop: ancho completo del grid */
            `}
          >
            <img
              src={`/api/placeholder/400/250`}
              alt={image.title}
              className="w-full h-[200px] object-cover"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
              <p className="text-gray-400">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdaptiveGallery;