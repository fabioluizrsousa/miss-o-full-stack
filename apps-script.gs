function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Notas");

  if (!sheet) {
    sheet = ss.insertSheet("Notas");
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Data/Hora",
      "Nome",
      "Turma",
      "Nota (0-10)",
      "Acertos Totais (0-16)",
      "Acertos - Frontend/JS (0-8)",
      "Acertos - Banco de Dados (0-8)",
      "Cargo Alcançado"
    ]);
  }

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.nome,
    data.turma,
    data.nota,
    data.acertosTotais,
    data.acertosJS,
    data.acertosBD,
    data.cargo
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService
    .createTextOutput("Central de Comando — API online")
    .setMimeType(ContentService.MimeType.TEXT);
}
