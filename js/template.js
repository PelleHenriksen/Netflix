export const filmTmpl = (film) => `

<li><a href="film.html?id=${film.Id}"><img src="${film.Image}" alt="movie-poster"></a></li>
`;

export const singleFilmTmpl = (film) => `
<img src="${film.Image}" alt="movie-poster">
<p>${film.Description}</p>
<button><i class="fa-solid fa-play"></i></button>
<button id="listadd" class="list-add"><i class="fa-solid fa-plus"></i>
</button>
<button><i class="fa-solid fa-thumbs-up"></i>
</button>



`;
export const listTmpl = (film) => `

<a href="film.html?id=${film.Id}"><li><img src="${film.Image}" alt="movie-poster"></li></a>
`;
