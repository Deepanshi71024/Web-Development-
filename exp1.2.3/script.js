const svg = document.getElementById("drawingArea");
const colorPicker = document.getElementById("colorPicker");

let drawing = false;
let currentPath = null;
let paths = [];

// Convert mouse position to SVG coordinates
function getMousePosition(event) {
    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;

    return point.matrixTransform(svg.getScreenCTM().inverse());
}


svg.addEventListener("mousedown", (e) => {
    drawing = true;
    const pos = getMousePosition(e);

    currentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    currentPath.setAttribute("d", `M ${pos.x} ${pos.y}`);
    currentPath.setAttribute("stroke", colorPicker.value);
    currentPath.setAttribute("stroke-width", "2");
    currentPath.setAttribute("fill", "none");

    svg.appendChild(currentPath);
    paths.push(currentPath);
});

// Mouse move → draw
svg.addEventListener("mousemove", (e) => {
    if (!drawing) return;

    const pos = getMousePosition(e);
    let d = currentPath.getAttribute("d");
    currentPath.setAttribute("d", `${d} L ${pos.x} ${pos.y}`);
});

// Mouse up → stop drawing
svg.addEventListener("mouseup", () => {
    drawing = false;
});

// Undo last path
function undo() {
    if (paths.length > 0) {
        const lastPath = paths.pop();
        svg.removeChild(lastPath);
    }
}
