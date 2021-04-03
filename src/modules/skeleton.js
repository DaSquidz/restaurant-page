function createSkeleton() {
    const container = document.createElement("div");
    container.id = "container";

    const header = document.createElement("header");
    header.id = "header";

    const main = document.createElement("main");
    main.id = "main";

    container.appendChild(header);
    container.appendChild(main);

    return container;

}

export default createSkeleton;