/**
 * Realiza la descarga del archivo PDF 
 * 
 * @param {any} pdfBytes PDF en formarto byte
 * @param {any} nameFile Nombre del documento PDF
 */
function downloadPDF(pdfBytes, nameFile) {
    const byteArray = new Uint8Array(pdfBytes);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = nameFile;
    link.click();
    URL.revokeObjectURL(link.href);
}