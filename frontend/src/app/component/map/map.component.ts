import {OnInit, Component} from "@angular/core";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import {BooleanStatus, WidectPiece} from "../../model/WidectPiece";
import {BookingService} from "../../service/bookingService";
import {MessageService} from "primeng/api";
import {LookupDataService} from "../../service/lookupDataService";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  widectPiece!: WidectPiece;
  awbNumber: any;


  constructor(public lookupData: LookupDataService) {
  }


  async ngOnInit() {


// Create root
    var root = am5.Root.new("chartdiv");
    await this.lookupData.initialize().subscribe(value => {
      this.lookupData.getScCodes().subscribe(value => this.widectPiece = value[1]);
      this.awbNumber = String(this.lookupData.getAwb());
    });
// Set themes
    root.setThemes([
      am5themes_Animated.new(root)
    ]);


// Create chart
    var chart = root.container.children.push(
      am5map.MapChart.new(root, {
    //    homeZoomLevel: 3.5,
      //  homeGeoPoint: { longitude: 10, latitude: 52 },
        projection: am5map.geoNaturalEarth1()
      })
    );


// Create polygon series
    var polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"]
      })
    );


// Load routes in GeoJSON format
    var routes = {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [-73.778137, 40.641312],
            [-0.454296, 51.470020],
            [116.597504, 40.072498]
          ]
        }
      }]
    };

// Create line series
    var lineSeries = chart.series.push(
      am5map.MapLineSeries.new(root, {
        //  geoJSON: routes
      })
    );

    lineSeries.events.on("datavalidated", function() {
      chart.goHome();
    });

    lineSeries.mapLines.template.setAll({
      stroke: am5.color(0xff0000),
      strokeWidth: 2,
      strokeOpacity: 0.5
    });
  }

}
