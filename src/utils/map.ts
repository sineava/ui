export const mapOptions = {
  scene: {
    center: { lat: 30.740724, lng: 116.363055, alt: 23499, heading: 0, pitch: -45 }
  },
  terrain: {
    url: "/api-terrain",
    show: true
  },
  basemaps: [{ name: "天地图", type: "tdt", layer: "img_d", show: true }]
}