export default (...classes) => {
  const dupes = {};
  return classes.filter((cls) => {
    const keep = !!cls && !dupes[cls];
    dupes[cls] = dupes[cls] || !!cls;
    return keep;
  }).join(' ');
};
