import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from "prop-types";

const Recipe = ({ recipe, handleWantToCook }) => {
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
            Ingredients: <span>{ingredients.length}</span>
          </h3>
          <ul>
            {ingredients.map((ingredient, idx) => (
              <span key={idx}>
                <li className="list-disc ml-6">{ingredient}</li>
              </span>
            ))}
          </ul>
        </div>
        <div className="flex my-5">
          <p className="flex items-center gap-2">
            <IoMdTime /> {preparing_time} minutes
          </p>
          <p className="flex items-center gap-2">
            <AiOutlineFire /> {calories} calories
          </p>
        </div>
        <div className="card-actions">
          <button
            onClick={() => {
              handleWantToCook(recipe);
            }}
            className="btn bg-[#0BE58A] border-none rounded-full hover:bg-[#0BE58A] px-6"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};
Recipe.prototype = {
  recipe: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func,
};
export default Recipe;
