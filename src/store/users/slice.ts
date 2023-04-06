import { createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: string;
}

const initialState: UserWithId[] = [
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

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

export default usersSlice.reducer;
