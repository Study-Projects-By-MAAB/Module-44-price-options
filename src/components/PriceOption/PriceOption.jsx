import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;

    return (
        <div className="bg-blue-500 rounded-md p-4 flex flex-col text-white text-center">
            <h2 className="">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl my-8">{name}</h4>
            <div className="pl-6 flex-grow">
                {features.map((feature) => (
                    <Feature key={feature.id} feature={feature} />
                ))}
            </div>
            <button className="mt-12 bg-green-600 w-full py-4 font-bold rounded-lg">
                Buy Now
            </button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
};

export default PriceOption;
