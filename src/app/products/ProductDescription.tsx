interface ProductDescriptionProps {
    description: string;
}

export default function ProductDescription({ description }: ProductDescriptionProps) {
    return (
        <div className="mt-12 border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-bold text-[#2E4A35] mb-4">Description</h2>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
