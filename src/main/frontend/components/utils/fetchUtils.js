class FetchUtils {
	
	static get(url) {
		return fetch(url, {
			method: 'GET',
			headers: {
				'Accept-Language': window.navigator.userLanguage || window.navigator.language,
				'Accept': 'application/json'
			}
		});
	}

	static post(url, bodyData) {
		return fetch(url, {
			method: 'POST',
			headers: {
				'Accept-Language': window.navigator.userLanguage || window.navigator.language,
				'Accept': 'application/json'
			},
			body: JSON.stringify(bodyData)
		});

	}
}
export default FetchUtils;