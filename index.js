/**
 * Descarga un archivo .csv a partir de un objeto
 * @param  {object | object[]}  data        Objeto o arreglo de objetos a exportar.
 * @param  {string}             fileName    Nombre del archivo final.
 */
function toCSV(data, fileName) {
    let dataString
    const object = Array.isArray(data) ? data[0] : data;
    const headers = Object.keys(object).join('|');
    let values = Object.values(object).join('|');
    if (Array.isArray(data)) {
        const moreValues = [];
        data.forEach(element => {
            moreValues.push(Object.values(element).join('|'));
        });
        values = moreValues.join('\n');
    }
    dataString = [headers, values].join('\n');
    exportr('csv', dataString, fileName);
}
/**
 * Descarga archivo
 * @param  {string} type Formato
 * @param  {string} data información plana
 * @param  {string} fileName Nombre final
 */
function exportr(type, data, fileName) {
    const downloadLink = document.createElement('a');
    let fileString = `data:text/${type};charset=utf-8,`;
    fileString += encodeURIComponent(data);
    downloadLink.href = fileString;
    downloadLink.download = fileName + '.' + type;
    downloadLink.click();
}

module.exports.toCSV = toCSV;