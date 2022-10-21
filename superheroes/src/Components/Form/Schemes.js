import * as yup from "yup";

export const isRequiredError = "This field is required";
export const isNotTrimmedError =
  "This field must have no spaces before and after";

const STR_REGEX = /^[a-zа-яё]+$/i;

export const addHeroShema = yup.object().shape({
  nickname: yup
    .string()
    .strict(true)
    .trim(isNotTrimmedError)
    .max(20, "Nice try, nobody has a nickname that long")
    .required(isRequiredError)
		.matches(STR_REGEX, "Invalid symbols, use only character"),
		real_name: yup
    .string()
    .strict(true)
    .trim(isNotTrimmedError)
    .min(3, "Must be longer than 3 characters")
    .max(20, "Nice try, nobody has a name that long")
    .required(isRequiredError),
		catch_phrase: yup
    .string()
    .strict(true)
    .trim(isNotTrimmedError)
    .required(isRequiredError),
		origin_description: yup
    .string()
    .required(isRequiredError)
    .min(7, "description must be 7 digits minimum")
    .required(isRequiredError),
		superpowers: yup
    .string()
    .required(isRequiredError)
    .min(4, "superpowers must be 7 digits minimum")
    .required(isRequiredError),
		Images: yup
    .string()
    .required(isRequiredError)
    .min(7, "link must be 7 digits minimum")
    .required(isRequiredError)
});
