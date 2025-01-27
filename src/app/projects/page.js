"use client";

import {Suspense } from "react";
import ProjectSelection from "./projectSelection";

export default function Projects() {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProjectSelection/>
        </Suspense>
    );
}
