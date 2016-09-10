var layout = require('../layout');
var yo = require('yo-yo');
var picture = require('../pictures-card');

module.exports = function (pictures) {
	var el = yo`<div class="container timelime">
					<div class="row">
						<div class="col s12 m10 offset-1 l6 offset-l3">
							${ pictures.map(function(pic){
								return picture(pic);
							}) }
						</div>
					</div>
				</div>`;

	return layout(el);
}