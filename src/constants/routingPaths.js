const path = {
  register: "/user/register",
  login: "/user/login",
  newArticle: "/editor/new",
  settings: "/user/settings",
  profile: "/profile/[author]",
  profileAs(username) {
    return `/profile/${username}`;
  },
  article: "/article/[slug]",
  articleAs(slug) {
    return `/article/${slug}`;
  },
};
export default path;
