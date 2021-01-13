import React from "react";

export default function RichTextElement({ id, html, style }) {
  return (
    <div
      data-target={id}
      style={style}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
