"use client"

import Image from "next/image";
import { CustomButton } from "@/Components/Button/CustomButton";
import FloatingCard from "./FloatingCard";
import { BASE_PATH } from "@/lib/basePath";

const packagingTypes = [
    {
        name: "Paper Packaging",
        image: `${BASE_PATH}/img/packaging/paper-packaging.webp`,
        description: "Sustainable paper-based packaging solutions",
        color: "from-blue-50 to-blue-100",
        icon: "📄"
    },
    {
        name: "Textile Packaging",
        image: `${BASE_PATH}/img/packaging/textile-packaging.webp`,
        description: "Eco-friendly textile packaging options",
        color: "from-green-50 to-green-100",
        icon: "🧵"
    },
    {
        name: "Cases",
        image: `${BASE_PATH}/img/packaging/cases.webp`,
        description: "Protective cases for various products",
        color: "from-gray-50 to-gray-100",
        icon: "💼"
    },
    {
        name: "Jewellery & Watch Packaging",
        image: `${BASE_PATH}/img/packaging/jewellery-watch.webp`,
        description: "Luxury packaging for jewelry and watches",
        color: "from-purple-50 to-purple-100",
        icon: "💎"
    },
    {
        name: "E-commerce Packaging",
        image: `${BASE_PATH}/img/packaging/ecommerce-packaging.webp`,
        description: "Optimized packaging for online retail",
        color: "from-orange-50 to-orange-100",
        icon: "📦"
    },
    {
        name: "Luxury Gift Packaging",
        image: `${BASE_PATH}/img/packaging/luxury-gift.webp`, // Using e-commerce image as placeholder
        description: "Premium gift packaging for special occasions",
        color: "from-pink-50 to-pink-100",
        icon: "🎁"
    }
];

export default function PackagingShowcaseSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-primary/5">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="text-center mb-16 opacity-0 -translate-x-1">
                    <p className="text-primary font-semibold uppercase tracking-wider">Our Solutions</p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Packaging Solutions
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Comprehensive packaging solutions designed for sustainability and brand impact
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {packagingTypes.map((packaging, index) => (
                        <FloatingCard key={index} delay={index * 100}>
                            <div className="group hover:-translate-y-1 transition-all duration-300 ease-out">
                                <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">

                                    {/* Image Container */}
                                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                                        <Image
                                            src={packaging.image}
                                            alt={packaging.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            onError={(e) => {
                                                // Fallback to icon if image fails to load
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                const parent = target.parentElement;
                                                if (parent) {
                                                    parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center">
                            <div class="text-6xl">${packaging.icon}</div>
                          </div>
                        `;
                                                }
                                            }}
                                        />

                                        {/* Icon overlay */}
                                        <div className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white bg-opacity-80 rounded-full p-2">
                                            {packaging.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 relative z-10">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                                            {packaging.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                            {packaging.description}
                                        </p>

                                        {/* Hover effect line */}
                                        <div className="mt-4 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300 ease-out"></div>
                                    </div>

                                </div>
                            </div>
                        </FloatingCard>
                    ))}
                </div>

                {/* Enhanced CTA Section */}
                <div className="text-center opacity-0 -translate-y-4">
                    <div className="inline-block group relative overflow-hidden">
                        <CustomButton href="/contact">
                            <span className="relative z-10">Find Out More</span>
                        </CustomButton>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
