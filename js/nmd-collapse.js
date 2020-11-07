const template = document.createRange().createContextualFragment(/*html*/`<div part="content-container"><slot></slot></div>`);

export default
	class NmdCollapse extends HTMLElement {
	constructor() {
		super();
		let shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.appendChild(template.cloneNode(true));
	}

	static get observedAttributes() {
		return ["duration", "animation"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if(name === "duration") {
			if (newValue)
				this.style.setProperty("--nmd-collapse-duration", newValue);
			else
				this.style.removeProperty("--nmd-collapse-duration");
		} else if(name === "animation") {
			if (newValue)
				this.style.setProperty("--nmd-collapse-animation", "__nmd-collapse__"+newValue);
			else
				this.style.removeProperty("--nmd-collapse-animation");
		}
	}

	get duration() {
		return this.getAttribute("duration");
	}

	set duration(value) {
		this.setAttribute("duration", value);
	}

	setCalculatedHeight() {
		this.style.setProperty("--nmd-collapse-calculated-height", this.shadowRoot.firstElementChild.getBoundingClientRect().height + "px");
	}

	collapse() {
		this.removeAttribute("expanding");
		this.hidden = false;
		this.setCalculatedHeight();
		this.setAttribute("collapsing", "");
	}

	expand() {
		this.removeAttribute("collapsing");
		this.setCalculatedHeight();
		this.setAttribute("expanding", "");
	}

	get isCollapsed() {
		return this.hasAttribute("collapsing") || this.hidden;
	}

	toggle() {
		if(this.isCollapsed)
			this.expand();
		else
			this.collapse();
	}
}