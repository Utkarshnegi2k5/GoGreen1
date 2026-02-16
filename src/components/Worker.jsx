import React, { useEffect, useRef } from "react";

const candidates = [
  "Amit Sharma",
  "Priya Singh",
  "Rahul Verma",
  "Sneha Patel",
  "Vikas Gupta",
  "Anjali Mehra",
  "Rohit Kumar",
  "Pooja Yadav",
  "Suresh Das",
  "Meena Joshi",
];

const Worker = () => {
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    let animation;
    let start = 0;
    const itemHeight = 40; // px, should match li height
    const totalHeight = itemHeight * candidates.length;

    function animate() {
      start += 0.45; // slower scroll
      if (start >= totalHeight) start = 0;
      list.style.transform = `translateY(-${start}px)`;
      animation = requestAnimationFrame(animate);
    }
    animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, []);

  // Duplicate the list for seamless infinite scroll
  const displayList = [...candidates, ...candidates];

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 370,
        minWidth: 220,
        height: 300,
        overflow: "hidden",
        borderRadius: 16,
        border: "1px solid #38a169",
        background: "#f6fff8",
        boxShadow: "0 2px 12px rgba(56,161,105,0.08)",
        margin: "0 auto",
      }}
      className="w-full max-w-xs"
    >
      <div
        style={{
          fontWeight: "bold",
          color: "#276749",
          fontSize: 18,
          padding: "12px 0 8px 0",
          textAlign: "center",
          background: "#e6f9ed",
          borderBottom: "1px solid #c6f6d5",
          position: "sticky",
          top: 0,
          zIndex: 2,
        }}
      >
        Candidates Applied
      </div>
      <ul
        ref={listRef}
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          height: "180px",
          position: "relative",
        }}
      >
        {displayList.map((name, idx) => {
          // Example: Generate a rating between 1.0 and 5.0
          const rating = (Math.round(((idx % 5) + 1 + (idx % 10) * 0.13) * 10) / 10).toFixed(1);
          return (
            <li
              key={idx}
              style={{
                height: 45,
                lineHeight: "45px",
                padding: "0 16px",
                borderBottom: "1px solid #e2e8f0",
                color: "#22543d",
                background: idx % 2 === 0 ? "#f0fff4" : "#f6fff8",
                fontSize: 15,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "flex",
                alignItems: "center",
                gap: 0,
              }}
            >
              {/* Avatar Circle */}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "#38a169",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 14,
                  marginRight: 10,
                  flexShrink: 0,
                }}
              >
                {getInitials(name)}
              </span>
              <span style={{ minWidth: 80, textAlign: "left" }}>{name}</span>
              {/* Show star symbol and numeric rating */}
              <span style={{ marginLeft: 16, color: "#ECC94B", fontSize: 15, fontWeight: 500, minWidth: 40, textAlign: "left" }}>
                ★ {rating}
              </span>
              <span style={{ marginLeft: "auto", fontSize: 12, color: "#718096", minWidth: 50, textAlign: "right" }}>
                {idx % 3 === 0 ? "New" : "Reviewed"}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Worker;