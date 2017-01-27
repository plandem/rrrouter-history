class BrowserHistory {
	constructor(initHref = true) {
		if(initHref) {
			if(typeof(initHref) !== 'string') {
				initHref = window.location.pathname;
			}

			this.replaceHref(initHref);
		}
	}

	subscribe (popCallback) {
		this.onPopCallback = popCallback;
		return window.addEventListener('popstate', this.onChange, false);
	}

	unsubscribe() {
		window.removeEventListener('popstate', this.onChange, false);
	}

	onChange = ({ state }) => {
		if (typeof(state) === 'string') {
			this.onPopHref(state);
		}
	};

	go(page) {
		window.history.go(page);
	}

	update (nextHref, navigate) {
		const href = this.getCurrentHref();

		if (navigate) {
			if (href && nextHref !== href) {
				this.pushHref(nextHref);
			} else {
				this.replaceHref(nextHref);
			}
		}
	}

	pushHref (href) {
		window.history.pushState(href, null, href);
	}

	replaceHref (href) {
		window.history.replaceState(href, null, href);
	}

	onPopHref (href) {
		this.onPopCallback(href);
	}

	getCurrentHref () {
		return window.history.state;
	}
}

export default BrowserHistory;