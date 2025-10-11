"use client"

import { CustomButton } from "@/Components/Button/CustomButton";

const visualMerchandisingTypes = [
    {
        name: "Displays",
        description: "Eye-catching retail displays that enhance product visibility and brand presence",
        features: ["Modular design", "Easy assembly", "Brand customization"]
    },
    {
        name: "Point of Purchase",
        description: "Strategic POP materials that drive impulse purchases and brand engagement",
        features: ["High-impact graphics", "Durable materials", "Flexible placement"]
    },
    {
        name: "Travel Retail Installations",
        description: "Specialized installations for airport and travel retail environments",
        features: ["Security compliant", "Space optimized", "Premium materials"]
    },
    {
        name: "Shop Window & Backlit Panels",
        description: "Stunning window displays and illuminated panels that attract customers",
        features: ["LED lighting", "Weather resistant", "Custom sizing"]
    }
];

export default function VisualMerchandisingSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="text-center mb-16 opacity-0 -translate-x-1">
                    <p className="text-primary font-semibold uppercase">Visual Merchandising</p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Visual Merchandising Solutions
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Complete visual merchandising solutions to enhance brand presence and drive sales
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {visualMerchandisingTypes.map((solution, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow opacity-0 -translate-x-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {solution.name}
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {solution.description}
                            </p>
                            <ul className="space-y-2">
                                {solution.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <CustomButton href="/contact">
                        Learn More About Our Solutions
                    </CustomButton>
                </div>
            </div>
        </section>
    );
}
