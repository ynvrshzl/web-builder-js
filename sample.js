// example usage: 
// create_element({ tag: 'p', insertin: document.body, getref: 1 })

export function create_element(data = {}) {

    const tag = data["tag"];
    const el = document.createElement(tag);



    /** handle custom attributes here */
    if (data['attr']) {
        for (let [key, value] of Object.entries(data['attr'])) {
            el.setAttribute(key, value);
        }
    }
    if (data['classes']) {
        el.classList.add(data['classes'])
    }
    /** handle appendchild, in a more intuitive way */
    if (data['insertin']) {
        data['insertin'].appendChild(el);
    }
    /** handle appendchild, in a more intuitive way */
    if (data['addtobody']) {
        document.body.appendChild(el);
    }
    /** insert an element *before* another element */
    if (data['insertbefore']) {
        data['insertbefore'].insertAdjacentElement('beforebegin', el)
    }
    /** insert an element *after* another element */
    if (data['insertafter']) {
        data['insertafter'].insertAdjacentElement('afterbegin', el)
    }
    // focus on elmeent
    if (data['focus']) {
        el.focus();
    }
    /** setup text */
    if (data['innerhtml']) {
        el.innerHTML = data['innerhtml'];
    }

    /** return reference to element? */
    if (data['getref']) {
        // warning: this has to be at the very bottom to unblock flow!
        return el;
    }

}
