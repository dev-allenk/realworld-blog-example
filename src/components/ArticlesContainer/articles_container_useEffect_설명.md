```jsx
useEffect(() => {
  if (query.favorited) {
    dispatch(
      getRequest({ shouldGetFeeds: false, query: queries.favorited(query) })
    );
    return;
  }
  if (query.follow) {
    dispatch(
      getRequest({ shouldGetFeeds: true, query: queries.follow(query) })
    );
    return;
  }
  dispatch(
    getRequest({ shouldGetFeeds: false, query: { ...query, limit: "10" } })
  );
}, [query]);
```

### pathname이 '/'인 경우.

> 공통 쿼리 offset, limit 존재

1.  Global Feed

    - routing url: '/'
    - router query: 없음.
    - api url: '/articles'
    - api query: 없음.
    - router query 그대로 사용.

2.  My Feed

    - routing url: '/?follow=\${myUsername}'
    - router query: 'follow' (follow가 유니크 쿼리)
    - api url: '/articles/feed'
    - api query: 없음.
    - router query에서 follow 제거 해야함.

### pathname이 '/profile'인 경우

> dynamic routing에 의해 'author'를 기본 쿼리로 가짐.  
>  (next.js가 dynamic routing을 쿼리로 처리함.)

1.  My Article

    - routing url: '/profile/\${author}'
    - router query: 'author'
    - api url: '/articles?author=\${myUsername}'
    - api query: 'author'
    - router query 그대로 사용.

2.  Favorited Article
    - routing url: '/profile/${author}?favorited=${username}'
    - router query: 'author', 'favorited' (favorited가 유니크 쿼리)
    - api url: '/articles?favorited=\${username}'
    - api query: 'favorited'
    - router query에서 'author'를 제거 해야함.

제거해야하는 쿼리가 존재하는 My Feed 와 Favorited Article의 경우,  
유니크 쿼리의 존재 여부를 판단해서 쿼리를 제거 후 요청 보냄.  
나머지는 쿼리를 그대로 사용하는 로직.  
2개 페이지에서 컴포넌트를 그대로 재사용하려다보니까 조금 복잡해진듯.  
근데 그렇다고 2개로 분리하자니 똑같은 형태에 똑같은 로직이라 아까움.
