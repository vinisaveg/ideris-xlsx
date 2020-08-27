import xlsx, { utils, WorkSheet, WorkBook } from "xlsx";

export const jsonToSheet = (data: Array<object>) => {
  let date = Date.now();

  const filename = `${date}.xlsx`;

  const workSheet: WorkSheet = utils.json_to_sheet(data);
  const workBook: WorkBook = utils.book_new();

  utils.book_append_sheet(workBook, workSheet, "data");

  xlsx.writeFile(workBook, filename, { bookType: "xlsx", type: "binary" });
};
