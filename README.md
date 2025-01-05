<<<<<<< HEAD
## Creating a backend app that run some logic to make money on crypto exchange that is illiquid.

## Preface 
 
The goal is to code something on node.js which will lookover illiquid overbook, and when an order 
is placed, quickly re-buy the same thing in more liquid markets to gain some arb 
=======
# trading-bot-coindcx

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.42. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
>>>>>>> 3a69fdc (some diff occur between crypto exchanges)

## Disclaimer:- It might be profitble or not depending upon illiqued market 

This will revolve around highest bid and lowest ask price for the same market that might be profitble even after applying tax but you need to make sure no other bot run simultaneously for same market, if it does both will compatite and no one make profit by this.
