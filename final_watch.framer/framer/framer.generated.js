// This is autogenerated by Framer Studio


// Generated by CoffeeScript 1.8.0
(function() {
  var lookupLine, properties, _RESULT,
    __slice = [].slice;

  if (window.FramerStudio == null) {
    window.FramerStudio = {};
  }

  window.onerror = null;

  window.midiCommand = window.midiCommand || function() {};

  if (Framer.Device) {
    properties = ["deviceScale", "contentScale", "deviceType", "keyboard", "orientation", "fullScreen"];
    properties.map(function(propertyName) {
      return Framer.Device.on("change:" + propertyName, function() {
        return window._bridge("device:change");
      });
    });
  }

  _RESULT = null;

  lookupLine = function(lineNumber) {
    var char, charIndex, errorColNumber, errorLine, errorLineIndex, errorLineNumber, loc, sourceLines, _i, _len;
    sourceLines = _RESULT.js.split("\n");
    errorLineIndex = lineNumber - 1;
    errorLine = sourceLines[errorLineIndex];
    if (!errorLine) {
      return lineNumber;
    }
    errorLineNumber = 1;
    errorColNumber = 0;
    for (charIndex = _i = 0, _len = errorLine.length; _i < _len; charIndex = ++_i) {
      char = errorLine[charIndex];
      loc = _RESULT.sourceMap.sourceLocation([errorLineIndex, charIndex]);
      if (loc && loc[0] > errorLineNumber) {
        errorLineNumber = loc[0] + 1;
        errorColNumber = loc[1];
      }
    }
    console.log("lineNumber", lineNumber);
    console.log("errorLineNumber", errorLineNumber);
    return errorLineNumber;
  };

  FramerStudio.compile = function(code) {
    var e, err, errorMessage;
    console.log("FramerStudio.compile");
    window.onerror = null;
    window.onresize = null;
    try {
      _RESULT = CoffeeScript.compile(code, {
        sourceMap: true,
        filename: "generated.js"
      });
    } catch (_error) {
      e = _error;
      console.log("Compile error:", e);
      if (e instanceof SyntaxError) {
        errorMessage = e.stack;
        err = new SyntaxError(e.message);
        err.line = e.location.first_line;
        err.lineNumber = e.location.first_line;
        err.lookup = true;
        window._bridge("StudioError", {
          message: e.message,
          line: e.location.first_line,
          lineNumber: e.location.first_line,
          errorType: "compile"
        });
        throw err;
      } else {
        throw e;
      }
    }
    window.onerror = function(errorMsg, url, lineNumber) {
      var error;
      console.log.apply(console, ["Eval error:"].concat(__slice.call(arguments)));
      error = new Error(errorMsg);
      error.line = lookupLine(lineNumber);
      window._bridge("StudioError", {
        message: errorMsg,
        line: error.line,
        lineNumber: error.line,
        errorType: "eval"
      });
      throw error;
    };
    return _RESULT.js;
  };

  if (typeof window._bridge === "function") {
    window._bridge("StudioScriptLoaded");
  }

}).call(this);

