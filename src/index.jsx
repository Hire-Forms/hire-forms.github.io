import React from "react";
import Router, {Route} from "react-router";

import App from "./app";

let routes = (
	<Route handler={App} name="/" path="/" />
);

document.addEventListener("DOMContentLoaded", function() {
	return Router.run(routes, Router.HistoryLocation, function(Handler) {
		return React.render(<Handler />, document.body);
	});
});