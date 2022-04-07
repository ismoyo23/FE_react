import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/combine";
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
