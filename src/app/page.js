import Carousel from "@/components/Carousel";
import AboutVanta from "@/components/Contents/AboutVanta";
import Navbar from "@/components/Navbar";
import NovelList from "@/components/NovelList";

const Home = () => {
  const images = [];

  for (let i = 1; i <= 10; i++) {
    images.push({
      src: `/background/background-${i}.webp`,
      alt: `Background ${i}`,
      title: `Novel ${i}`,
      description: `Deskripsi Novel ${i}`,
    });
  }

  return (
    <div className="min-h-screen">
      <Carousel images={images} />
      <Navbar />
      <div className="m-4 mx-auto max-w-5xl rounded-lg border-2 p-4 text-black shadow-lg">
        <h1 className="text-center text-3xl font-bold">VANTA Translation</h1>
        <AboutVanta />
      </div>
      <div className="mx-auto p-4 pb-20">
        <NovelList images={images} />
      </div>
    </div>
  );
};

export default Home;
