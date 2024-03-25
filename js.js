function klikButton(){
    let tanggal = new Date();
    let tanggalFormatted = tanggal.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    alert("Hari Ini Tanggal : " + tanggalFormatted);
}
