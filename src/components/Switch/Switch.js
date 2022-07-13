import React, { useEffect } from "react";

export default function Switch(props) {
  const switchData = [
    { name: "Streaming", value: "movie" },
    { name: "on TV", value: "tv" },
  ];

  useEffect(() => {
    localStorage.setItem("switch", JSON.stringify({ name: "movie" }));
  }, []);

  return (
    <div className="switch-block">
      <div className="switch-item">
        {switchData.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                props.setSelected(item.value);
                localStorage.setItem(
                  "switch",
                  JSON.stringify({ name: item.value })
                );
              }}
              className={`${
                props.selected === item.value ? "switch selected" : "switch"
              }`}
            >
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
