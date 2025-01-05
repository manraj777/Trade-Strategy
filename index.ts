import axios from "axios";

import { DepthManager } from "./DepthManager";
import { cancleAll, createOrder } from "./order";
const solInrMarket = new DepthManager("B-SOL_INR");

const usdtInrMarket = new DepthManager("B-USDT_INR");

const solUsdtMarket = new DepthManager("B-SOL_USDT");


setInterval(() => {
    console.log(solInrMarket.getRelevantDepth())
    console.log(usdtInrMarket.getRelevantDepth())
    console.log(solUsdtMarket.getRelevantDepth())

    // there are two side we have to watch
    // sell SOL for INR, buy USDT from INR, buy SOL for USDT
    // lets say we have 1 SOL
    const canGetInr = solInrMarket.getRelevantDepth().lowestAsk - 0.001;
    const canGetUsdt = canGetInr/ usdtInrMarket.getRelevantDepth().lowestAsk;
    const canGetSol = canGetUsdt/ solUsdtMarket.getRelevantDepth().lowestAsk;

    console.log(`you can convert ${1} SOL into ${canGetSol} SOL`)

    // buy SOL from INR, sell SOL for USDT, sell USDT for INR
    const initialInr = solInrMarket.getRelevantDepth().highestBid + 0.001;
    const canGetUsdt2 = solUsdtMarket.getRelevantDepth().highestBid;
    const canGetInr2 =  canGetUsdt2 * usdtInrMarket.getRelevantDepth().highestBid;

    console.log(`You can convert ${initialInr} INR into ${canGetInr2} INR`)
},2000);

setInterval(async() => {
    await createOrder("buy","SOLINR", 81, 10, Math.random().toString())
    await new Promise((r) => setTimeout(r, 4000));
    await cancleAll("SOLINR");
},10000)