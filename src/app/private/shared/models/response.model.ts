export class ResponseModel {
    data?: any;
    message: string | null = null;
    status: boolean = false;
    statusCode?: any;

    constructor(res: any) {
        if (res) {
            this.data = res.data ?? res;
            this.message = res.message ?? res.Message ?? null;
            this.statusCode = res.statusCode ?? null;
            this.status = res.status === 'success' || res.status === true;
        } else {
            this.data = null;
            this.message = null;
            this.statusCode = null;
        }
    }
}