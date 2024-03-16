import PropTypes from "prop-types";
const WantToCook = ({ wantToCook }) => {
  return (
    <>
      <h3 className="text-2xl font-semibold text-center border-b-2 pb-4 w-8/12 mx-auto">
        Want to cook: <span>{wantToCook.length}</span>
      </h3>
    </>
  );
};
WantToCook.prototype = {
  wantToCook: PropTypes.object.isRequired,
};
export default WantToCook;
