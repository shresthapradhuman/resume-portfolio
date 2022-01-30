function Sort(a, b) {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
}

export default Sort;
