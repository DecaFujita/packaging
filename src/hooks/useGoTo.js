import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
const useGoTo = (path) => { navigate(path) }

export default useGoTo; 