(this.webpackJsonpmovi_app_2019=this.webpackJsonpmovi_app_2019||[]).push([[0],{33:function(e,t,a){e.exports=a(65)},38:function(e,t,a){},59:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(29),o=a.n(s),i=a(8),c=a(7);a(38);var l=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,'"Freedom is the freedom to say that tow plus two make four. If that i grandted, all else follows."'),r.a.createElement("span",null,"- George Orwell, 1984"))},m=a(16),u=a.n(m),p=a(10),v=a(11),d=a(13),g=a(12),y=a(14),f=a(30),h=a.n(f),E=a(3),_=a.n(E);a(59);function b(e){var t=e.id,a=e.year,n=e.title,s=e.summary,o=e.poster,c=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(i.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:s,poster:o,genres:c}}},r.a.createElement("img",{src:o,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},c.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},s.slice(0,180),"..."))))}b.prototype={id:_.a.number.isRequired,year:_.a.number.isRequired,title:_.a.string.isRequired,summary:_.a.string.isRequired,poster:_.a.string.isRequired,genres:_.a.arrayOf(_.a.string).isRequired};var O=b,N=(a(63),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMOvies=function(){var e,t;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(h.a.get("https://yts-proxy.now.sh/list_movies.json?sorting_by=rating"));case 2:e=n.sent,t=e.data.data.movies,a.setState({movies:t,isLoading:!1});case 5:case"end":return n.stop()}}))},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.getMOvies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(O,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component)),j=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;console.log(t),void 0==t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return console.log(e.state.id),e.state?r.a.createElement("span",null,e.state.title):null}}]),t}(r.a.Component);a(64);var w=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/about"},"About"))};var k=function(){return r.a.createElement(i.a,null,r.a.createElement(w,null),r.a.createElement(c.a,{path:"/",exact:!0,component:N}),r.a.createElement(c.a,{path:"/about",component:l}),r.a.createElement(c.a,{path:"/movie/:id",component:j}))};o.a.render(r.a.createElement(k,null),document.getElementById("potato"))}},[[33,1,2]]]);
//# sourceMappingURL=main.b956aca2.chunk.js.map