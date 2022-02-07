require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
        const map = new Map({
          basemap: "topo"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
        });

        const featureLayer1 = new FeatureLayer({
          url: "https://services.arcgis.com/BG6nSlhZSAWtExvp/arcgis/rest/services/VolcanoesGlobal/FeatureServer"
        });

        map.add(featureLayer1);
  
        const featureLayer2 = new FeatureLayer({
          url: "https://services2.arcgis.com/FiaPA4ga0iQKduv3/arcgis/rest/services/test_Significant_Global_Volcanic_Eruptions_1/FeatureServer"
        });

        map.add(featureLayer2);
      });

