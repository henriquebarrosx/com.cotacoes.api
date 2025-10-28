export type RawQuoteDTO = {
    pid: string;                      // Example: "1061443"  
    last_dir: "greenBg" | "redBg";    // Example: "greenBg" 
    last_numeric: string;             // Example: 1893.3     
    last: string;                     // Example: "1,893.30" 
    bid: string;                      // Example: "0.00"     
    ask: string;                      // Example: "0.00"     
    high: string;                     // Example: "1,940.61" 
    low: string;                      // Example: "1,868.16" 
    last_close: string;               // Example: "1,937.35" 
    pc: string;                       // Example: "-44.05"   
    pcp: string;                      // Example: "-2.27%"   
    pc_col: "redFont" | "greenFont";  // Example: "redFont" 
    time: string;                     // Example: "15:09:45" 
    timestamp: number;                // Example: 1742137785 
    turnover?: string;                 // Example: "310.17K"  
    turnover_numeric?: number;         // Example: 310172     
};