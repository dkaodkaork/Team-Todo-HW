// // src/redux/modules/todosSlice.js

// import axios from "axios";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   todolist: [], // data
//   isLoading: false, // 서버에서 todos를 가져오는 상태를 나타내는 값 서버 통신이 시작되면 TRUE였다가 통신이 끝나면 다시 FALSE로 변경
//   error: null, // 서버에서 통신이 실패할 경우에 서버에서 보내주는ㄴ 에러메세지를 담아 놓는 것
// };

// export const __getTodos = createAsyncThunk(
//   "getTodos",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.get("http://localhost:3005/todolist");
//       console.log(data);
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// // 각각의 API가 Dispatch 해줄 Reducer를 만들어야한다.
// // dispatch 라는 것은 reducer에게 ACtion과 payload를 전달

// export const todosSlice = createSlice({
//   name: "todos",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [__getTodos.pending]: (state) => {
//       state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
//     },
//     [__getTodos.fulfilled]: (state, action) => {
//       state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
//       state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
//     },
//     [__getTodos.rejected]: (state, action) => {
//       state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
//       state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
//     },
//   },
// });

// export const {} = todosSlice.actions;
// export default todosSlice.reducer;

// //1. thunk 함수 추가    import 부터
// // 2. try catch 문을 활용해서 에러처리
// // 3. index.js 에 porvider 주입
// // 4. server에서 데이터를 가져오는데 문제가 없었다면 가져온 데이터를 STORE 에 넣어준다
// // reducer 구현
// // 5. Thunk함수는 REducer에 직접 넣어주는 것이 아니기 때문에 extraReducer를 Pendimg, fullfiled, rejected 에관해 어떻게 새로운
// // state를 반환할 것이진지 구현
