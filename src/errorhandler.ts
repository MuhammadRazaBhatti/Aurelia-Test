export class ErrorHandler {
    static handleError(response) {
        this.displayErrors(response.messages);
    }

    private static displayErrors(messages: Array<string>) {
        if (messages) {
            console.log(messages.forEach(msg => msg));
        }
    }
}
