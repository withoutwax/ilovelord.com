"use client";

import { Coordinates, NaverMap } from "@/types/map";
import { useCallback, useEffect, useRef } from "react";

const MAP_ID = "naver-map";
const LOC: Coordinates = [
  parseFloat(process.env.NEXT_PUBLIC_MAP_LATITUDE || "37.526938"),
  parseFloat(process.env.NEXT_PUBLIC_MAP_LONGITUDE || "127.030266"),
];

export default function Map() {
  const mapRef = useRef<NaverMap>(null);

  const initializeMap = useCallback(() => {
    console.log("naver", naver);
    const options = {
      center: new naver.maps.LatLng(LOC[0], LOC[1]),
      zoom: 16,
      scaleControl: true,
      mapDataControl: true,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };
    const map = new window.naver.maps.Map(MAP_ID, options);
    mapRef.current = map;
    new naver.maps.Marker({
      position: new naver.maps.LatLng(LOC[0], LOC[1]),
      map: map,
      title: "아가파오교회",
    });
  }, [LOC]);

  useEffect(() => {
    if (window.naver?.maps) {
      initializeMap();
    }
  }, [initializeMap]);

  return (
    <>
      <div
        id={MAP_ID}
        className="h-60 md:h-full aspect-square md:aspect-auto"
      />
    </>
  );
}
