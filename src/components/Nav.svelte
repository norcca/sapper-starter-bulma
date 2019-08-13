<script>
	export let segment;

	let burgerOpen = false;
</script>


<nav class="navbar is-light" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://sapper.svelte.dev/" target="_blank">
      <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFk%0D%0Ab2JlIElsbHVzdHJhdG9yIDIzLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246%0D%0AIDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9InN2ZWx0ZSIgeG1sbnM9%0D%0AImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5v%0D%0AcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDUxOSAxMzkiIHN0%0D%0AeWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxOSAxMzk7IiB4bWw6c3BhY2U9InByZXNl%0D%0AcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMTU5NDk3O30KCS5zdDF7%0D%0AZmlsbDojRkZGRkZGO30KCS5zdDJ7ZmlsbDojNEE0QTU1O30KPC9zdHlsZT4KPHBhdGggaWQ9ImJh%0D%0AY2siIGNsYXNzPSJzdDAiIGQ9Ik0xMTAuMiwyOC40Qzk5LjgsMTMuNSw3OS4zLDkuMSw2NC40LDE4%0D%0ALjZMMzguNCwzNS4yYy03LjEsNC41LTEyLDExLjctMTMuNSwyMAoJYy0xLjIsNi45LTAuMiwxNCwz%0D%0ALjEsMjAuMmMtMi4yLDMuNC0zLjgsNy4yLTQuNSwxMS4yYy0xLjUsOC40LDAuNSwxNy4xLDUuNSwy%0D%0ANC4xYzEwLjQsMTQuOSwzMC45LDE5LjMsNDUuOCw5LjhsMjYuMS0xNi42CgljNy4xLTQuNSwxMi0x%0D%0AMS43LDEzLjUtMjBjMS4yLTYuOSwwLjEtMTQtMy4xLTIwLjJjMi4yLTMuNCwzLjgtNy4yLDQuNS0x%0D%0AMS4yQzExNy4yLDQ0LjEsMTE1LjIsMzUuNSwxMTAuMiwyOC40Ii8+CjxwYXRoIGlkPSJmcm9udCIg%0D%0AY2xhc3M9InN0MSIgZD0iTTYxLjksMTEyLjJjLTguNCwyLjItMTcuMy0xLjEtMjIuMi04LjJjLTMt%0D%0ANC4yLTQuMi05LjQtMy4zLTE0LjVjMC4xLTAuOCwwLjQtMS42LDAuNi0yLjRsMC41LTEuNQoJbDEu%0D%0AMywxYzMuMSwyLjIsNi41LDQsMTAuMiw1LjFsMSwwLjNsLTAuMSwxYy0wLjEsMS40LDAuMywyLjcs%0D%0AMS4xLDMuOGMxLjUsMi4xLDQuMiwzLjEsNi43LDIuNWMwLjYtMC4yLDEuMS0wLjQsMS42LTAuN2wy%0D%0ANi0xNi42CgljMS4zLTAuOCwyLjItMi4xLDIuNC0zLjZjMC4zLTEuNS0wLjEtMy4xLTEtNC40Yy0x%0D%0ALjUtMi4xLTQuMi0zLjEtNi43LTIuNWMtMC42LDAuMi0xLjEsMC40LTEuNiwwLjdsLTEwLDYuM2Mt%0D%0AMS42LDEtMy40LDEuOC01LjMsMi4zCgljLTguNCwyLjItMTcuMy0xLjEtMjIuMi04LjJjLTMtNC4y%0D%0ALTQuMi05LjQtMy4yLTE0LjVjMC45LTUsMy44LTkuNCw4LjEtMTIuMUw3MiwyOS4zYzEuNi0xLDMu%0D%0ANC0xLjgsNS4zLTIuMwoJYzguNC0yLjIsMTcuMywxLjEsMjIuMiw4LjJjMyw0LjIsNC4yLDkuNCwz%0D%0ALjMsMTQuNWMtMC4yLDAuOC0wLjQsMS42LTAuNiwyLjRsLTAuNSwxLjVsLTEuMy0xYy0zLjEtMi4z%0D%0ALTYuNS00LTEwLjItNS4xbC0xLTAuM2wwLjEtMQoJYzAuMS0xLjQtMC4zLTIuOC0xLjEtMy45Yy0x%0D%0ALjUtMi4xLTQuMi0zLjEtNi43LTIuNGMtMC42LDAuMi0xLjEsMC40LTEuNiwwLjdMNTMuOCw1Ny4z%0D%0AYy0xLjMsMC44LTIuMiwyLjEtMi41LDMuNgoJYy0wLjMsMS41LDAuMSwzLjEsMSw0LjRjMS41LDIu%0D%0AMSw0LjEsMy4xLDYuNywyLjVjMC42LTAuMiwxLjEtMC40LDEuNi0wLjdsMTAtNi4zYzEuNi0xLDMu%0D%0ANC0xLjgsNS4zLTIuM2M4LjQtMi4yLDE3LjMsMS4xLDIyLjIsOC4yCgljMyw0LjIsNC4yLDkuNCwz%0D%0ALjMsMTQuNWMtMC45LDUtMy44LDkuNC04LjEsMTIuMWwtMjYuMSwxNi42QzY1LjYsMTEwLjksNjMu%0D%0AOCwxMTEuNyw2MS45LDExMi4yIi8+CjxnPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE1MC44LDg1%0D%0ALjlsOC4zLTMuMWMyLjUsNS40LDcuMyw5LDEzLjcsOWM2LjUsMCwxMC44LTMuMiwxMC44LTkuMmMw%0D%0ALTYuNS02LjUtOC44LTEzLjUtMTEuMgoJCWMtOC4zLTMtMTcuNC02LjItMTcuNC0xNy4xYzAtOC40%0D%0ALDYuOS0xNS42LDE5LTE1LjZjMTAuMSwwLDE2LjQsNSwxOC40LDExLjhsLTguMiwyLjdjLTEuNC0z%0D%0ALjQtNS4xLTYtMTAuOS02CgkJYy01LjcsMC05LjEsMi42LTkuMSw3LjJjMCw0LjksNS41LDYuOCwx%0D%0AMiw5YzguNiwzLjIsMTguOCw2LjgsMTguOCwxOS4yYzAsMTEuNC04LjksMTcuOC0yMC40LDE3LjgK%0D%0ACQlDMTYxLjksMTAwLjQsMTUzLjgsOTQuOCwxNTAuOCw4NS45eiIvPgoJPHBhdGggY2xhc3M9InN0%0D%0AMiIgZD0iTTI0MSw4NS43aC0yNC4xbC00LjksMTMuN2gtOS4ybDIxLjUtNTkuNmg5LjFMMjU1LDk5%0D%0ALjRoLTkuMkwyNDEsODUuN3ogTTIzMSw1Ny42Yy0wLjctMS45LTEuNi00LjctMi02LjcKCQljLTAu%0D%0ANSwyLTEuNCw0LjgtMiw2LjdsLTcuMywyMC4zaDE4LjZMMjMxLDU3LjZ6Ii8+Cgk8cGF0aCBjbGFz%0D%0Acz0ic3QyIiBkPSJNMjY4LjMsMzkuOGgyMy45YzE0LjYsMCwxOS43LDkuMywxOS43LDE4LjJjMCw4%0D%0ALjMtNS41LDE4LjItMTkuNywxOC4yaC0xNS4xdjIzLjJoLTguOVYzOS44eiBNMzAyLjgsNTgKCQlj%0D%0AMC00LjItMi4xLTkuNy0xMC05LjdoLTE1LjZ2MTkuNGgxNS42QzMwMC4yLDY3LjcsMzAyLjgsNjIu%0D%0ANiwzMDIuOCw1OHoiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zMjYsMzkuOGgyMy45YzE0LjYs%0D%0AMCwxOS43LDkuMywxOS43LDE4LjJjMCw4LjMtNS41LDE4LjItMTkuNywxOC4yaC0xNS4xdjIzLjJI%0D%0AMzI2VjM5Ljh6IE0zNjAuNCw1OAoJCWMwLTQuMi0yLjEtOS43LTEwLTkuN2gtMTUuNnYxOS40aDE1%0D%0ALjZDMzU3LjksNjcuNywzNjAuNCw2Mi42LDM2MC40LDU4eiIvPgoJPHBhdGggY2xhc3M9InN0MiIg%0D%0AZD0iTTM4My43LDM5LjhoMzd2OC4zaC0yOC4xdjE2LjRoMTguMXY4LjNoLTE4LjFWOTFoMzB2OC4z%0D%0AaC0zOC44VjM5Ljh6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDM4LjcsMzkuOGgyNS4xYzE0%0D%0ALjYsMCwxOS4yLDguNywxOS4yLDE3LjZjMCw2LjktMy44LDE0LjUtMTIuOSwxNi45bDEyLjMsMjUu%0D%0AMWgtMTAuMUw0NjAuNSw3NWgtMTIuOXYyNC40CgkJaC04LjlWMzkuOHogTTQ2NCw2Ni41YzcuNCww%0D%0ALDkuOS00LjUsOS45LTkuMWMwLTQuMi0yLTkuMS05LjktOS4xaC0xNi40djE4LjJINDY0eiIvPgo8%0D%0AL2c+Cjwvc3ZnPgo=" 
	  	width="112" alt="sapper-logo">
    </a>

    <span role="button" class="navbar-burger burger" aria-label="menu" 
		aria-expanded="false" data-target="navbarBasicExample" on:click="{() => burgerOpen = !burgerOpen}">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </span>
  </div>

  <div id="navbarBasicExample" class="navbar-menu{burgerOpen ? ' is-active' : ''}">
    <div class="navbar-start">
      <a class="navbar-item{segment === undefined ? ' is-active' :  ''}" href=".">
        Home
      </a>
      <a class="navbar-item{segment === 'about' ? ' is-active' :  ''}" href="/about">
        About
      </a>
      <a rel=prefetch class="navbar-item{segment === 'blog' ? ' is-active' :  ''}" href="/blog">
        Blog
      </a>
    </div>
  </div>
</nav>
