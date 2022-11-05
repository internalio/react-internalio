import React, { memo } from "react";

interface SpaceProps {
  url: string;
  width?: string;
  height?: string;
  params?: Record<string, string>;
}

function Space({ url, width, height, params = {} }: SpaceProps) {
  return (
    <iframe
      src={`${url}/embed?${new URLSearchParams(params).toString()}`}
      style={{ height: height ?? "100%", width: width ?? "100%" }}
      title="Internal.io Space"
    />
  );
}

export default memo(Space);
