import { useAppDispatch } from "../hooks/store";
import { addNewUser, deleteUserById, userId } from "../store/users/slice";

export default function useUserActions() {
	const dispatch = useAppDispatch();

	const addUser = ({ name, email, github }) => {
		dispatch(addNewUser({ name, email, github }));
	};

	const removeUser = (id: userId) => {
		dispatch(deleteUserById(id));
	};

	return { addUser, removeUser };
}
