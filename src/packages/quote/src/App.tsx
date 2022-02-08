import React, { RefCallback } from "react";
import { BlockComponent } from "blockprotocol/react";

type AppProps = {
  editableRef?: RefCallback<HTMLElement>;
  text?: string;
  caption?: string;
  cite?: string;
  color?: string;
  fontFamily?: string;
};

export const App: BlockComponent<AppProps> = ({
  editableRef,
  text,
  caption,
  cite,
  color,
  fontFamily
}) => {
  fontFamily = fontFamily ?? "Arial";
  color = color ?? "rgb(223, 225, 230)";
  const blockStyle = { fontFamily, color, borderLeft: `2px solid ${color}`, padding: "10px 0px 10px 16px" };
  return <figure>
    {editableRef ? (
      <blockquote
        style={blockStyle}
        ref={editableRef}
      />
    ) : (
      <blockquote
        style={blockStyle}
      >
        <p>{text}</p>
      </blockquote>
    )}
    {(caption || cite) && (
      <figcaption>
        {caption && (<span>—{caption},</span>)} <cite>{cite}</cite>
      </figcaption>
    )}
  </figure>
};