"use client";

import Script from "next/script";
import { Coordinates, NaverMap } from "@/types/map";
import { useCallback, useRef } from "react";

const MAP_ID = "naver-map";
const LOC: Coordinates = [
  parseFloat(process.env.NEXT_PUBLIC_MAP_LATITUDE || "37.526938"),
  parseFloat(process.env.NEXT_PUBLIC_MAP_LONGITUDE || "127.030266"),
];

export default function Map() {
  const mapRef = useRef<NaverMap>(null);

  const initializeMap = useCallback(() => {
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

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_MAP_CLIENT_ID}`}
        onReady={() => {
          initializeMap();
        }}
      ></Script>
      <div
        id={MAP_ID}
        className="h-60 md:h-full aspect-square md:aspect-auto"
      />
    </>
  );
}
