import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push('/marketplace');
    }, []);

    return <div className="page-content"></div>;
}
