function clean_status(column) {
  return `UPPER(${column})`;
}

module.exports = { clean_status };