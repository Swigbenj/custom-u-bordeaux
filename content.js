// alert("Hello from your Chrome extension!");
// Adding css via js to iframes cuz it don't work with the regular css file

// Aperçu Zimbra
document.querySelectorAll("iframe");
for (var iframe of document.querySelectorAll("iframe")) {
    console.log(iframe);
    var doc = iframe.contentWindow;
    doc.body.innerHTML = doc.body.innerHTML + `<style>
    div.gris {
        background-color: rgb(30, 30, 30) !important;
    }
    
    div.lien_mail a {
        color: white !important;
    }</style>;`;
}

frame.addEventListener("load", ev => {
    const new_style_element = document.createElement("style");
    new_style_element.textContent = ".gris { background-color: rgb(0,0,255) !important; }"
    ev.target.contentDocument.head.appendChild(new_style_element);
});