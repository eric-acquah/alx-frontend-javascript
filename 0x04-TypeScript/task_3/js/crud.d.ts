import {RowId, RowElement} from './interface'

declare function insertRow(row: object): number;
declare function updateRow(rowId: number, row: object): undefined;
declare function deleteRow(rowId: number): number;