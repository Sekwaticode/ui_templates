const timelineData = [{
        title: "Founder’s Vision",
        text: "The Corporate Strategy enthusiast, Mmalethabo Mahlangu, started The Virtual Boardroom SA to solve organizational and professional challenges. With expertise in budgeting and costing, she designed a Personal Finance Budget Pack that has helped individuals restructure their finances and achieve financial stability.",
        position: "left",
    },
    {
        title: "Core Focus & Business Expansion",
        text: "The Virtual Boardroom SA established its core function, focusing on strategic solutions. Over time, its portfolio expanded to include virtual assistant services, business solutions, management consultancy, and youth development.",
        position: "right",
    },
    {
        title: "Service Availability",
        text: "The Virtual Boardroom SA offers its services nationwide, both virtually and semi in-contact, ensuring accessibility to businesses and professionals.",
        position: "left",
    },
    {
        title: "Cost-Effective Solutions",
        text: "By leveraging virtual services, businesses can optimize operations while reducing human capital costs, making professional solutions more affordable and efficient.",
        position: "right",
    },
];

const container = document.getElementById("timeline-container");

timelineData.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = `relative flex ${item.position === "left" ? "justify-start" : "justify-end"} my-6`;

    // Timeline box
    const box = document.createElement("div");
    box.className = "relative w-1/2 bg-black p-6 rounded-lg shadow-lg text-white";

    const title = document.createElement("h2");
    title.className = "text-xl font-semibold";
    title.textContent = item.title;

    const text = document.createElement("p");
    text.className = "text-stone-200";
    text.textContent = item.text;

    box.appendChild(title);
    box.appendChild(text);

    // Arrow
    const arrow = document.createElement("div");
    arrow.className = `absolute top-6 border-t-transparent border-b-transparent border-solid border-[15px] ${item.position === "left" ? "right-[-15px] border-l-black" : "left-[-15px] border-r-black"}`;
    box.appendChild(arrow);

    // Timeline dot (logo placeholder)
    const dot = document.createElement("div");
    dot.className = "absolute top-6 left-1/2 transform -translate-x-1/2 bg-black w-10 h-10 rounded-full flex items-center justify-center shadow-md";

    const img = document.createElement("img");
    img.src = "logo.jpg"; // replace with your actual logo path
    img.alt = "Company Logo";
    img.className = "w-8 h-8 rounded-full";
    dot.appendChild(img);

    wrapper.appendChild(box);
    wrapper.appendChild(dot);
    container.appendChild(wrapper);
});