import PropTypes from "prop-types";
import { FaCircleCheck } from "react-icons/fa6";

const Feature = ({ feature }) => {
    return (
        <div>
            <p className="flex items-center ">
                <FaCircleCheck className="text-green-500 mr-2" />
                {feature}
            </p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string,
};

export default Feature;
