export const validateCreatorData = (data) => {
  const { name, url, description } = data;
  const errors = {};

  if (!name || name.trim() === '') {
    errors.name = 'Name is required';
  }

  if (!url || url.trim() === '') {
    errors.url = 'URL is required';
  } else if (!isValidUrl(url)) {
    errors.url = 'Invalid URL format';
  }

  if (!description || description.trim() === '') {
    errors.description = 'Description is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

const isValidUrl = (string) => {
  const urlPattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\\.)+[a-z]{2,}|localhost|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ipv4
      '(\\:\\d+)?(\\/[-a-z0-9%_.~+]*)*' + // port and path
      '(\\?[;&a-z0-9%_.~+=-]*)?' + // query string
      '(\\#[-a-z0-9_]*)?$','i' // fragment locator
  );
  return !!urlPattern.test(string);
};