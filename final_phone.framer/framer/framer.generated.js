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
window.__imported__["create vista/layers.json.js"] = [
	{
		"id": 114,
		"name": "Background",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 640,
			"height": 1136
		},
		"maskFrame": null,
		"image": {
			"path": "images/Background.png",
			"frame": {
				"x": 0,
				"y": 0,
				"width": 640,
				"height": 1136
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "998875748"
	},
	{
		"id": 47,
		"name": "save",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 640,
			"height": 1136
		},
		"maskFrame": null,
		"image": {
			"path": "images/save.png",
			"frame": {
				"x": 0,
				"y": 965,
				"width": 640,
				"height": 145
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1249338892"
	},
	{
		"id": 49,
		"name": "difficulty",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 640,
			"height": 1136
		},
		"maskFrame": null,
		"image": {
			"path": "images/difficulty.png",
			"frame": {
				"x": 137,
				"y": 762,
				"width": 394,
				"height": 56
			}
		},
		"imageType": "png",
		"children": [
			{
				"id": 75,
				"name": "difficultybar",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/difficultybar.png",
					"frame": {
						"x": 29,
						"y": 838,
						"width": 585,
						"height": 89
					}
				},
				"imageType": "png",
				"children": [
					{
						"id": 101,
						"name": "diff_circle",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/diff_circle.png",
							"frame": {
								"x": 541,
								"y": 823,
								"width": 58,
								"height": 58
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "1196183019"
					}
				],
				"modification": "2044422802"
			}
		],
		"modification": "172142358"
	},
	{
		"id": 39,
		"name": "upload",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 640,
			"height": 1136
		},
		"maskFrame": null,
		"image": {
			"path": "images/upload.png",
			"frame": {
				"x": 142,
				"y": 502,
				"width": 359,
				"height": 207
			}
		},
		"imageType": "png",
		"children": [
			{
				"id": 99,
				"name": "upload_button",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/upload_button.png",
					"frame": {
						"x": 29,
						"y": 575,
						"width": 583,
						"height": 158
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "998756459"
			}
		],
		"modification": "591508906"
	},
	{
		"id": 43,
		"name": "name_description",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 640,
			"height": 1136
		},
		"maskFrame": null,
		"image": null,
		"imageType": null,
		"children": [
			{
				"id": 41,
				"name": "description",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/description.png",
					"frame": {
						"x": 22,
						"y": 312,
						"width": 594,
						"height": 158
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "1838546912"
			},
			{
				"id": 97,
				"name": "name",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/name.png",
					"frame": {
						"x": 22,
						"y": 232,
						"width": 594,
						"height": 84
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "962673701"
			}
		],
		"modification": "2015448089"
	},
	{
		"id": 58,
		"name": "topbar",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 640,
			"height": 1136
		},
		"maskFrame": null,
		"image": {
			"path": "images/topbar.png",
			"frame": {
				"x": 0,
				"y": 0,
				"width": 640,
				"height": 189
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "2000639761"
	}
]
window.Framer.Defaults.DeviceView = {
  "deviceScale" : -1,
  "orientation" : 0,
  "contentScale" : 1,
  "deviceType" : "iphone-5s-silver"
};

window.FramerStudioInfo = {
  "deviceImagesUrl" : "file:\/\/\/Applications\/Framer%20Studio.app\/Contents\/Resources\/DeviceImages\/"
};

Framer.Device = new Framer.DeviceView();
Framer.Device.setupContext();