import {BeforeAll, Before, AfterAll, After} from "@cucumber/cucumber";
import {chromium} = require("playwright");

BeforeAll(async() => {
    global.browser = await chromium.launch({
        headless: false,
    })
});