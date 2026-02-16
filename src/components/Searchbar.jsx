import React, { useState, useRef } from "react";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() && !history.includes(query.trim())) {
      setHistory([query.trim(), ...history]);
    }
    setQuery("");
    setShowDropdown(false);
  };

  const handleDelete = (item) => {
    setHistory(history.filter((h) => h !== item));
  };

  const handleInputFocus = () => {
    if (history.length > 0) setShowDropdown(true);
  };

  const handleInputBlur = (e) => {
    // Only close dropdown if focus is not on a delete button
    setTimeout(() => {
      // Check if the new focused element is inside the dropdown
      const active = document.activeElement;
      if (
        inputRef.current &&
        active !== inputRef.current &&
        !inputRef.current.parentNode.contains(active)
      ) {
        setShowDropdown(false);
      } else if (
        active &&
        active.getAttribute("aria-label") === "Delete"
      ) {
        // keep open
        setShowDropdown(true);
      } else {
        setShowDropdown(false);
      }
    }, 120);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
      <form onSubmit={handleSearch} style={{ display: "flex", gap: 8 }}>
        <div style={{ flex: 1, position: "relative" }}>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            style={{
              width: "100%",
              padding: "8px 14px",
              borderRadius: 30,
              border: "1px solid #ccc",
              outline: "none",
              fontSize: 18,
              background: "#f9f9f9",
              transition: "box-shadow 0.2s",
            }}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            autoComplete="off"
          />
          {showDropdown && history.length > 0 && (
            <ul
              style={{
                position: "absolute",
                top: "110%",
                left: 0,
                right: 0,
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: 16,
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                zIndex: 10,
                listStyle: "none",
                margin: 0,
                padding: "4px 0",
                maxHeight: 220,
                overflowY: "auto",
                minWidth: 0,
              }}
            >
              {history
                .filter((item) =>
                  query.trim()
                    ? item.toLowerCase().includes(query.toLowerCase())
                    : true
                )
                .map((item, idx, arr) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px",
                      borderBottom:
                        idx !== arr.length - 1
                          ? "1px solid #f0f0f0"
                          : "none",
                      cursor: "pointer",
                      background:
                        item === query
                          ? "#e6f7ee"
                          : "transparent",
                      transition: "background 0.15s",
                    }}
                    onMouseDown={() => {
                      setQuery(item);
                      setShowDropdown(false);
                    }}
                  >
                    <span
                      style={{
                        flex: 1,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      title={item}
                    >
                      {item}
                    </span>
                    <button
                      type="button"
                      tabIndex={0}
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        handleDelete(item);
                        setShowDropdown(true); // Keep dropdown open after delete
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#e53e3e",
                        fontSize: 18,
                        cursor: "pointer",
                        marginLeft: 8,
                        lineHeight: 1,
                        padding: 0,
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        transition: "background 0.15s",
                      }}
                      aria-label="Delete"
                      title="Delete"
                      onMouseEnter={e =>
                        (e.currentTarget.style.background = "#fbeaea")
                      }
                      onMouseLeave={e =>
                        (e.currentTarget.style.background = "none")
                      }
                    >
                      ×
                    </button>
                  </li>
                ))}
              {history.filter((item) =>
                query.trim()
                  ? item.toLowerCase().includes(query.toLowerCase())
                  : true
              ).length === 0 && (
                <li
                  style={{
                    padding: "8px 16px",
                    color: "#888",
                    textAlign: "center",
                  }}
                >
                  No history found
                </li>
              )}
              {/* Clear All History Button */}
              {history.filter((item) =>
                query.trim()
                  ? item.toLowerCase().includes(query.toLowerCase())
                  : true
              ).length > 0 && (
                <li
                  style={{
                    padding: "8px 16px",
                    textAlign: "center",
                    borderTop: "1px solid #f0f0f0",
                    background: "#fafafa",
                  }}
                >
                  <span
                    onMouseDown={e => {
                      e.preventDefault();
                      setHistory([]);
                      setShowDropdown(false);
                    }}
                    style={{
                      color: "#e53e3e",
                      fontWeight: "bold",
                      fontSize: 15,
                      cursor: "pointer",
                      borderRadius: 8,
                      padding: "4px 10px",
                      transition: "background 0.15s",
                      display: "inline-block",
                    }}
                    onMouseEnter={e =>
                      (e.currentTarget.style.background = "#fbeaea")
                    }
                    onMouseLeave={e =>
                      (e.currentTarget.style.background = "none")
                    }
                  >
                    Clear All History
                  </span>
                </li>
              )}
            </ul>
          )}
        </div>
        <button
          type="submit"
          style={{
            padding: "8px 28px",
            borderRadius: 30,
            border: "none",
            background: "#38a169",
            color: "#fff",
            fontWeight: "bold",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;