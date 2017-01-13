function hashToHref (hash) {
	return hash.slice(1) || '/';
}

class HashHistory {
	subscribe (popCallback) {
		this.onPopCallback = popCallback;
		window.addEventListener('hashchange', this.onChange, false);
	}

	unsubscribe() {
		window.removeEventListener('hashchange', this.onChange, false);
	}

	onChange = () => {
		this.onPopHref(hashToHref(window.location.hash));
	};

	go(page) {
		window.history.go(page);
	}

	update (href, navigate) {
		this.setCurrentHref(href);

		if (navigate) {
			this.pushHref(href);
		}
	}

	pushHref (href) {
		window.location.hash = href;
	}

	onPopHref (href) {
		if (href !== this.getCurrentHref ()) {
			this.onPopCallback(href);
		}
	}

	getCurrentHref () {
		return this.href;
	}

	setCurrentHref (href) {
		this.href = href;
	}
}

export default HashHistory;
