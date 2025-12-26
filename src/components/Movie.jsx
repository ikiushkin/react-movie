import React from "react";

export function Movie({movie}) {
    const {Title, Year, Poster} = movie;

    const placeholder = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
      <rect width="100%" height="100%" fill="#e5e7eb"/>
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
            font-family="Arial" font-size="28" fill="#374151">
        ${Title}
      </text>
    </svg>
  `)}`;

    const isPosterUrl = typeof Poster === "string" && /^https?:\/\//.test(Poster);

    return (
        <div className="movie card">
            <div className="card-image">
                <img
                    src={isPosterUrl ? Poster : placeholder}
                    alt={Title}
                    onError={(e) => {
                        e.currentTarget.src = placeholder;
                    }}
                />
                <span className="card-title">{Title}</span>
            </div>

            <div className="card-content">
                <p>{Title} - {Year}</p>
            </div>
        </div>
    );
}
