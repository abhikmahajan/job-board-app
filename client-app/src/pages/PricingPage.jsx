import React from "react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    features: [
      "Post up to 2 jobs/month",
      "Limited visibility",
      "Basic support",
    ],
  },
  {
    name: "Standard",
    price: "₹499/month",
    features: ["Post 10 jobs/month", "Priority listing", "Email support"],
  },
  {
    name: "Premium",
    price: "₹999/month",
    features: [
      "Unlimited job posts",
      "Top search visibility",
      "24/7 priority support",
      "Direct messaging access",
    ],
  },
];

const PricingPage = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="border p-6 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-2xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-gray-700">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              {plan.price === "₹0" ? "Current Plan" : "Upgrade"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
