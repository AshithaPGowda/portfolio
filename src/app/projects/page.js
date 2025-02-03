"use client";

import { Suspense, useState,useEffect } from "react";
import ProjectSelection from "./projectSelection";
import Loader from "../components/loader";

export default function Projects() {
    const [isLoading, setIsLoading] = useState(true);

    // Example function to simulate loading
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 3000); // Simulate 3 seconds loading
    }, []);

    return (
        <Suspense fallback={<div>{isLoading ? <Loader /> : <div>Your Content Here</div>}</div>}>
            <ProjectSelection />
        </Suspense>
    );
}
