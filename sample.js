function new_html_element(data = {}) 
{ 
    const element = document.createElement(data["tag"]);
    // handle custom attributes here
    if (data['attributes'])
    {
        for (let [key, value] of Object.entries(data['attributes'])) {
            element.setAttribute(key, value);
        }
    }
    // handle appendchild, in a more intuitive way
    if (data['insertin'])
    {
        data['insertin'].appendChild(element);
    }
    // handle appendchild, in a more intuitive way
    if (data['addtobody'])
    {
        document.body.appendChild(element);
    }
    // 
    return data.returnel ? element : null;

}

new_html_element({tag: 'p', insertin: document.body});