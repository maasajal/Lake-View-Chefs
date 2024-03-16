import PropTypes from "prop-types";
const WantToCook = ({ wantToCook }) => {
  return (
    <>
      <h3 className="text-2xl font-semibold text-center border-b-2 pb-4 w-8/12 mx-auto">
        Want to cook: <span>{wantToCook.length}</span>
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {wantToCook.map((cook, idx) => (
              <tr className="hover:bg-gray-100">
                <th>{idx + 1}</th>
                <td>{cook.name} </td>
                <td>{cook.preparing_time} </td>
                <td>{cook.calories} </td>
                <th>
                  <button className="btn bg-[#0BE58A] border-none rounded-full hover:bg-[#0BE58A] px-6">
                    Preparing
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
WantToCook.prototype = {
  wantToCook: PropTypes.object.isRequired,
};
export default WantToCook;
