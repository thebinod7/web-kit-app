interface ProductOverviewProps {
    description: string;
}

export default function ProductOverview({ description }: ProductOverviewProps) {
    return (
        <div>
            <p className="text-gray-700 leading-relaxed">
                {description || 'No description available!'}
            </p>
        </div>
    );
}
