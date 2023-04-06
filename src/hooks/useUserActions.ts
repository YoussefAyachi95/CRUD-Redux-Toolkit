import { useAppDispatch } from "../hooks/store";
import { deleteUserById, userId } from "../store/users/slice";

export default function useUserActions() {
	const dispatch = useAppDispatch();

	const removeUser = (id: userId) => {
		dispatch(deleteUserById(id));
	};

	return { removeUser };
}
