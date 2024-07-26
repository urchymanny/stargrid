"use client";
import React, { useState, useEffect } from "react";
import styles from "./stargrid.module.scss";

const StarGrid = () => {
  const [randomIndices, setRandomIndices] = useState(new Set());
  const [biggerIndices, setBiggerIndices] = useState(new Set());
  const stars = Array.from({ length: 1000 }, (_, i) => i + 1);

  const generateRandomIndices = (denominator) => {
    const halfLength = Math.floor(stars.length / denominator);
    const newRandomIndices = new Set();
    while (newRandomIndices.size < halfLength) {
      newRandomIndices.add(Math.floor(Math.random() * stars.length));
    }
    return newRandomIndices;
  };

  useEffect(() => {
    setRandomIndices(generateRandomIndices(3));

    const interval = setInterval(() => {
      setRandomIndices(generateRandomIndices(3));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setBiggerIndices(generateRandomIndices(200));

    const bigInterval = setInterval(() => {
      setBiggerIndices(generateRandomIndices(200));
    }, 5000);

    return () => clearInterval(bigInterval);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.bg}>
        {stars.map((star, index) => (
          <div
            key={star}
            className={`${styles.item} ${
              biggerIndices.has(index)
                ? styles.bigger
                : randomIndices.has(index)
                ? styles.extraClass
                : ""
            }`}
          >
            <div className={styles.circle}></div>
            <div className={styles.expander}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarGrid;
