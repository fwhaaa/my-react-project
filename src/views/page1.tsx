import { useSelector, useDispatch } from "react-redux";
import store from "@/store";
import numStatus from "@/store/NumStatus";

type RootState = ReturnType<typeof store.getState>;
const View = () => {
  const { num } = useSelector((state: RootState) => ({
    num: state.handleNum.num,
  }));

  const dispatch = useDispatch();
  const changeNum = () => {
    dispatch({ type: "add2", val: 3 });
  };
  const changeNum2 = () => {
    // dispatch((dis: Function) => {
    //   setTimeout(() => {
    //     dis({ type: "add1" });
    //   }, 1000);
    numStatus.asyncActions.asyncAdd1(dispatch);
  };

  const { sarr } = useSelector((state: RootState) => ({
    sarr: state.handleArr.sarr,
  }));
  const changeArr = () => {
    dispatch({ type: "sarrpush", val: 3 });
  };

  return (
    <div className="home">
      <p>这是Page1页面内容</p>
      <p>{num}</p>
      <button onClick={changeNum}>同步按钮</button>
      <button onClick={changeNum2}>异步按钮</button>
    </div>
  );
};
export default View;
