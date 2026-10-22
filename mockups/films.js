// Shared data + player for the mockups. [section, title, client, Drive id, still]
const FILMS = [
  ["commercial", "Meralda Jewels", "Meralda Jewels", "1f-wB06IqVThKqO8Z1HRQoU1s4zAXwrO4", "meralda"],
  ["commercial", "Bridge of Beautiful Friendship", "Favourite Homes", "1KmreKIbaH1VNitHHin8uAFna7tTy2YPu", "bridge"],
  ["commercial", "Arcon Homes", "Arcon Homes", "1VXROyFKnbx1htuD3HCwdwg-2YzYfI4Re", "arcon"],
  ["commercial", "Motion Sofas", "Duroflex", "163TLeFnB5OGUD5grO5_QhkVa48E9LjvE", "duroflex"],
  ["commercial", "Tail of Happiness", "Favourite Homes", "1ptG6N1gAWT5YnFzG3eavWEPlZ6uIUwg4", "tail"],
  ["commercial", "Kalyan Silks", "Kalyan Silks", "1m3WpGBooECF4y91DpoSNAT_gIm9BCWX_", "kalyan"],
  ["commercial", "Citroën Aircross SUV", "Citroën", "1W1kNBhpu8Tr9u0b0df8Mdb3aVvh1DQHV", "citroen1"],
  ["commercial", "Citroën C3 & Aircross", "Citroën", "1xNyK_ZsVxaC9AsSt0GU3J4kv_DD4vh_W", "citroen2"],
  ["commercial", "All Rise — Film 1", "All Rise Pharmacy", "19vscP_jWtE664k0wLFRH6KH2_Z4jZQRh", "allrise1"],
  ["commercial", "All Rise — Film 2", "All Rise Pharmacy", "167Mb-NS8yT0rJSmbGRonIJvzDOU-DZXj", "allrise2"],
  ["narrative", "Legend Has It", "Short Film", "1A3NtTYoTJAl-Qw2fqmn2H9Aw3P8TnL8O", "legend"],
  ["narrative", "U Nongiathong", "Fiction Film", "18WQhqpBU-njPEImR7lKqu01TnBqZoaXI", "nong"],
  ["documentary", "The Story of Lab Chief", "Documentary", "1Ey_kfDoj1On_OTVtFi5q8F0Bd15Zbn10", "labchief"],
];

// render(section, templateFn) appends one node per film into #grid-<section>
function renderFilms(tpl) {
  const dlg = document.getElementById("player"), frame = dlg.querySelector("iframe");
  FILMS.forEach(([section, title, kind, id, still], idx) => {
    const grid = document.getElementById("grid-" + section);
    if (!grid) return;
    const i = grid.children.length;
    const b = document.createElement("button");
    b.className = "film";
    b.innerHTML = tpl({ title, kind, still, n: String(i + 1).padStart(2, "0") });
    b.onclick = () => { frame.src = `https://drive.google.com/file/d/${id}/preview`; dlg.querySelector("h3").textContent = title; dlg.showModal(); };
    grid.append(b);
  });
  dlg.querySelector(".close").onclick = () => dlg.close();
  dlg.onclick = e => { if (e.target === dlg) dlg.close(); };
  dlg.onclose = () => { frame.src = ""; };
}
