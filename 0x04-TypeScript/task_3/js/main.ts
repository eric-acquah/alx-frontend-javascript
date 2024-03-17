/// <reference path="crud.d.ts" />

import * as CRUD from "./crud"
import { RowID, RowElement } from './interface';

const obj: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(obj);

const updatedRow: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23
}

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);