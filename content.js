var words = document.getElementsByTagName('*');

for (var i = 0; i < words.length; i++) {
    var element = words[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Game of Thrones/gi, 'possible spoilers ahead!');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

