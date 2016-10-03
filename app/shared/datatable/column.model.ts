export class TableColumn {
    title: string;
    data: string;
    orderable: boolean;
    searchable: boolean;
}

export class ColumnModel extends TableColumn {
    visible: boolean = true;
    row: any = {};
}