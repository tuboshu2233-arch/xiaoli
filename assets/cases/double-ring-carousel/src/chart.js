// 可离线运行；替换顶部 data 后在组件 DOM 挂载完成时初始化。
(() => {
  const root = document.getElementById("double-ring-carousel"),
    svg = root.querySelector("svg"),
    legend = root.querySelector(".dc-legend"),
    play = root.querySelector(".dc-play");
  const ns = "http://www.w3.org/2000/svg";
  const intervalMs = 2500,
    transitionMs = 850;
  const data = [
    {
      name: "专职网格员",
      value: 331,
      colors: ["#bd4c00", "#ffb521"],
      label: "#a7753e",
    },
    {
      name: "兼职网格员",
      value: 87,
      colors: ["#12bdc9", "#23efed"],
      label: "#32c8d1",
    },
    {
      name: "司法社工",
      value: 53,
      colors: ["#2750d9", "#3b70ff"],
      label: "#4664c1",
    },
    {
      name: "心理咨询师",
      value: 13,
      colors: ["#7bcdf5", "#bcecff"],
      label: "#7bc8e8",
    },
  ];
  const total = data.reduce((a, d) => a + d.value, 0);
  root.querySelector(".dc-footer > span:last-child").textContent =
    `合计 ${total} 人`;
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  let active = 0,
    playing = !motion.matches,
    hovered = false,
    focused = false,
    timer = null,
    frame = 0,
    width = 320;
  let emphasis = data.map((d, i) => (i === active ? 1 : 0)),
    nodes = [],
    rotation = 0;
  const midpoints = [];
  let offset = -Math.PI / 2 - (Math.PI * data[0].value) / total;
  data.forEach((d) => {
    const next = offset + (Math.PI * 2 * d.value) / total;
    midpoints.push((offset + next) / 2);
    offset = next;
  });
  rotation = -Math.PI / 2 - midpoints[active];
  function node(tag, attrs = {}) {
    const n = document.createElementNS(ns, tag);
    Object.entries(attrs).forEach(([k, v]) => n.setAttribute(k, v));
    return n;
  }
  function point(r, a, c) {
    return [c + r * Math.cos(a), c + r * Math.sin(a)];
  }
  function arc(inner, outer, a, b, c) {
    const p = point(outer, a, c),
      q = point(outer, b, c),
      u = point(inner, b, c),
      v = point(inner, a, c),
      large = b - a > Math.PI ? 1 : 0;
    return `M${p}A${outer},${outer} 0 ${large} 1 ${q}L${u}A${inner},${inner} 0 ${large} 0 ${v}Z`;
  }
  function labelPath(r, a, b, c) {
    const mid = (a + b) / 2,
      bottom = Math.sin(mid) > 0.15;
    let p = point(r, bottom ? b : a, c),
      q = point(r, bottom ? a : b, c);
    return `M${p}A${r},${r} 0 ${b - a > Math.PI ? 1 : 0} ${bottom ? 0 : 1} ${q}`;
  }
  const buttons = data.map((d, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-pressed", String(i === active));
    b.setAttribute(
      "aria-label",
      `${d.name}，${d.value}人，占比${((d.value / total) * 100).toFixed(2)}%`,
    );
    const sw = document.createElement("span");
    sw.className = "dc-swatch";
    sw.style.background = d.colors[1];
    sw.setAttribute("aria-hidden", "true");
    const n = document.createElement("span");
    n.textContent = d.name;
    const v = document.createElement("span");
    v.className = "dc-legend-value";
    v.textContent = `${Math.round((d.value / total) * 100)}%`;
    b.append(sw, n, v);
    b.addEventListener("click", () => choose(i, true));
    legend.append(b);
    return b;
  });
  function center(manual = false) {
    const d = data[active];
    root.querySelector(".dc-name").textContent = d.name;
    root.querySelector(".dc-number").textContent = d.value;
    root.querySelector(".dc-percent").textContent =
      `${((d.value / total) * 100).toFixed(2)}%`;
    buttons.forEach((b, i) =>
      b.setAttribute("aria-pressed", String(active === i)),
    );
    svg.setAttribute(
      "aria-label",
      `双层环形轮播图，当前${d.name}，${d.value}人，占比${((d.value / total) * 100).toFixed(2)}%`,
    );
    if (manual)
      root.querySelector(".dc-announcement").textContent =
        `${d.name}，${d.value}人，占比${((d.value / total) * 100).toFixed(2)}%`;
  }
  function geometry() {
    const c = width / 2,
      r = width * 0.475;
    nodes.forEach((n, i) => {
      const e = emphasis[i],
        a = n.a + rotation,
        b = n.b + rotation;
      n.main.setAttribute("d", arc(r * 0.55, r * 0.78 + e * 3, a, b, c));
      n.outer.setAttribute("d", arc(r * 0.81 + e * 2, r + e * 2, a, b, c));
      n.outer.setAttribute("opacity", String(0.13 + e * 0.18));
      n.guide.setAttribute(
        "d",
        labelPath(r * 0.9 + e * 2, a + 0.012, b - 0.012, c),
      );
      n.text.setAttribute("opacity", i === active ? "1" : ".75");
    });
  }
  function animate() {
    cancelAnimationFrame(frame);
    const from = [...emphasis],
      to = data.map((_, i) => (i === active ? 1 : 0)),
      start = performance.now(),
      duration = motion.matches ? 0 : transitionMs,
      fromRotation = rotation;
    let delta = (-Math.PI / 2 - midpoints[active] - rotation) % (2 * Math.PI);
    if (delta > Math.PI) delta -= 2 * Math.PI;
    if (delta < -Math.PI) delta += 2 * Math.PI;
    function tick(now) {
      const t = duration ? Math.min(1, (now - start) / duration) : 1,
        k = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      emphasis = from.map((v, i) => v + (to[i] - v) * k);
      rotation = fromRotation + delta * k;
      geometry();
      if (t < 1) frame = requestAnimationFrame(tick);
    }
    tick(start);
  }
  function choose(i, manual = false) {
    active = i;
    center(manual);
    animate();
    status();
    if (manual) {
      schedule();
    }
  }
  function status() {
    play.textContent = playing ? "暂停轮播" : "开始轮播";
    play.setAttribute("aria-label", play.textContent);
    root.querySelector(".dc-status").textContent = !playing
      ? "轮播已暂停"
      : hovered || focused
        ? "悬停 / 聚焦暂停"
        : `自动轮播 · ${active + 1} / ${data.length}`;
  }
  function schedule() {
    clearInterval(timer);
    timer = null;
    status();
    if (playing && !hovered && !focused && !document.hidden)
      timer = setInterval(() => choose((active + 1) % data.length), intervalMs);
  }
  function render() {
    cancelAnimationFrame(frame);
    width = Math.round(root.querySelector(".dc-figure").clientWidth);
    svg.setAttribute("viewBox", `0 0 ${width} ${width}`);
    svg.replaceChildren();
    const defs = node("defs");
    svg.append(defs);
    nodes = [];
    const title = node("title");
    title.textContent = "人员构成双层环形轮播图，示例数据，合计484人";
    svg.append(title);
    let a = -Math.PI / 2 - (Math.PI * data[0].value) / total;
    data.forEach((d, i) => {
      const b = a + (Math.PI * 2 * d.value) / total,
        gap = 0.025;
      const grad = node("linearGradient", {
        id: `dc-fill-${i}`,
        x1: "0%",
        y1: "50%",
        x2: "100%",
        y2: "50%",
      });
      grad.append(
        node("stop", { offset: "0%", "stop-color": d.colors[0] }),
        node("stop", { offset: "100%", "stop-color": d.colors[1] }),
      );
      defs.append(grad);
      const outer = node("path", { fill: d.label });
      const main = node("path", {
        fill: `url(#dc-fill-${i})`,
        "data-tooltip": `${d.name}：${d.value}人（${((d.value / total) * 100).toFixed(2)}%）`,
      });
      main.style.cursor = "pointer";
      outer.style.cursor = "pointer";
      [main, outer].forEach((p) =>
        p.addEventListener("click", () => choose(i, true)),
      );
      const guide = node("path", { id: `dc-label-${i}`, fill: "none" });
      defs.append(guide);
      const text = node("text", { "text-anchor": "middle" });
      const tp = node("textPath", {
        href: `#dc-label-${i}`,
        startOffset: "50%",
        "dominant-baseline": "middle",
      });
      tp.textContent = i === 3 ? "心理" : d.name;
      text.append(tp);
      svg.append(outer, main, text);
      nodes.push({ main, outer, guide, text, a: a + gap, b: b - gap });
      a = b;
    });
    geometry();
    center();
  }
  play.addEventListener("click", () => {
    playing = !playing;
    hovered = false;
    focused = false;
    schedule();
  });
  root.querySelector(".dc-figure").addEventListener("pointerenter", () => {
    hovered = true;
    schedule();
  });
  root.querySelector(".dc-figure").addEventListener("pointerleave", () => {
    hovered = false;
    schedule();
  });
  root.addEventListener("focusin", (e) => {
    focused = legend.contains(e.target);
    schedule();
  });
  root.addEventListener("focusout", (e) => {
    focused = legend.contains(e.relatedTarget);
    schedule();
  });
  document.addEventListener("visibilitychange", schedule);
  motion.addEventListener("change", () => {
    if (motion.matches) {
      playing = false;
      schedule();
    }
  });
  window.addEventListener("blur", () => {
    focused = false;
    hovered = false;
    schedule();
  });
  new ResizeObserver(render).observe(root.querySelector(".dc-figure"));
  render();
  schedule();
})();
