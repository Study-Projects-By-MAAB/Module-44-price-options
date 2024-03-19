import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const membershipOptions = [
        {
            id: 1,
            name: "Basic Membership",
            price: 49.99,
            features: [
                "Access to gym facilities during regular hours",
                "Use of cardio equipment",
                "Free weights area",
                "Locker room access",
                "Fitness classes (limited)",
                "Nutritional guidance",
            ],
        },
        {
            id: 2,
            name: "Premium Membership",
            price: 79.99,
            features: [
                "Unlimited access to gym facilities",
                "Group fitness classes (yoga, spin, etc.)",
                "Personalized workout plans",
                "Sauna and steam room access",
                "Discounts on personal training sessions",
                "Access to swimming pool",
                "Sports court (basketball, tennis, etc.)",
            ],
        },
        {
            id: 3,
            name: "Family Membership",
            price: 129.99,
            features: [
                "Covers two adults and up to three children",
                "All benefits of Premium Membership",
                "Childcare services during workouts",
                "Family-friendly fitness classes",
                "Indoor play area for kids",
            ],
        },
        {
            id: 4,
            name: "Student Membership",
            price: 34.99,
            features: [
                "Valid for full-time students with valid ID",
                "Access to gym facilities during specified hours",
                "Use of weight machines",
                "Group study area",
                "Discounts at local healthy eateries",
                "Student-only events and workshops",
            ],
        },
        {
            id: 5,
            name: "Senior Membership",
            price: 39.99,
            features: [
                "Available for members aged 60 and above",
                "Access to gym facilities during off-peak hours",
                "Low-impact fitness classes",
                "Social events for seniors",
                "Chair yoga and stretching sessions",
                "Health seminars and guest speakers",
            ],
        },
    ];

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town </h2>
            <div className="grid md:grid-cols-3 gap-6">
                {membershipOptions.map((option) => (
                    <PriceOption key={option.id} option={option} />
                ))}
            </div>
        </div>
    );
};

export default PriceOptions;
