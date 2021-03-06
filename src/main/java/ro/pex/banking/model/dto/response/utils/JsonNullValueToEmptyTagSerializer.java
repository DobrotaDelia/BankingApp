package ro.pex.banking.model.dto.response.utils;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

/**
 * Serializer class used for transforming the NULL values inside an JSON into the empty tags. This class can be used as annotation in the get method of the field.
 */
public class JsonNullValueToEmptyTagSerializer extends JsonSerializer<Object> {
	public void serialize(Object value, JsonGenerator jgen, SerializerProvider provider)
			throws IOException, JsonProcessingException {

		jgen.writeStartObject();
		jgen.writeEndObject();

	}
}