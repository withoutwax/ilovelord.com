"use client";

import React, { useEffect, useRef } from "react";
import { NaverMap as NaverMapType } from "@/types/map";

type Lat = number;
type Lng = number;
type Coordinates = [Lat, Lng];

const MAP_ELEMENT_ID = 'naver-maps';
const COORDINATES: Coordinates = [37.526938, 127.030266];
const INITIAL_ZOOM = 17

export const NaverMap = () => {
  const mapRef = useRef<NaverMapType | null>(null);

  const initializeMap = () => {
        const mapOptions = {
            center: new window.naver.maps.LatLng(COORDINATES),
            zoom: INITIAL_ZOOM,
            minZoom: 9,
            scaleControl: false,
            mapDataControl: false,
            logoControlOptions: {
                position: naver.maps.Position.BOTTOM_LEFT,
            },
        };
        //새로운 네이버 맵 인스턴스 생성
        const mapIstance = new window.naver.maps.Map(MAP_ELEMENT_ID, mapOptions);
        mapRef.current = mapIstance;
    };

  useEffect(() => {
    initializeMap();
    return () => {
      mapRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <div id={MAP_ELEMENT_ID} className="h-full"></div>
    </>
  );
};
