import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RemoveMovieAPI } from "../apis/RemoveMovie";

const useRemoveMovieMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: RemoveMovieAPI,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["movies"] });
        },
        onError: (error) => {
            console.error('Error submitting post:', error.message);
          }
    });
};

export default useRemoveMovieMutation;
