export const useColor = () => useState<string>("color", () => "pink");
export const useCounter = () => useState<number>("counter", () => 0);
