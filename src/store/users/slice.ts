import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
	{
		id: "1",
		name: "John Doe",
		email: "john@doe.com",
		github: "johnDoe",
	},
	{
		id: "2",
		name: "Marie Müller",
		email: "marie@mueller.com",
		github: "Marie29",
	},
	{
		id: "3",
		name: "Kevin Smith",
		email: "kevin@smith.com",
		github: "KevinIsCool",
	},
	{
		id: "4",
		name: "Mohammed Ali",
		email: "mohammed@web.de",
		github: "MohaMMed",
	},
	{
		id: "5",
		name: "Ana Gomes",
		email: "ana@gomes.com",
		github: "Anitta90",
	},
	{
		id: "6",
		name: "Sebastian Rein",
		email: "sebastian@gmail.com",
		github: "SebasRein",
	},
	{
		id: "7",
		name: "Yating Wang",
		email: "yating@wang.com",
		github: "YaoWang",
	},
];

export type userId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: userId;
}

const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			state.push({ id, ...action.payload });
		},
		deleteUserById: (state, action: PayloadAction<userId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			const isUserAlreadyDefined = state.some(
				(user) => user.id === action.payload.id,
			);
			if (!isUserAlreadyDefined) {
				state.push(action.payload);
			}
		},
	},
});

export default usersSlice.reducer;

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions;
