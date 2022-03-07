package ro.pex.banking.i18n;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.stereotype.Component;

@Component
public class I18nUtils {
	
	@Autowired
	@Qualifier("textsResourceBundleMessageSource")
	private static ResourceBundleMessageSource messageSource;
	
	public static String getTranslation(String code) {
		
		Locale locale=LocaleContextHolder.getLocale();
		return messageSource.getMessage(code, null, locale);
	}
	

}
