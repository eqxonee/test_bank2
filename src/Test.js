import axios from "axios";

class test {

    #axios

    constructor() {
        this.#axios = axios.create({
            //baseURL: "http://localhost/api/categories"
            baseURL: "http://localhost:8050/account"
        });
    }

    async testCheck(id,money) {
        return await this.#axios.post("/kafka-update",money);
    }

}

export default test;