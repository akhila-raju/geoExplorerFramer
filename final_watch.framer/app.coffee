# This imports all the layers for "arrival newest" into arrivalNewestLayers1
w = Framer.Importer.load "imported/arrival newest"


for l of w
	l.scale = .1921
	
trail_details = w.trail_details
half_dome = w.half_dome
explore = w.explore
notification = w.notification
back_button = w.back_button
trail_yellow = w.trail_yellow
details_text = w.details_text
# those little bubbles on map/details pages
sm_details = w.sm_details
sm_map = w.sm_map
mapdetails = w.mapdetails
details_explore = w.details_explore
details_text.visible=false
sm_details.visible=false

half_dome.x = 640
trail_details.x = 640
notification.x = 640
time = w.Time

explore_button = w.explore_button

explore_button.on Events.Click, -> 
	#print "I'm here!"
	explore.animate
		properties:
			x:-320
		time:0.2
		curve:'ease-out'
	half_dome.animate
		properties:
			x:0
		time:0.2
		curve:'ease-out'
		time.visible = false
		
gobutton = w.gobutton

gobutton.on Events.Click, -> 
	#print "I'm here!"
	half_dome.animate
		properties:
			x:-320
		time:0.2
		curve:'ease-out'
	trail_details.animate
		properties:
			x:0
		time:0.2
		curve:'ease-out'		
		time.visible = true

mapdetails.on Events.Click, -> 
	if trail_yellow.visible == true
		#print "block1"
		trail_yellow.visible = false
		sm_map.visible = false
		sm_details.visible = true
		details_text.visible = true
	else
		#print "block2"
		trail_yellow.visible = true
		sm_map.visible = true
		sm_details.visible = false
		details_text.visible = false

details_explore.on Events.Click, ->
	time.visible = false
	notification.animate
		properties:
			x:49
		time:0.2
		curve:'ease-out'
	
	trail_details.animate
		properties:
			x:640
		time:0.2
		curve:'ease-out'	
		
	

		
