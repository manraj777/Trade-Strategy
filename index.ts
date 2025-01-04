import axios from "axios";

import { DepthManager } from "./DepthManager";
const solInrMarket = new DepthManager("B-SOL_INR");

const usdInrMarket = new DepthManager("B-USDT_INR");

const solUsdtMarket = new DepthManager("B-SOL_USDT");


setInterval(() => {
    console.log(solInrMarket.getReleventDepth())
    console.log(usdInrMarket.getReleventDepth())
    console.log(solUsdtMarket.getReleventDepth())

    // there are two side we have to watch
    // sell SOL for INR, buy USDT from INR, buy SOL for USDT
    // lets say we have 1 SOL
    const canGetInr = solInrMarket.getReleventDepth().lowestAsk - 0.001;
    const canGetUsdt = canGetInr/ usdInrMarket.getReleventDepth().lowestAsk;
    const canGetSol = canGetUsdt/ solUsdtMarket.getReleventDepth().lowestAsk;

    console.log(`you can convert ${1} SOL into ${canGetSol} SOL`)

    // buy SOL from INR, sell SOL for USDT, sell USDT for INR
    const initialInr = solInrMarket.getReleventDepth().highestBid + 0.001;
    const canGetUsdt2 = 1 * usdInrMarket.getReleventDepth().highestBid;
    const canGetInr2 =  usdInrMarket.getReleventDepth().highestBid * canGetUsdt2;

    console.log(`You can convert ${initialInr} SOL into ${canGetInr2} INR`)
},2000);