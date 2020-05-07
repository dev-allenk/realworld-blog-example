const path = {
  register: "/user/register",
  login: "/user/login",
  editor: "/editor/[slug]",
  editorAs: (slug) => `/editor/${slug}`,
  settings: "/user/settings",
  profile: "/profile/[author]",
  profileAs: (username) => `/profile/${username}`,
  article: "/article/[slug]",
  articleAs: (slug) => `/article/${slug}`,
};
export default path;
