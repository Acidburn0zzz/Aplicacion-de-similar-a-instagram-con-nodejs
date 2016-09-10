var layout = require('../layout');
var yo = require('yo-yo');

var template = yo`<div class="container timelime">
	<div class="row">
		<div class="col s12 m10 offset-1 l6 offset-l3">
			content
		</div>
	</div>
</div>`;



module.exports = layout(template);