import React from "react";
import Topbar from "./Topbar";
import Map from "react-map-gl";
import Nav from "./Nav";
import classNames from "classnames";

type PositionType = { longitude: number; latitude: number };

const MapLayer = () => {
  const [map, setMap] = React.useState<React.ReactElement | null>(null);

  const [pos, setPos] = React.useState<PositionType | null>(null);

  React.useEffect(() => {
    if (typeof navigator !== undefined) {
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          setPos({
            longitude: pos.coords.longitude,
            latitude: pos.coords.latitude,
          }),
        () => setMap(<div></div>)
      );
    }
  }, [navigator]);

  React.useEffect(() => console.log("current_pos::", pos), [pos]);

  return !!pos ? (
    <Map
      initialViewState={{
        ...pos,
        zoom: 10,
      }}
      mapStyle="mapbox://styles/z0uk/clf83q5nb007n01mtl80oq4e0"
      mapboxAccessToken={process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_ACCESS_TOKEN}
      minZoom={7.5}
      dragRotate={false}
      maxZoom={11}
      style={{
        height: "55vh",
      }}
    ></Map>
  ) : (
    <div>loading...</div>
  );
};

interface IHeader {
  noMap?: boolean;
}

const Header: React.FC<IHeader> = ({ noMap }) => {
  return (
    <div
      className={classNames(
        "mb-16 max-h-[55vh] w-full bg-orange-200",
        !noMap && "h-[55vh]"
      )}
    >
      <Topbar
        message={
          <p>
            <span className="font-bold">Entrega Grátis</span> em encomendas
            superiores a 150€
          </p>
        }
      />
      <Nav />
      {!noMap && <MapLayer />}
    </div>
  );
};

export default Header;
