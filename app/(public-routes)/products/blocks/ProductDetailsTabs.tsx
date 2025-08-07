interface ProductTabsProps {
    tabs: { icon: React.ElementType; label: string; count?: number }[];
}

export default function ProductDetailsTabs({ tabs }: ProductTabsProps) {
    return (
        <nav className="border-b border-gray-200">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500">
                {tabs.map((tab, index) => (
                    <li key={tab.label} className="mr-2">
                        <button
                            className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group
                ${
                    index === 0
                        ? 'border-gray-900 text-gray-900'
                        : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                }
                bg-transparent hover:bg-gray-100`}
                        >
                            <tab.icon className="w-4 h-4 mr-2" />
                            {tab.label}
                            {tab.count !== undefined && (
                                <span className="ml-1 text-xs font-semibold">{`(${tab.count})`}</span>
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
