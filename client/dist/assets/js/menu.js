const menu = `
<hr/>
<ul>
<div>
<li><a href="/cookies/">Cookies</a></li>
<li><a href="/cookiestore/">Cookie Store</a></li>
<li><a href="/local-storage/">Local Storage</a></li>
<li><a href="/session-storage/">Session Storage</a></li>
</div>
<div>
<li><a href="/indexeddb/">IndexedDB</a></li>
<li><a href="/idb/">idb</a> - <a href="/idb-sync/">idb (sync)</a></li>
<li><a href="/file-system/">File System Access</a></li>
<li><a href="/cache-storage/">Cache Storage</a></li>
</div>
</ul>
`;
document.querySelector("#menu").innerHTML = menu;
