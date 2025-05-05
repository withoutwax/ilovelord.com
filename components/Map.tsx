"use client";

import React, { useEffect, useState, useRef } from "react";
import Script from "next/script";

type Lat = number;
type Lng = number;
type Coordinates = [Lat, Lng];

const MAP_ELEMENT_ID = "naver-maps";
const COORDINATES: Coordinates = [37.526938, 127.030266];
const INITIAL_ZOOM = 17;

export const NaverMap = () => {
  const mapRef = useRef<naver.maps.Map | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!scriptLoaded || typeof window.naver === "undefined") return;

    const mapOptions = {
      center: new window.naver.maps.LatLng(...COORDINATES),
      zoom: INITIAL_ZOOM,
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: window.naver.maps.Position.BOTTOM_LEFT,
      },
    };

    mapRef.current = new window.naver.maps.Map(MAP_ELEMENT_ID, mapOptions);

    return () => {
      if (mapRef.current) {
        mapRef.current?.destroy();
        mapRef.current = null;
      }
    };
  }, [scriptLoaded]);

  return (
    <>
      <Script
        src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ruf2pjukxr"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      <div id={MAP_ELEMENT_ID} className="h-full w-full" />
    </>
  );
};