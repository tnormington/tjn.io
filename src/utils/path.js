
function getContentType(path) {
    const pathArray = path.split('/');
    // get second to last item, that is the project type
    const contentType = pathArray[pathArray.length - 2];

    return contentType;
}

module.exports = getContentType;