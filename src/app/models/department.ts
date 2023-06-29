export interface department {
    status: number;
    data:   Data;
}

export interface Data {
    count: number;
    rows:  Row[];
}

export interface Row {
    id:     number;
    name:   string;
    status: string;
}
