var yo = require('yo-yo');

var home_path = '/';
var singup_path = '/singup';


module.exports = function layout(content) {
	return yo`<div>
				<nav class="header">
					<div class="nav-wrapper">
						<div class="container">
							<div class="row">
								<div class="col s12 m6 offset-m1">
									<a href="${ home_path }" class="brand-logo platzigram">Platzigram</a>
								</div>
								<div class="col s2 m6 push-s10 push-m10">
									<a href="#" class="btn btn-large btn-flat dropdown-button" data-activates="dropdown-user">
										<i class="fa fa-user" aria-hidden="true"></i>
									</a>
									<ul id="dropdown-user" class="dropdown-content">
										<li><a href="${ singup_path }">Acceder</a></li>
										<li><a href="#">Salir</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>	
				</nav>
				<div class="content">
					${content}
				</div>
			</div>`;
}
