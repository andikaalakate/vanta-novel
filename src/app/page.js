import Carousel from "@/components/Carousel";
import AboutVanta from "@/components/Contents/AboutVanta";
import Navbar from "@/components/Navbar";
import NovelList from "@/components/NovelList";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Carousel />
      <Navbar />
      <div className="m-4 mx-auto max-w-5xl rounded-lg border-2 p-4 text-black shadow-lg">
        <h1 className="text-center text-3xl font-bold">VANTA Translation</h1>
        <AboutVanta />
      </div>
      <div className="p-4 mx-auto">
      <NovelList />
      </div>
    </div>
  );
};

export default Home;
