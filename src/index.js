import querystring from 'querystring';
import url from 'url';

export BrowserHistory from './browser';
export HashHistory from './hash';

export const parseHref = (href) => {
	const parsed = url.parse(href);

	const location = {
		hash: parsed.hash || undefined,
		pathname: parsed.pathname,
		search: parsed.search || undefined,
	};

	let query;
	if(parsed.query) {
		query = querystring.parse(parsed.query);
	}

	return {
		query,
		location,
		href: url.format(location),
	};
};

