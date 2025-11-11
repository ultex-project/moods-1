'use client';

export type SortOption = 'default' | 'name-asc' | 'price-asc' | 'price-desc';

interface FilterBarProps {
    title?: string;
    itemsPerPage: number;
    sortBy: SortOption;
    categories: string[];
    activeCategory: string;
    onItemsPerPageChange: (value: number) => void;
    onSortChange: (value: SortOption) => void;
    onCategoryChange: (value: string) => void;
}

export default function FilterBar({
                                      title = 'Full Shop',
                                      itemsPerPage,
                                      sortBy,
                                      categories,
                                      activeCategory,
                                      onItemsPerPageChange,
                                      onSortChange,
                                      onCategoryChange,
                                  }: FilterBarProps) {
    return (
        <div className="border border-gray-200 rounded-lg shadow-sm px-6 py-6 mb-10 bg-white space-y-5">
            {/* Title + basic filter controls */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h1 className="text-xl md:text-2xl font-semibold text-[#2E4A35] font-amd">
                    {title}
                </h1>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                    {/* Show Select */}
                    <label className="flex items-center gap-2 text-gray-700 font-medium">
                        <span>Show:</span>
                        <select
                            value={itemsPerPage}
                            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
                            className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#2E4A35]"
                            aria-label="Items per page"
                        >
                            {[6, 12, 24].map((count) => (
                                <option key={count} value={count}>
                                    {count}
                                </option>
                            ))}
                        </select>
                    </label>

                    {/* Sort By Select */}
                    <label className="flex items-center gap-2 text-gray-700 font-medium">
                        <span>Sort By:</span>
                        <select
                            value={sortBy}
                            onChange={(e) => onSortChange(e.target.value as SortOption)}
                            className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#2E4A35]"
                            aria-label="Sort products"
                        >
                            <option value="default">Default</option>
                            <option value="name-asc">Name (A–Z)</option>
                            <option value="price-asc">Price (Low to High)</option>
                            <option value="price-desc">Price (High to Low)</option>
                        </select>
                    </label>
                </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                {categories.map((category) => {
                    const isActive = activeCategory === category;
                    return (
                        <button
                            type="button"
                            key={category}
                            onClick={() => onCategoryChange(category)}
                            className={[
                                'px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-200',
                                isActive
                                    ? 'bg-[#2E4A35] text-white border-[#2E4A35]'
                                    : 'border-gray-300 text-gray-700 hover:bg-gray-100',
                            ].join(' ')}
                            aria-pressed={isActive}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
