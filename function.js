function make_gradient(p1,p2){
	
	let gradient = drawingContext.createLinearGradient(
		p1.x,
		p1.y,
		p2.x,
		p2.y
	);

	gradient.addColorStop(0, color(p1.color1));
	gradient.addColorStop(1, color(p2.color1));
	
	return gradient;
	
}
