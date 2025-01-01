import axios from "axios";

import { DepthManager } from "./DepthManager";
const solInrMarket = new DepthManager("B-SOL_INR");

const usdInrMarket = new DepthManager("B-USDT_INR");

const solUsdtMarket = new DepthManager("B-SOL_USDT");


setInterval(() => {
    console.log(solInrMarket.getReleventDepth())
    console.log(usdInrMarket.getReleventDepth())
    console.log(solUsdtMarket.getReleventDepth())

},2000);