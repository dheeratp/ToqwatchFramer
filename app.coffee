# This imports all the layers for "AllScreens" into allscreensLayers6
allscreensLayers6 = Framer.Importer.load "imported/AllScreens"

for layerGroupName of allscreensLayers6
  window[layerGroupName] = allscreensLayers6[layerGroupName]
  

screen1.on Events.Click, ->
	screen1.animate({
		properties: {y: -1540},
		time: 0.01
	})
	
screen2.on Events.Click, ->
	#Group2.opacity = 0
	screen2.animate({
		properties: {x: -1540},
		time: 2.01
	})
	
screen3.on Events.Click, ->
	#Group24.opacity = 0
	screen3.animate({
		properties: {y: -1540},
		time: 2.2
	})
screen4.on Events.Click, ->
	#Group24.opacity = 0
	screen4.animate({
		properties: {y: -1540},
		time: 0
	})
#screen5 = new Layer()

screen5.on Events.Click, ->
	#screen5.opacity = 0
	screen5.animate({
		properties: {y: -1540},
		time: 0
	})
	
screen5new.on Events.Click, ->
	#Group24.opacity = 0
	screen5new.animate({
		properties: {opacity: 0},
		time: 2.1
	})
	
screen6.on Events.Click, ->
# 	Group24.opacity = 0
	screen6.animate({
		properties: {y: -1540},
		time: .01
	})
