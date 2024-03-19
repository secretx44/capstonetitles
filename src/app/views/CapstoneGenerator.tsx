"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Fade } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { randomTitles } from "../contant/randomTitles";
import RandomTitle from "../components/RandomTitle";
import SkeletonTitle from "../components/skeleton/SkeletonTitle";
import NextButton from "../components/Button";
import Title from "../components/Title";

export default function CapstoneGenerator() {
  const [title, setTitle] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [animateTitle, setAnimateTitle] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
    setTitle("");
    setTimeout(generateTitle, 500);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        minHeight: 200,
        maxWidth: isMobile ? 300 : "none",
        my: 3,
        mx: "auto",
      }}
      component="div"
    >
      <Title />
      <Typography
        variant="subtitle1"
        component="span"
        sx={{ color: "#121212", display: "flex", textAlign: "justify", fontWeight: "bold", my: 3, maxWidth: 900, mx: "auto"}}
      >
        This basic project tool will assist other students studying information
        technology, computer science, or any related discipline in coming up
        with a title for their capstone.
      </Typography>
      <NextButton onClick={handleNextTitle} loading={isLoading} />
      {isLoading ? (
        <SkeletonTitle />
      ) : (
        <Fade in={animateTitle}>
          <div>
            <RandomTitle contentTitle={title} />
          </div>
        </Fade>
      )}
    </Box>
  );
}