window.__imported__ = window.__imported__ || {};
window.__imported__["arrival newest/layers.json.js"] = [
	{
		"id": 404,
		"name": "Main",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/Main.png",
			"frame": {
				"x": 0,
				"y": 0,
				"width": 320,
				"height": 400
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1350993149"
	},
	{
		"id": 597,
		"name": "back_button",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/back_button.png",
			"frame": {
				"x": 14,
				"y": 6,
				"width": 53,
				"height": 37
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1350993177"
	},
	{
		"id": 83,
		"name": "notification",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/notification.png",
			"frame": {
				"x": 49,
				"y": 105,
				"width": 229,
				"height": 282
			}
		},
		"imageType": "png",
		"children": [
			{
				"id": 56,
				"name": "top banner",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/top banner.png",
					"frame": {
						"x": 0,
						"y": 0,
						"width": 320,
						"height": 95
					}
				},
				"imageType": "png",
				"children": [
					{
						"id": 13,
						"name": "Destination Reached!",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 320,
							"height": 400
						},
						"maskFrame": null,
						"image": {
							"path": "images/Destination Reached!.png",
							"frame": {
								"x": 38,
								"y": 9,
								"width": 245,
								"height": 71
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "1353734044"
					}
				],
				"modification": "899947656"
			},
			{
				"id": 500,
				"name": "difficultybar",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/difficultybar.png",
					"frame": {
						"x": 12,
						"y": 275,
						"width": 302,
						"height": 46
					}
				},
				"imageType": "png",
				"children": [
					{
						"id": 505,
						"name": "circle",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 320,
							"height": 400
						},
						"maskFrame": null,
						"image": {
							"path": "images/circle.png",
							"frame": {
								"x": 276,
								"y": 267,
								"width": 31,
								"height": 31
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "1360865905"
					}
				],
				"modification": "1050782400"
			},
			{
				"id": 53,
				"name": "right circle",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/right circle.png",
					"frame": {
						"x": 113,
						"y": 139,
						"width": 151,
						"height": 81
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "727251120"
			},
			{
				"id": 48,
				"name": "left circle",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/left circle.png",
					"frame": {
						"x": 58,
						"y": 139,
						"width": 81,
						"height": 81
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "784817819"
			}
		],
		"modification": "882456470"
	},
	{
		"id": 116,
		"name": "explore",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/explore.png",
			"frame": {
				"x": 14,
				"y": 6,
				"width": 293,
				"height": 394
			}
		},
		"imageType": "png",
		"children": [
			{
				"id": 601,
				"name": "red_circle",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/red_circle.png",
					"frame": {
						"x": 20,
						"y": 63,
						"width": 86,
						"height": 46
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "1151486196"
			},
			{
				"id": 599,
				"name": "explore_button",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/explore_button.png",
					"frame": {
						"x": 0,
						"y": 53,
						"width": 320,
						"height": 65
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "519825912"
			}
		],
		"modification": "435283890"
	},
	{
		"id": 135,
		"name": "half_dome",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/half_dome.png",
			"frame": {
				"x": 0,
				"y": 16,
				"width": 320,
				"height": 330
			}
		},
		"imageType": "png",
		"children": [
			{
				"id": 511,
				"name": "gobutton",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/gobutton.png",
					"frame": {
						"x": 209,
						"y": 278,
						"width": 111,
						"height": 112
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "93883453"
			},
			{
				"id": 502,
				"name": "difficulty",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/difficulty.png",
					"frame": {
						"x": 17,
						"y": 358,
						"width": 161,
						"height": 22
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "582097671"
			}
		],
		"modification": "1178767808"
	},
	{
		"id": 595,
		"name": "Time",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/Time.png",
			"frame": {
				"x": 249,
				"y": 16,
				"width": 57,
				"height": 20
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1354657438"
	},
	{
		"id": 185,
		"name": "trail_details",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": null,
		"imageType": null,
		"children": [
			{
				"id": 611,
				"name": "sm_details",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/sm_details.png",
					"frame": {
						"x": 143,
						"y": 262,
						"width": 35,
						"height": 14
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "1354717244"
			},
			{
				"id": 613,
				"name": "sm_map",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/sm_map.png",
					"frame": {
						"x": 143,
						"y": 262,
						"width": 35,
						"height": 14
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "1480320099"
			},
			{
				"id": 617,
				"name": "details_share",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/details_share.png",
					"frame": {
						"x": 34,
						"y": 286,
						"width": 107,
						"height": 108
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "1354717208"
			},
			{
				"id": 615,
				"name": "details_explore",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/details_explore.png",
					"frame": {
						"x": 86,
						"y": 286,
						"width": 199,
						"height": 108
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "1354717179"
			},
			{
				"id": 402,
				"name": "details_text",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/details_text.png",
					"frame": {
						"x": 15,
						"y": 106,
						"width": 291,
						"height": 156
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "1600855661"
			},
			{
				"id": 416,
				"name": "trail_yellow",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/trail_yellow.png",
					"frame": {
						"x": 31,
						"y": 139,
						"width": 265,
						"height": 83
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "70762307"
			},
			{
				"id": 174,
				"name": "mapdetails",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/mapdetails.png",
					"frame": {
						"x": 0,
						"y": 60,
						"width": 320,
						"height": 222
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "617089899"
			}
		],
		"modification": "2109452454"
	}
]
window.Framer.Defaults.DeviceView = {
  "deviceScale" : -1,
  "orientation" : 0,
  "contentScale" : 1,
  "deviceType" : "apple-watch-edition"
};

window.FramerStudioInfo = {
  "deviceImagesUrl" : "file:\/\/\/Applications\/Framer%20Studio.app\/Contents\/Resources\/DeviceImages\/"
};

Framer.Device = new Framer.DeviceView();
Framer.Device.setupContext();