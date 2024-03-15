import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from "prop-types";

const Recipe = ({ recipe }) => {
  const { image, name, description, ingredients, preparing_time, calories } =
    recipe;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-5 pt-10">
        <img src={image} alt="Recipe photo" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="my-3">{description}</p>
        <div className="border-t-2 border-b-2 py-5">
          <h3 className="text-xl">
            Ingredients <span>{ingredients.length}</span>
          </h3>
          <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
          </ul>
        </div>
        <div className="flex my-5">
          <p className="flex items-center gap-2">
            <IoMdTime />
            <span>{preparing_time}</span>
            <span>minutes</span>
          </p>
          <p className="flex items-center gap-2">
            <AiOutlineFire />
            <span>{calories}</span>
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
  );
};
Recipe.prototype = {
  recipe: PropTypes.object.isRequired,
};
export default Recipe;
