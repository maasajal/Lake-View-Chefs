import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";
const Recipe = () => {
  return (
    <div className=" grid grid-cols-2">
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-5 pt-10">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Spaghetti Bolognese</h2>
          <p className="my-3">Classic Italian pasta dish with savory meat sauce.</p>
          <div className="border-t-2 border-b-2 py-5">
            <h3 className="text-xl">
              Ingredients <span>0</span>
            </h3>
            <ul>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
          </div>
          <div className="flex my-5">
            <p className="flex items-center gap-2">
              <IoMdTime />
              <span>30</span>
              <span>minutes</span>
            </p>
            <p className="flex items-center gap-2">
              <AiOutlineFire />
              <span>500</span>
              <span>calories</span>
            </p>
          </div>
          <div className="card-actions">
            <button className="btn bg-[#0BE58A] border-none rounded-full hover:bg-[#0BE58A] px-6">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recipe;
