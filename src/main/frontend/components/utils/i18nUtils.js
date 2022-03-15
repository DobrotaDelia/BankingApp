
class I18nUtils {


	static loadResourcesFromServer() {
		var locale = window.navigator.userLanguage || window.navigator.language;

		return fetch('http://localhost:8080/banking-app/api/users/translations/' + locale)
			.then(res => res.json())
			.then((data) => {
				return data.content[0];
			}
			);
	}
	static translationsData = {
		en: {
			translation: {
				greetings: "EN Translation"
			}
		},
		fr: {
			translation: {
				greetings: "FR Translation"
			}
		},
		ro: {
			translation: {
				greetings: "RO Translation"
			}
		}
	};
}
export default I18nUtils;