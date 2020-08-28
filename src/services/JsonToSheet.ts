import xlsx, { utils, WorkSheet, WorkBook } from "xlsx";

export const jsonToSheet = (data: Array<any>) => {
  let date = Date.now();

  const filename = `${date}.xlsx`;

  const dataItem = data[0].Item || [];
  const dataPagamento = data[0].Pagamento || [];

  const workSheetResult: WorkSheet = utils.json_to_sheet(data);
  const workSheetItem: WorkSheet = utils.json_to_sheet(dataItem);
  const workSheetPagamento: WorkSheet = utils.json_to_sheet(dataPagamento);

  const workBook: WorkBook = utils.book_new();

  utils.book_append_sheet(workBook, workSheetResult, "Resultado");
  utils.book_append_sheet(workBook, workSheetItem, "Item");
  utils.book_append_sheet(workBook, workSheetPagamento, "Pagamento");

  xlsx.writeFile(workBook, filename, { bookType: "xlsx", type: "binary" });
};
