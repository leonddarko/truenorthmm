import Image from "next/image";

export default function Home() {
  const brandImages = [
    { id: 0, image: "1xbet.png" },
    { id: 1, image: "cbg.png" },
    { id: 2, image: "cocacola.png" },
    { id: 3, image: "danone.png" },
    { id: 4, image: "glovo.png" },
    { id: 5, image: "jumia.png" },
    { id: 6, image: "kellogs.png" },
    { id: 7, image: "mastercard.png" },
    { id: 8, image: "mtn.jpg" },
    { id: 9, image: "promasidor.png" },
    { id: 10, image: "shalina.png" },
    { id: 11, image: "societegeneral.png" },
    { id: 12, image: "unilever.png" },
  ];
  return (
    <>
      <div
        className="px-6 md:px-16 pb-16 h-screen flex justify-start items-end z-0 bg-black
      bg-[url('/assets/mediamonitoringbg.jpeg')] bg-no-repeat bg-cover bg-top rounded-b-3xl shadow"
      >
        <div>
          <h1 className="text-white font-notoserif text-5xl md:text-7xl font-bold max-w-3xl">
            Monitoring. Evaluating and Measuring.
          </h1>
          <p className="text-white font-notosans font-medium">
            We measure what Africans buy, watch and listen to.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-16 py-8">
        <h2 className="font-notoserif text-black/30 text-xl font-medium text-center pb-2">
          Brands That Trust Us
        </h2>

        <div className="hidden md:flex justify-center gap-8 ">
          {brandImages.map((item) => (
            <div key={item.id}>
              <Image
                className="inline-block"
                src={`/assets/brands/${item.image}`}
                width={66}
                height={66}
                alt="brandlogo"
              />
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <div className="carousel carousel-center rounded-box space-x-4 p-4">
            {brandImages.map((item) => (
              <div key={item.id} className="carousel-item">
                <Image
                  className="inline-block"
                  src={`/assets/brands/${item.image}`}
                  width={66}
                  height={66}
                  alt="brandlogo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 pb-10">
        <h2 className=" text-black/50 font-notoserif font-bold text-3xl m-auto text-center max-w-md">
          Unlocking insights and driving growth through data-driven solutions.
        </h2>

        <div className="columns-3 mt-10 gap-4">
          <div className="rounded-t-md shadow-sm">
            <Image
              className=" rounded-t-md"
              src="/assets/mediamonitoringcardimg.jpeg"
              alt="Card Image"
              width={1280}
              height={640}
            />
          </div>
        </div>
      </div>
    </>
  );
}
