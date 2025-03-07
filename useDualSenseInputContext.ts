import { useContext } from "react";
import { DualSenseInputContext } from "./DualSenseInputContext";

export const useDualSenseInputContext = () => {
    const context = useContext(DualSenseInputContext);
    if (context === undefined) {
        throw new Error("DualSenseInput error");
    }
    return context;
};