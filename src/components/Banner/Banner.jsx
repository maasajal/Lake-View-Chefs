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
          <div className="max-w-4xl">
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Experience culinary mastery with personalized cooking classes at
              Lake View Restaurant. Explore a world of flavors tailored to your
              taste buds, guided by expert chefs in a picturesque lakeside
              setting.
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
