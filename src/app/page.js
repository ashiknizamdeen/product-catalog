"use client";
import { useState, useEffect } from "react";

export default function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  const staticProducts = [
    {
      id: 1,
      title: "Wireless Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      price: 99.99,
      category: "electronics",
    },
    {
      id: 2,
      title: "Running Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      price: 129.99,
      category: "clothing",
    },
    {
      id: 3,
      title: "Coffee Maker",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop",
      price: 79.99,
      category: "appliances",
    },
    {
      id: 4,
      title: "Smartphone",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
      price: 699.99,
      category: "electronics",
    },
    {
      id: 5,
      title: "Desk Lamp",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      price: 45.99,
      category: "home",
    },
    {
      id: 6,
      title: "Winter Jacket",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
      price: 159.99,
      category: "clothing",
    },
    {
      id: 7,
      title: "Blender",
      image:
        "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=300&fit=crop",
      price: 89.99,
      category: "appliances",
    },
    {
      id: 8,
      title: "Table Lamp",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300&h=300&fit=crop",
      price: 65.99,
      category: "home",
    },
  ];

  useEffect(() => {
    setProducts(staticProducts);
    setFilteredProducts(staticProducts);
    //Extract categories using Constructor with mapping to create unique category list
    const uniqueCategories = [
      ...new Set(staticProducts.map((product) => product.category)),
    ];
    setCategories(["all", ...uniqueCategories]);
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  }, [selectedCategory, products]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Product Catalog
        </h1>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Filter by Category:
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-lg capitalize transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-2xl font-bold text-blue-600">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
