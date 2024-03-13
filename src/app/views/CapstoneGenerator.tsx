'use client'
import * as React from "react";
import { useEffect, useState } from "react";
import NextButton from "../components/Button";
import { randomTitles } from "../api/randomTitles";
import RandomTitle from "../components/RandomTitle";
import SkeletonTitle from "../components/skeleton/SkeletonTitle"; 
import { Box, Typography, Fade } from "@mui/material";

export default function CapstoneGenerator() {
  const [title, setTitle] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [animateTitle, setAnimateTitle] = useState(false);

  const generateTitle = () => {
    const randomIndex = Math.floor(Math.random() * randomTitles.length);
    const randomTitle = randomTitles[randomIndex];
    setTitle(randomTitle);
    setIsLoading(false);
    setAnimateTitle(true);
  };

  useEffect(() => {
    generateTitle();
  }, []);

  const handleNextTitle = () => {
    setIsLoading(true);
    setAnimateTitle(false);
    setTitle(""); // Reset the title
    setTimeout(generateTitle, 500); // Wait for animation to complete before generating new title
  };

  return (
    <Box sx={{ textAlign: "center" }} component="div">
      <Typography sx={{ color: "black" }} variant="h4" component="h4">
        Capstone Title Generator
      </Typography>
      <Typography
        variant="subtitle1"
        component="span"
        sx={{ color: "#121212", display: "flex", textAlign: "center" }}
      >
        This application generates study title ideas at random for you to use as
        a guide or source of inspiration. At the moment, majors in computer
        science, information technology and related fields, are the target audience for the created titles.
      </Typography>
      {isLoading ? (
        <SkeletonTitle />
      ) : (
        <Fade in={animateTitle}>
          <div>
            <RandomTitle contentTitle={title} />
          </div>
        </Fade>
      )}
      <NextButton onClick={handleNextTitle} />
    </Box>
  );
}
