const bannerImage = "./images/banner.jpg";
const Banner = () => {
  return (
    <>
      <div
        className="hero rounded-3xl"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-center text-neutral-content py-40">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex justify-evenly px-5">
              <button className="btn bg-[#0BE58A] border-none rounded-full hover:bg-[#0BE58A]">
                Explore Now
              </button>
              <button className="btn bg-transparent text-white rounded-full hover:bg-[#0BE58A] hover:text-black">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
