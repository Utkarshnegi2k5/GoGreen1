import React from "react";

const mockUser = {
  name: "Amit Sharma",
  email: "amit.sharma@example.com",
  phone: "+91 9876543210",
  address: "123 Green Avenue, Delhi, India",
  role: "Farmer",
  joined: "Jan 2024",
  avatar: "",
};

const previousPurchases = [
  { item: "Organic Wheat Seeds", date: "2024-05-10", amount: "₹1200" },
  { item: "Tractor Rental", date: "2024-04-22", amount: "₹3500" },
  { item: "Fertilizer Pack", date: "2024-03-15", amount: "₹800" },
  { item: "Hybrid Rice Seeds", date: "2024-02-28", amount: "₹950" },
];

const cartIcon = (
  <svg
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    style={{ display: "inline", verticalAlign: "middle", marginLeft: 8 }}
  >
    <circle cx="9" cy="21" r="1" fill="#38a169" />
    <circle cx="20" cy="21" r="1" fill="#38a169" />
    <path
      d="M1 1h2l2.68 13.39A2 2 0 0 0 7.62 16h8.76a2 2 0 0 0 1.94-1.61L21 6H6"
      stroke="#38a169"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Profile = () => {
  const { name, email, phone, address, role, joined, avatar } = mockUser;

  return (
    <div
      style={{
        background: "#e6fff7",
        minHeight: "100vh",
        padding: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 32,
          flexWrap: "wrap",
          margin: 30, // 30px margin around the content, not the background
        }}
      >
        {/* Info Card */}
        <div
          style={{
            maxWidth: 1400, // increased from 600
            minWidth: 400, // increased from 340
            margin: "40px 30px 40px 0", // margin-right: 30px
            padding: 40, // slightly more padding for balance
            background: "#f6fff8",
            borderRadius: 18,
            boxShadow: "0 2px 12px rgba(56,161,105,0.08)",
            border: "1px solid #38a169",
            textAlign: "left",
            flex: "1 1 520px", // increased flex-basis
            display: "flex",
            alignItems: "center",
            gap: 36, // more gap for wider card
          }}
        >
          {/* Info (left) */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2
              style={{
                margin: "0 0 6px 0",
                color: "#22543d",
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              {name}
            </h2>
            <div
              style={{
                color: "#38a169",
                fontWeight: 600,
                fontSize: 17,
                marginBottom: 10,
              }}
            >
              {role}
            </div>
            <div style={{ marginBottom: 10 }}>
              <strong>Email:</strong>{" "}
              <span style={{ color: "#22543d" }}>{email}</span>
            </div>
            <div style={{ marginBottom: 10 }}>
              <strong>Phone:</strong>{" "}
              <span style={{ color: "#22543d" }}>{phone}</span>
            </div>
            <div style={{ marginBottom: 10 }}>
              <strong>Address:</strong>{" "}
              <span style={{ color: "#22543d" }}>{address}</span>
            </div>
            <div style={{ marginBottom: 10 }}>
              <strong>Joined:</strong>{" "}
              <span style={{ color: "#22543d" }}>{joined}</span>
            </div>
            {/* Update Button */}
            <a
              href="#"
              style={{
                display: "inline-block",
                marginTop: 8,
                fontSize: 14,
                color: "#38a169",
                background: "#e6f9ed",
                border: "1px solid #38a169",
                borderRadius: 6,
                padding: "4px 14px",
                textDecoration: "none",
                fontWeight: 500,
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#38a169";
                e.target.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "#e6f9ed";
                e.target.style.color = "#38a169";
              }}
            >
              Update
            </a>
          </div>
          {/* Avatar (right) */}
          <div
            style={{
              width: 110,
              height: 110,
              borderRadius: "50%",
              background: "#38a169",
              color: "#fff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: "bold",
              marginLeft: 10,
              flexShrink: 0,
            }}
          >
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
            ) : (
              name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()
            )}
          </div>
        </div>

        {/* Previous Purchases Card */}
        <div
          style={{
            margin: "40px 0",
            background: "#e6f9ed",
            borderRadius: 10,
            border: "1px solid #c6f6d5",
            padding: "18px 18px 10px 18px",
            boxShadow: "0 1px 6px rgba(56,161,105,0.06)",
            minWidth: 340, // increased from 260
            maxWidth: 420, // increased from 320
            flex: "1 1 340px", // increased flex-basis
            alignSelf: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 10,
              justifyContent: "space-between", // Ensures heading and icon are spaced
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                color: "#276749",
                fontSize: 16,
              }}
            >
              Previous Purchases
            </span>
            {cartIcon}
          </div>
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
            }}
          >
            {previousPurchases.map((purchase, idx) => (
              <li
                key={idx}
                style={{
                  fontSize: 15,
                  color: "#22543d",
                  padding: "4px 0",
                  borderBottom:
                    idx !== previousPurchases.length - 1
                      ? "1px solid #c6f6d5"
                      : "none",
                  display: "grid",
                  gridTemplateColumns: "1fr 90px 60px",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{purchase.item}</span>
                <span style={{ color: "#38a169", fontSize: 13, textAlign: "center" }}>
                  {purchase.date}
                </span>
                <span style={{ color: "#276749", fontWeight: 600, textAlign: "right" }}>
                  {purchase.amount}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;