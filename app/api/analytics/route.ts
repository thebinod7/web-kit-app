import { NextResponse } from 'next/server';

const POSTHOG_API_ENDPOINT = process.env.POSTHOG_API_ENDPOINT;
const POSTHOG_PERSONAL_API_KEY = process.env.POSTHOG_PERSONAL_API_KEY;

const FULL_API_URL = `${POSTHOG_API_ENDPOINT}/insights/trend/`;

export async function GET() {
    const res = await fetch(FULL_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${POSTHOG_PERSONAL_API_KEY}`,
        },
        body: JSON.stringify({
            insight: 'TRENDS',
            events: [
                {
                    id: '$pageview',
                    name: '$pageview',
                    type: 'events',
                    math: 'total', // total pageviews
                },
                {
                    id: '$pageview',
                    name: '$pageview',
                    type: 'events',
                    math: 'dau', // unique visitors
                },
            ],
            date_from: '-7d',
            display: 'BoldNumber',
        }),
    });

    const json = await res.json();

    const data = {
        pageViews: json.result[0]?.aggregated_value || 0,
        visitors: json.result[1]?.aggregated_value || 0,
        loading: false,
    };
    return NextResponse.json(data);
}
