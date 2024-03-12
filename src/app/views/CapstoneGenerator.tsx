'use client'
import { useEffect, useState } from "react";
import * as React from 'react';
import NextButton from "../components/Button";
import { randomTitles } from "../api/randomTitles";
import axios from "axios";
import RandomTitle from "../components/RandomTitle";

export default function CapstoneGenerator() {
    const [title, setTitle] = useState<string>("");

    const generateTitle = () => {
        const randomIndex = Math.floor(Math.random() * randomTitles.length);
        const randomTitle = randomTitles[randomIndex]; 
        console.log(randomTitle)
        setTitle(randomTitle);
    };

    useEffect(() => {
        generateTitle();
    }, [])


    const handleNextTitle = () => {
        generateTitle();
    }

    return (
        <div>
            <h1>Capstone Generator</h1>
            <RandomTitle contentTitle={title} /> 
            <NextButton onClick={handleNextTitle} />
        </div>
    )
}
