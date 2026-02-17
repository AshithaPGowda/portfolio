"use client";

import { Suspense, useState, useEffect } from "react";
import SkillsPage from "./projectSelection";
import Loader from "../components/loader";

export default function Skills() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 3000);
    }, []);

    return (
        <Suspense fallback={<div>{isLoading ? <Loader /> : <div>Your Content Here</div>}</div>}>
            <SkillsPage />
        </Suspense>
    );
}
