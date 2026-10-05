import React from "react";
import SearchIcon from "@zendeskgarden/svg-icons/src/magnifying-glass.svg";
// TODO(svg-icons v9): this was a 12px icon; the new icon is 20px. Set its size explicitly.
import ClipboardIcon from "@zendeskgarden/svg-icons/src/check-list-square-stroke.svg";

export const Search = () => (
  <span>
    <SearchIcon aria-label="Search" />
    <ClipboardIcon aria-label="Clipboard" />
  </span>
);
