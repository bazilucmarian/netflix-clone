import React from "react";
import { Spinner, LockBody, Picture, ReleaseBody } from "./styles/loading";

export const Loading = ({ src, ...restProps }) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
};

export const LoadingReleaseBody = () => {
  return <ReleaseBody />;
};
