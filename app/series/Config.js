define([],
	function ()
	{
		configOptions = {
			//The appid for the configured application
			appid: "",
			//The web map id
			webmaps: [
			{
				id: "4a7a786fbabd4da78f29e58f56fc52f1",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},{
				id: "19cfb0962b804986839d030463f45a75",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},{
				id: "4304dffaff854926903e30f14d53fe94",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},{
				id: "08a99711ba3447eb8a4f8d8bd00566e8",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},{
				id: "2db80f67a88f401485529bc079d019af",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			}
			// To add additional maps to the template, uncomment the below section for
			// each map you would like to add. Webmap titles from ArcGIS Online will
			// be used unless you fill in title attribute.
			//, {
			//
			//	id: "739db23c3f674005a405c68e337f5011",
			//	title: "",
			//	// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
			//	showSingleTimeInstance: false
			//	},{
			//
			//	id: "739db23c3f674005a405c68e337f5011",
			//	title: "",
			//	// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
			//	showSingleTimeInstance: false
			//	}
			],
			//Enter a title, if no title is specified, the first webmap's title is used.
			title: "Drought Impact Assessment",
			//Enter a subtitle, if no subtitle is specified, the first webmap's subtitle is used.
			subtitle: "Understanding current drought conditions, their historical context, and their impact in order to guide data-driven policy decisions.",
			// If false, each tab will have a number on it. If true, the first tab will not have a number and the second tab will start counting at 1.
			startCountOnSecondTab: false,
			//Sync maps scale and location
			syncMaps: true,
			//Display geocoder search widget
			geocoderWidget: false,
			// Specify a proxy for custom deployment
			proxyurl: "",
			//specify the url to a geometry service
			geometryserviceurl: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",
			//If the webmap uses Bing Maps data, you will need to provided your Bing Maps Key
			bingmapskey : "",
			//Modify this to point to your sharing service URL if you are using the portal
			sharingurl: "http://www.arcgis.com/sharing/rest/content/items"
		}
	}
);
