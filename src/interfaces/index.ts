import React from "react";

interface Music {
  artist: string;
  id: number;
  title: string;
};
interface PlaylistCardProps {
  cityName: string;
  cityTemperature: number;
  playlist: Music[];
  onCreatePlaylist: () => void;
}
interface ButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  width?: string;
  color?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export type { Music, ButtonProps, PlaylistCardProps };
