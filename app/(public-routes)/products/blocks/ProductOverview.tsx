interface ProductOverviewProps {
    description: string;
}

export default function ProductOverview({ description }: ProductOverviewProps) {
    return (
        <div>
            <p className="text-gray-700 leading-relaxed">{description}</p>
            <p>
                Easily create and customize professional invoices with our Free
                Invoice Generator. Whether you are a freelancer, small business
                owner, or entrepreneur, our tool helps you create accurate,
                professional invoices for free. Simply input your details,
                customize the invoice to fit your needs, and download it in PDF
                format, ready to send to your clients. No sign-up required.
            </p>
            <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
    );
}
