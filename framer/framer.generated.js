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
window.__imported__["AllScreens/layers.json.js"] = [
	{
		"id": 18,
		"name": "screen6",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/screen6.png",
			"frame": {
				"x": 0,
				"y": 1,
				"width": 320,
				"height": 399
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1945769880"
	},
	{
		"id": 27,
		"name": "screen5new",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/screen5new.png",
			"frame": {
				"x": 0,
				"y": 1,
				"width": 320,
				"height": 399
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "2024552642"
	},
	{
		"id": 16,
		"name": "screen5",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/screen5.png",
			"frame": {
				"x": 0,
				"y": 1,
				"width": 320,
				"height": 399
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "19912592"
	},
	{
		"id": 14,
		"name": "screen4",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/screen4.png",
			"frame": {
				"x": 0,
				"y": 1,
				"width": 320,
				"height": 399
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1945769850"
	},
	{
		"id": 12,
		"name": "screen3",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/screen3.png",
			"frame": {
				"x": 0,
				"y": 1,
				"width": 320,
				"height": 399
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1945769824"
	},
	{
		"id": 10,
		"name": "screen2",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/screen2.png",
			"frame": {
				"x": 0,
				"y": 1,
				"width": 320,
				"height": 399
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1945769819"
	},
	{
		"id": 8,
		"name": "screen1",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/screen1.png",
			"frame": {
				"x": 0,
				"y": 1,
				"width": 320,
				"height": 399
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1945769793"
	}
]
window.__imported__ = window.__imported__ || {};
window.__imported__["toq_app_screen/layers.json.js"] = [
	{
		"id": 2,
		"name": "apps",
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
				"id": 30,
				"name": "last app",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/last app.png",
					"frame": {
						"x": 0,
						"y": 351,
						"width": 320,
						"height": 49
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "1006370934"
			},
			{
				"id": 16,
				"name": "second app",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/second app.png",
					"frame": {
						"x": 0,
						"y": 117,
						"width": 320,
						"height": 117
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "135454456"
			},
			{
				"id": 19,
				"name": "third app",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/third app.png",
					"frame": {
						"x": 0,
						"y": 234,
						"width": 320,
						"height": 117
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "1796587462"
			},
			{
				"id": 12,
				"name": "first app",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/first app.png",
					"frame": {
						"x": 0,
						"y": 0,
						"width": 320,
						"height": 117
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "2039533417"
			}
		],
		"modification": "2104562045"
	}
]
window.__imported__ = window.__imported__ || {};
window.__imported__["toq_coupon_app/layers.json.js"] = [
	{
		"id": 6,
		"name": "topbar",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/topbar.png",
			"frame": {
				"x": 0,
				"y": 0,
				"width": 320,
				"height": 400
			}
		},
		"imageType": "png",
		"children": [
			{
				"id": 21,
				"name": "first layer copy 2",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/first layer copy 2.png",
					"frame": {
						"x": 3,
						"y": 280,
						"width": 313,
						"height": 120
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "1049197031"
			},
			{
				"id": 17,
				"name": "first layer copy",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/first layer copy.png",
					"frame": {
						"x": 3,
						"y": 187,
						"width": 313,
						"height": 213
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "340733507"
			},
			{
				"id": 12,
				"name": "first layer",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/first layer.png",
					"frame": {
						"x": 3,
						"y": 143,
						"width": 313,
						"height": 257
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "857143303"
			},
			{
				"id": 22,
				"name": "jeans",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 320,
					"height": 400
				},
				"maskFrame": null,
				"image": {
					"path": "images/jeans.png",
					"frame": {
						"x": 3,
						"y": 98,
						"width": 313,
						"height": 302
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "166522511"
			}
		],
		"modification": "899838582"
	}
]
window.__imported__ = window.__imported__ || {};
window.__imported__["toq_notification/layers.json.js"] = [
	{
		"id": 2,
		"name": "Title",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/Title.png",
			"frame": {
				"x": 0,
				"y": 0,
				"width": 320,
				"height": 92
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1709071794"
	},
	{
		"id": 9,
		"name": "Stars",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/Stars.png",
			"frame": {
				"x": 0,
				"y": 92,
				"width": 320,
				"height": 308
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1621765113"
	}
]
window.__imported__ = window.__imported__ || {};
window.__imported__["toq_notification_rate/layers.json.js"] = [
	{
		"id": 2,
		"name": "Title",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/Title.png",
			"frame": {
				"x": 0,
				"y": 0,
				"width": 320,
				"height": 92
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1709071794"
	},
	{
		"id": 9,
		"name": "Stars",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/Stars.png",
			"frame": {
				"x": 0,
				"y": 92,
				"width": 320,
				"height": 308
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "742121250"
	}
]
window.__imported__ = window.__imported__ || {};
window.__imported__["toq_watch_part/layers.json.js"] = [
	{
		"id": 5,
		"name": "Group 1",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/Group 1.png",
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
		"modification": "1094463361"
	}
]
window.Framer.Defaults.DeviceView = {
  "deviceScale" : -1,
  "orientation" : 0,
  "contentScale" : 1,
  "deviceType" : "apple-watch-sport"
};

window.FramerStudioInfo = {
  "deviceImagesUrl" : "file:\/\/\/Applications\/Framer%20Studio.app\/Contents\/Resources\/DeviceImages\/"
};

Framer.Device = new Framer.DeviceView();
Framer.Device.setupContext();