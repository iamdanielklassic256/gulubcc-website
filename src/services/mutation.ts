import { Contact } from "@/types/contact";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getSermonData, postContact } from "./api";
import toast from "react-hot-toast";

export function usePostContact() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (data: Contact) => postContact(data),
		onMutate: () => {
			// console.log("mutate");
		},
		onError: () => {
			console.log("error");
		},

		onSuccess: () => {
			console.log("success");
			// toast.success("Data sent")
		},

		onSettled: async (_, error) => {
			console.log("settled");
			if (error) {
				console.log(error);
			} else {
				await queryClient.invalidateQueries({ queryKey: ["contact"] });
			}
			toast.success("Your message submitted successsfully")
		},
	});
}

export function useGetSermons() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: () => getSermonData(),
		onMutate: () => {
			console.log("mutate");
		},
		onError: () => {
			console.log("error");
		},

		onSuccess: () => {
			console.log("success");
			// toast.success("Data sent")
		},

		onSettled: async (_, error) => {
			console.log("settled");
			if (error) {
				console.log(error);
			} else {
				await queryClient.invalidateQueries({ queryKey: ["sermons"] });
			}
			toast.success("Your message submitted successsfully")
		},
	});
}


