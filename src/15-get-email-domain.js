/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  // eslint-disable-next-line no-param-reassign
  email = email.split('@');
  return email[email.length - 1];
}

module.exports = getEmailDomain;

